#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { LiferayClient } from "./client.js";
import { LiferayConfig } from "./types.js";
import { registerContentTools } from "./tools/content.js";
import { registerDocumentTools } from "./tools/documents.js";
import { registerUserTools } from "./tools/users.js";
import { registerSiteTools } from "./tools/sites.js";
import { registerTaxonomyTools } from "./tools/taxonomy.js";

const config: LiferayConfig = {
  url: process.env.LIFERAY_URL ?? "",
  username: process.env.LIFERAY_USERNAME ?? "",
  password: process.env.LIFERAY_PASSWORD ?? "",
};

if (!config.url || !config.username || !config.password) {
  console.error(
    "Missing required environment variables.\n" +
    "  Required: LIFERAY_URL, LIFERAY_USERNAME, LIFERAY_PASSWORD\n\n" +
    "  Example:\n" +
    "  LIFERAY_URL=https://your-liferay-instance.com \\\n" +
    "  LIFERAY_USERNAME=admin@liferay.com \\\n" +
    "  LIFERAY_PASSWORD=your-password \\\n" +
    "  node dist/index.js"
  );
  process.exit(1);
}

const client = new LiferayClient(config);

const server = new McpServer({
  name: "liferay-mcp-server",
  version: "1.0.0",
  description: "MCP server for Liferay DXP headless REST APIs — content, documents, users, sites, and taxonomy",
});

// Register all tool groups
registerContentTools(server, client);
registerDocumentTools(server, client);
registerUserTools(server, client);
registerSiteTools(server, client);
registerTaxonomyTools(server, client);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error(`Liferay MCP server running — endpoint: ${config.url}`);
