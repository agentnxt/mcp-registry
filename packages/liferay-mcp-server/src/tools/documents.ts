import { LiferayClient, buildQuery, ok, err } from "../client.js";

export function registerDocumentTools(server: any, client: LiferayClient) {
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
  // list_documents
  // ═══════════════════════════════════════════════════════════════

  tool("list_documents", "List documents and media for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
      page: { type: "number", description: "Page number" },
      pageSize: { type: "number", description: "Items per page" },
      search: { type: "string", description: "Search keywords" },
      flatten: { type: "boolean", description: "Flatten folder hierarchy" },
    },
  }, async ({ siteId, ...params }) => {
    const query = buildQuery(params);
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/documents${query}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // get_document
  // ═══════════════════════════════════════════════════════════════

  tool("get_document", "Get a single document by ID", {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", description: "The document ID" },
    },
  }, async ({ id }) => {
    return client.get(`/headless-delivery/v1.0/documents/${id}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // delete_document
  // ═══════════════════════════════════════════════════════════════

  tool("delete_document", "Delete a document by ID", {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", description: "The document ID" },
    },
  }, async ({ id }) => {
    return client.delete(`/headless-delivery/v1.0/documents/${id}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_document_folders
  // ═══════════════════════════════════════════════════════════════

  tool("list_document_folders", "List document folders for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
    },
  }, async ({ siteId }) => {
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/document-folders`);
  });

  // ═══════════════════════════════════════════════════════════════
  // create_document_folder
  // ═══════════════════════════════════════════════════════════════

  tool("create_document_folder", "Create a document folder in a site", {
    type: "object",
    required: ["siteId", "name"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
      name: { type: "string", description: "Folder name" },
    },
  }, async ({ siteId, ...body }) => {
    return client.post(`/headless-delivery/v1.0/sites/${siteId}/document-folders`, body);
  });
}
