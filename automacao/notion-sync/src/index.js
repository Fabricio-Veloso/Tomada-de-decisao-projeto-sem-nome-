const path = require("node:path");

const { parseMarkdown } = require("./markdown-to-notion");
const { NotionClient } = require("./notion-client");
const {
  buildManagedDocument,
  createEmptyManifest,
  flattenSummaryTree,
  parseManifestCodeBlock,
  readSummaryTree,
  stringifyManifest,
} = require("./sync-manifest");

const INDEX_PAGE_TITLE = "_sync-index";
const MAX_TEXT_CHUNK = 1800;

function toRichTextSegments(content) {
  const segments = [];
  let remaining = content;

  while (remaining.length > MAX_TEXT_CHUNK) {
    segments.push(remaining.slice(0, MAX_TEXT_CHUNK));
    remaining = remaining.slice(MAX_TEXT_CHUNK);
  }

  if (remaining.length > 0) {
    segments.push(remaining);
  }

  return segments.map((segment) => ({
    type: "text",
    text: {
      content: segment,
      link: null,
    },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
    },
    plain_text: segment,
    href: null,
  }));
}

function makeCodeBlock(content) {
  return {
    object: "block",
    type: "code",
    code: {
      rich_text: toRichTextSegments(content),
      language: "json",
    },
  };
}

async function ensureIndexPage(notion, rootPageId) {
  const existing = await notion.findChildPageByTitle(rootPageId, INDEX_PAGE_TITLE);
  if (existing) {
    return existing.id;
  }

  const created = await notion.createChildPage(rootPageId, INDEX_PAGE_TITLE);
  return created.id;
}

async function loadManifest(notion, indexPageId, rootDir) {
  const blocks = await notion.listBlockChildren(indexPageId);
  for (const block of blocks) {
    if (block.type !== "code") {
      continue;
    }

    const text = (block.code.rich_text || []).map((item) => item.plain_text).join("");
    const parsed = parseManifestCodeBlock(text);
    if (parsed) {
      return parsed;
    }
  }

  return createEmptyManifest(rootDir);
}

async function saveManifest(notion, indexPageId, manifest) {
  const blocks = [
    {
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "Indice tecnico do sync. Nao usar como pagina editorial.",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Indice tecnico do sync. Nao usar como pagina editorial.",
            href: null,
          },
        ],
      },
    },
    makeCodeBlock(stringifyManifest(manifest)),
  ];

  await notion.replacePageContent(indexPageId, blocks);
}

async function ensurePage(notion, parentPageId, title) {
  const existing = await notion.findChildPageByTitle(parentPageId, title);
  if (existing) {
    return existing.id;
  }

  const created = await notion.createChildPage(parentPageId, title);
  return created.id;
}

async function syncDocuments({ notion, rootPageId, rootDir, documents, manifest }) {
  const currentEntries = { ...manifest.entries };
  const nextEntries = {};
  const pageIdsBySourcePath = {};

  for (const document of documents) {
    const parentPageId = document.parentRelativePath
      ? pageIdsBySourcePath[document.parentRelativePath]
      : rootPageId;

    if (!parentPageId) {
      throw new Error(`Pagina pai nao encontrada para ${document.relativePath}`);
    }

    const previous = currentEntries[document.relativePath];
    let pageId = previous?.page_id;
    let shouldRewrite = true;

    if (previous && previous.parent_relative_path !== document.parentRelativePath) {
      await notion.archivePage(previous.page_id);
      pageId = null;
    }

    if (!pageId) {
      pageId = await ensurePage(notion, parentPageId, document.title);
    } else if (previous.title !== document.title) {
      await notion.updatePageTitle(pageId, document.title);
    }

    if (previous && previous.hash === document.hash && previous.title === document.title) {
      shouldRewrite = false;
    }

    if (shouldRewrite) {
      await notion.replacePageContent(pageId, document.blocks);
    }

    pageIdsBySourcePath[document.relativePath] = pageId;
    nextEntries[document.relativePath] = {
      page_id: pageId,
      title: document.title,
      hash: document.hash,
      parent_relative_path: document.parentRelativePath,
      source_path: path.posix.join(rootDir.replace(/\\/g, "/"), document.relativePath),
    };
  }

  for (const [relativePath, entry] of Object.entries(currentEntries)) {
    if (!nextEntries[relativePath]) {
      await notion.archivePage(entry.page_id);
    }
  }

  manifest.updated_at = new Date().toISOString();
  manifest.entries = nextEntries;
}

function readDocuments(rootDir) {
  const summaryTree = readSummaryTree(rootDir);
  const flatItems = flattenSummaryTree(summaryTree);
  return flatItems.map((item) => buildManagedDocument(rootDir, item, parseMarkdown));
}

async function main() {
  const validateOnly = process.argv.includes("--validate");
  const rootDir = process.env.NOTION_SYNC_ROOT_DIR || "publicacao";
  const repoRoot = path.resolve(__dirname, "..", "..", "..");
  const rootDirAbsolute = path.resolve(repoRoot, rootDir);
  const documents = readDocuments(rootDirAbsolute);

  console.log(`Documentos gerenciados: ${documents.length}`);
  for (const document of documents) {
    console.log(`- ${document.relativePath}`);
  }

  if (validateOnly) {
    console.log("Validacao concluida sem chamar API do Notion.");
    return;
  }

  const notionToken = process.env.NOTION_TOKEN;
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID;

  if (!notionToken || !rootPageId) {
    throw new Error("Defina NOTION_TOKEN e NOTION_ROOT_PAGE_ID para executar o sync.");
  }

  const notion = new NotionClient(notionToken);
  const indexPageId = await ensureIndexPage(notion, rootPageId);
  const manifest = await loadManifest(notion, indexPageId, rootDir);

  await syncDocuments({
    notion,
    rootPageId,
    rootDir,
    documents,
    manifest,
  });

  await saveManifest(notion, indexPageId, manifest);
  console.log("Sync com Notion concluido.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
