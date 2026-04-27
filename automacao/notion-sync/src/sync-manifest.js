const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const MANIFEST_MARKER = "notion-sync-manifest:v1";

function parseSummary(summaryContent) {
  const lines = summaryContent.replace(/\r\n/g, "\n").split("\n");
  const root = [];
  const stack = [{ indent: -1, children: root }];

  for (const line of lines) {
    const match = line.match(/^(\s*)-\s+\[(.+?)\]\((.+?)\)\s*$/);
    if (!match) {
      continue;
    }

    const indent = match[1].replace(/\t/g, "    ").length;
    const node = {
      title: match[2].trim(),
      relativePath: match[3].trim().replace(/\\/g, "/"),
      children: [],
    };

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push({ indent, children: node.children });
  }

  return root;
}

function flattenSummaryTree(nodes, parentRelativePath = null, target = []) {
  for (const node of nodes) {
    target.push({
      title: node.title,
      relativePath: node.relativePath,
      parentRelativePath,
    });

    flattenSummaryTree(node.children, node.relativePath, target);
  }

  return target;
}

function readSummaryTree(rootDir) {
  const summaryPath = path.join(rootDir, "SUMMARY.md");
  const summaryContent = fs.readFileSync(summaryPath, "utf8");
  return parseSummary(summaryContent);
}

function readMarkdownDocument(rootDir, relativePath) {
  const absolutePath = path.join(rootDir, relativePath);
  return fs.readFileSync(absolutePath, "utf8");
}

function hashContent(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function buildManagedDocument(rootDir, item, parser) {
  const markdown = readMarkdownDocument(rootDir, item.relativePath);
  const parsed = parser(markdown);

  return {
    ...item,
    title: parsed.title || item.title,
    blocks: parsed.blocks,
    hash: hashContent(`${item.relativePath}\n${markdown}`),
  };
}

function parseManifestCodeBlock(codeText) {
  if (!codeText || !codeText.startsWith(MANIFEST_MARKER)) {
    return null;
  }

  const jsonPayload = codeText.slice(MANIFEST_MARKER.length).trimStart();
  return JSON.parse(jsonPayload);
}

function stringifyManifest(manifest) {
  return `${MANIFEST_MARKER}\n${JSON.stringify(manifest, null, 2)}`;
}

function createEmptyManifest(rootDir) {
  return {
    version: 1,
    root_dir: rootDir.replace(/\\/g, "/"),
    updated_at: null,
    entries: {},
  };
}

module.exports = {
  MANIFEST_MARKER,
  buildManagedDocument,
  createEmptyManifest,
  flattenSummaryTree,
  parseManifestCodeBlock,
  parseSummary,
  readSummaryTree,
  stringifyManifest,
};
