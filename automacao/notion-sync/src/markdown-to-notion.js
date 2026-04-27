const MAX_RICH_TEXT_LENGTH = 1800;

function splitLongText(text) {
  if (!text) {
    return [""];
  }

  const chunks = [];
  let remaining = text;

  while (remaining.length > MAX_RICH_TEXT_LENGTH) {
    let splitAt = remaining.lastIndexOf(" ", MAX_RICH_TEXT_LENGTH);
    if (splitAt <= 0) {
      splitAt = MAX_RICH_TEXT_LENGTH;
    }

    chunks.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).trimStart();
  }

  if (remaining.length > 0) {
    chunks.push(remaining);
  }

  return chunks;
}

function makeAnnotations(overrides = {}) {
  return {
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false,
    code: false,
    color: "default",
    ...overrides,
  };
}

function pushText(target, text, annotations = makeAnnotations(), link = null) {
  for (const chunk of splitLongText(text)) {
    target.push({
      type: "text",
      text: {
        content: chunk,
        link: link ? { url: link } : null,
      },
      annotations,
      plain_text: chunk,
      href: link,
    });
  }
}

function parseInline(text) {
  const result = [];
  const pattern = /(\*\*[^*]+\*\*)|(\*[^*]+\*)|(`[^`]+`)|(\[[^\]]+\]\([^\)]+\))/g;
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      pushText(result, text.slice(lastIndex, index));
    }

    const token = match[0];

    if (token.startsWith("**") && token.endsWith("**")) {
      pushText(result, token.slice(2, -2), makeAnnotations({ bold: true }));
    } else if (token.startsWith("*") && token.endsWith("*")) {
      pushText(result, token.slice(1, -1), makeAnnotations({ italic: true }));
    } else if (token.startsWith("`") && token.endsWith("`")) {
      pushText(result, token.slice(1, -1), makeAnnotations({ code: true }));
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
      if (linkMatch) {
        pushText(result, linkMatch[1], makeAnnotations(), linkMatch[2]);
      } else {
        pushText(result, token);
      }
    } else {
      pushText(result, token);
    }

    lastIndex = index + token.length;
  }

  if (lastIndex < text.length) {
    pushText(result, text.slice(lastIndex));
  }

  return result.length > 0 ? result : [{
    type: "text",
    text: { content: text, link: null },
    annotations: makeAnnotations(),
    plain_text: text,
    href: null,
  }];
}

function blockWithRichText(type, text) {
  return {
    object: "block",
    type,
    [type]: {
      rich_text: parseInline(text),
    },
  };
}

function parseMarkdown(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const blocks = [];
  let title = null;
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!title && trimmed.startsWith("# ")) {
      title = trimmed.slice(2).trim();
      index += 1;
      continue;
    }

    if (trimmed === "") {
      index += 1;
      continue;
    }

    if (/^(```|~~~)/.test(trimmed)) {
      const fence = trimmed.slice(0, 3);
      const language = trimmed.slice(3).trim() || "plain text";
      const codeLines = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith(fence)) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      blocks.push({
        object: "block",
        type: "code",
        code: {
          rich_text: parseInline(codeLines.join("\n")),
          language,
        },
      });
      continue;
    }

    if (/^(---|\*\*\*|___)$/.test(trimmed)) {
      blocks.push({ object: "block", type: "divider", divider: {} });
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingType = level === 1 ? "heading_1" : level === 2 ? "heading_2" : "heading_3";
      blocks.push(blockWithRichText(headingType, headingMatch[2].trim()));
      index += 1;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quoteLines.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(blockWithRichText("quote", quoteLines.join("\n")));
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        const item = lines[index].replace(/^\s*[-*]\s+/, "").trim();
        blocks.push(blockWithRichText("bulleted_list_item", item));
        index += 1;
      }
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        const item = lines[index].replace(/^\s*\d+\.\s+/, "").trim();
        blocks.push(blockWithRichText("numbered_list_item", item));
        index += 1;
      }
      continue;
    }

    const paragraphLines = [];
    while (index < lines.length) {
      const current = lines[index];
      const currentTrimmed = current.trim();
      if (
        currentTrimmed === "" ||
        /^(#{1,3})\s+/.test(currentTrimmed) ||
        /^(```|~~~)/.test(currentTrimmed) ||
        /^[-*]\s+/.test(currentTrimmed) ||
        /^\d+\.\s+/.test(currentTrimmed) ||
        currentTrimmed.startsWith("> ") ||
        /^(---|\*\*\*|___)$/.test(currentTrimmed)
      ) {
        break;
      }
      paragraphLines.push(currentTrimmed);
      index += 1;
    }

    blocks.push(blockWithRichText("paragraph", paragraphLines.join(" ")));
  }

  return {
    title: title ?? "Sem titulo",
    blocks,
  };
}

module.exports = {
  parseMarkdown,
};
