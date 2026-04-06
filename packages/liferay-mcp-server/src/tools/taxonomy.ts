import { LiferayClient, buildQuery, ok, err } from "../client.js";

export function registerTaxonomyTools(server: any, client: LiferayClient) {
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
  // list_vocabularies
  // ═══════════════════════════════════════════════════════════════

  tool("list_vocabularies", "List taxonomy vocabularies for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
    },
  }, async ({ siteId }) => {
    return client.get(`/headless-admin-taxonomy/v1.0/sites/${siteId}/taxonomy-vocabularies`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_categories
  // ═══════════════════════════════════════════════════════════════

  tool("list_categories", "List taxonomy categories in a vocabulary", {
    type: "object",
    required: ["vocabId"],
    properties: {
      vocabId: { type: "string", description: "The taxonomy vocabulary ID" },
    },
  }, async ({ vocabId }) => {
    return client.get(`/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/${vocabId}/taxonomy-categories`);
  });

  // ═══════════════════════════════════════════════════════════════
  // create_vocabulary
  // ═══════════════════════════════════════════════════════════════

  tool("create_vocabulary", "Create a taxonomy vocabulary in a site", {
    type: "object",
    required: ["siteId", "name"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
      name: { type: "string", description: "Vocabulary name" },
    },
  }, async ({ siteId, ...body }) => {
    return client.post(`/headless-admin-taxonomy/v1.0/sites/${siteId}/taxonomy-vocabularies`, body);
  });

  // ═══════════════════════════════════════════════════════════════
  // create_category
  // ═══════════════════════════════════════════════════════════════

  tool("create_category", "Create a taxonomy category in a vocabulary", {
    type: "object",
    required: ["vocabId", "name"],
    properties: {
      vocabId: { type: "string", description: "The taxonomy vocabulary ID" },
      name: { type: "string", description: "Category name" },
    },
  }, async ({ vocabId, ...body }) => {
    return client.post(`/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/${vocabId}/taxonomy-categories`, body);
  });
}
