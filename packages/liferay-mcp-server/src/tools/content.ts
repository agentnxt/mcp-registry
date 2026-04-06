import { LiferayClient, buildQuery, ok, err } from "../client.js";

export function registerContentTools(server: any, client: LiferayClient) {
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
  // list_structured_contents
  // ═══════════════════════════════════════════════════════════════

  tool("list_structured_contents", "List structured web content for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID or group ID" },
      page: { type: "number", description: "Page number (default 1)" },
      pageSize: { type: "number", description: "Items per page (default 20)" },
      search: { type: "string", description: "Search keywords" },
      filter: { type: "string", description: "OData filter expression" },
      sort: { type: "string", description: "Sort field and order, e.g. 'dateModified:desc'" },
    },
  }, async ({ siteId, ...params }) => {
    const query = buildQuery(params);
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/structured-contents${query}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // get_structured_content
  // ═══════════════════════════════════════════════════════════════

  tool("get_structured_content", "Get a single structured content by ID", {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", description: "The structured content ID" },
    },
  }, async ({ id }) => {
    return client.get(`/headless-delivery/v1.0/structured-contents/${id}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // create_structured_content
  // ═══════════════════════════════════════════════════════════════

  tool("create_structured_content", "Create structured web content in a site", {
    type: "object",
    required: ["siteId", "title", "contentStructureId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
      title: { type: "string", description: "Content title" },
      contentStructureId: { type: "number", description: "ID of the content structure (DDM template)" },
      contentFields: {
        type: "array",
        description: "Array of content field objects with name, contentFieldValue, etc.",
        items: { type: "object" },
      },
    },
  }, async ({ siteId, ...body }) => {
    return client.post(`/headless-delivery/v1.0/sites/${siteId}/structured-contents`, body);
  });

  // ═══════════════════════════════════════════════════════════════
  // update_structured_content
  // ═══════════════════════════════════════════════════════════════

  tool("update_structured_content", "Update an existing structured content by ID", {
    type: "object",
    required: ["id", "data"],
    properties: {
      id: { type: "string", description: "The structured content ID" },
      data: { type: "object", description: "Fields to update (title, contentFields, etc.)" },
    },
  }, async ({ id, data }) => {
    return client.put(`/headless-delivery/v1.0/structured-contents/${id}`, data);
  });

  // ═══════════════════════════════════════════════════════════════
  // delete_structured_content
  // ═══════════════════════════════════════════════════════════════

  tool("delete_structured_content", "Delete a structured content by ID", {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", description: "The structured content ID" },
    },
  }, async ({ id }) => {
    return client.delete(`/headless-delivery/v1.0/structured-contents/${id}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_blog_posts
  // ═══════════════════════════════════════════════════════════════

  tool("list_blog_posts", "List blog posts for a site", {
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
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/blog-postings${query}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // create_blog_post
  // ═══════════════════════════════════════════════════════════════

  tool("create_blog_post", "Create a blog post in a site", {
    type: "object",
    required: ["siteId", "headline", "articleBody"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
      headline: { type: "string", description: "Blog post headline" },
      articleBody: { type: "string", description: "Blog post body (HTML)" },
    },
  }, async ({ siteId, ...body }) => {
    return client.post(`/headless-delivery/v1.0/sites/${siteId}/blog-postings`, body);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_content_structures
  // ═══════════════════════════════════════════════════════════════

  tool("list_content_structures", "List content structures (DDM structures) for a site", {
    type: "object",
    required: ["siteId"],
    properties: {
      siteId: { type: "string", description: "The site ID" },
    },
  }, async ({ siteId }) => {
    return client.get(`/headless-delivery/v1.0/sites/${siteId}/content-structures`);
  });
}
