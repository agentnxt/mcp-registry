import { LiferayClient, buildQuery, ok, err } from "../client.js";

export function registerUserTools(server: any, client: LiferayClient) {
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
  // list_users
  // ═══════════════════════════════════════════════════════════════

  tool("list_users", "List user accounts", {
    type: "object",
    properties: {
      page: { type: "number", description: "Page number" },
      pageSize: { type: "number", description: "Items per page" },
      search: { type: "string", description: "Search keywords" },
      filter: { type: "string", description: "OData filter expression" },
    },
  }, async (params) => {
    const query = buildQuery(params);
    return client.get(`/headless-admin-user/v1.0/user-accounts${query}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // get_user
  // ═══════════════════════════════════════════════════════════════

  tool("get_user", "Get a single user account by ID", {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", description: "The user account ID" },
    },
  }, async ({ id }) => {
    return client.get(`/headless-admin-user/v1.0/user-accounts/${id}`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_roles
  // ═══════════════════════════════════════════════════════════════

  tool("list_roles", "List all roles", {
    type: "object",
    properties: {},
  }, async () => {
    return client.get(`/headless-admin-user/v1.0/roles`);
  });

  // ═══════════════════════════════════════════════════════════════
  // list_organizations
  // ═══════════════════════════════════════════════════════════════

  tool("list_organizations", "List all organizations", {
    type: "object",
    properties: {},
  }, async () => {
    return client.get(`/headless-admin-user/v1.0/organizations`);
  });

  // ═══════════════════════════════════════════════════════════════
  // get_my_user
  // ═══════════════════════════════════════════════════════════════

  tool("get_my_user", "Get the currently authenticated user account", {
    type: "object",
    properties: {},
  }, async () => {
    return client.get(`/headless-admin-user/v1.0/my-user-account`);
  });
}
