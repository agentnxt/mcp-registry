import { LiferayClient, buildQuery, ok, err } from "../client.js";

export function registerSiteTools(server: any, client: LiferayClient) {
  const tool = (name: string, desc: string, schema: object, fn: (a: any) => Promise<unknown>) => {
    server.tool(name, desc, schema, async (args: any) => {
      try {
        return ok(await fn(args));
      } catch (e) {
        return err(e);
      }
    });
  };

  // ═══════════════════════════════════════════════════════════════
  // list_sites
  // ═══════════════════════════════════════════════════════════════

  tool("list_sites", "List all sites (groups)", {
    type: "object",
    properties: {},
  }, async () => {
    return client.get(`/headless-admin-user/v1.0/sites`);
  });

  // ═══════════════════════════════════════════════════════════════
  // get_site
  // ═══════════════════════════════════════════════════════════════

  tool("get_site", "Get a single site by ID", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
    },
  }, async ({ siteId }) => {
    return client.get(`/headless-admin-user/v1.0/sites/${siteId}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_pages
  // ═══════════════════════════════════════════════════════════════

  tool("list_pages", "List site pages for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
    },
  }, async ({ siteId }) => {
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/site-pages`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_message_boards
  // ═══════════════════════════════════════════════════════════════

  tool("list_message_boards", "List message board threads for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
      page: { type: "number", description: "Page number" },
      pageSize: { type: "number", description: "Items per page" },
      search: { type: "string", description: "Search keywords" },
    },
  }, async ({ siteId, ...params }) => {
    const query = buildQuery(params);
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/message-board-threads${query}`);
  });
}
