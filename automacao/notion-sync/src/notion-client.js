const NOTION_VERSION = "2022-06-28";
const APPEND_LIMIT = 100;

class NotionClient {
  constructor(token) {
    this.token = token;
  }

  async request(path, { method = "GET", body } = {}) {
    const response = await fetch(`https://api.notion.com/v1${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Notion API ${method} ${path} failed: ${response.status} ${errorText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return response.json();
  }

  async listBlockChildren(blockId) {
    const results = [];
    let cursor = undefined;

    do {
      const query = new URLSearchParams();
      if (cursor) {
        query.set("start_cursor", cursor);
      }
      const suffix = query.toString() ? `?${query.toString()}` : "";
      const data = await this.request(`/blocks/${blockId}/children${suffix}`);
      results.push(...data.results);
      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);

    return results;
  }

  async createChildPage(parentPageId, title) {
    return this.request("/pages", {
      method: "POST",
      body: {
        parent: {
          type: "page_id",
          page_id: parentPageId,
        },
        properties: {
          title: {
            title: [
              {
                type: "text",
                text: {
                  content: title,
                },
              },
            ],
          },
        },
      },
    });
  }

  async updatePageTitle(pageId, title) {
    return this.request(`/pages/${pageId}`, {
      method: "PATCH",
      body: {
        properties: {
          title: {
            title: [
              {
                type: "text",
                text: {
                  content: title,
                },
              },
            ],
          },
        },
      },
    });
  }

  async archivePage(pageId) {
    return this.request(`/pages/${pageId}`, {
      method: "PATCH",
      body: {
        archived: true,
      },
    });
  }

  async deleteAllBlockChildren(blockId) {
    const children = await this.listBlockChildren(blockId);

    for (const child of children) {
      await this.request(`/blocks/${child.id}`, {
        method: "DELETE",
      });
    }
  }

  async appendBlockChildren(blockId, children) {
    for (let index = 0; index < children.length; index += APPEND_LIMIT) {
      const chunk = children.slice(index, index + APPEND_LIMIT);
      await this.request(`/blocks/${blockId}/children`, {
        method: "PATCH",
        body: {
          children: chunk,
        },
      });
    }
  }

  async replacePageContent(pageId, children) {
    await this.deleteAllBlockChildren(pageId);

    if (children.length > 0) {
      await this.appendBlockChildren(pageId, children);
    }
  }

  async listChildPages(parentPageId) {
    const children = await this.listBlockChildren(parentPageId);
    return children.filter((child) => child.type === "child_page");
  }

  async findChildPageByTitle(parentPageId, title) {
    const children = await this.listChildPages(parentPageId);
    return children.find((child) => child.child_page?.title === title) ?? null;
  }
}

module.exports = {
  NotionClient,
};
