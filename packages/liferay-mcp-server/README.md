# @mcphub/liferay-mcp-server

MCP Server for Liferay DXP headless REST APIs.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `LIFERAY_URL` | Yes | Liferay instance URL (e.g. `https://liferay.example.com`) |
| `LIFERAY_USERNAME` | Yes | Username for Basic auth |
| `LIFERAY_PASSWORD` | Yes | Password for Basic auth |

## Setup

```bash
npm install
npm run build
```

## Usage

```bash
LIFERAY_URL=https://liferay.example.com \
LIFERAY_USERNAME=admin@liferay.com \
LIFERAY_PASSWORD=secret \
npm start
```

Development mode:

```bash
LIFERAY_URL=https://liferay.example.com \
LIFERAY_USERNAME=admin@liferay.com \
LIFERAY_PASSWORD=secret \
npm run dev
```

## Tools (26 total)

### Content (8 tools)
- `list_structured_contents` - List structured web content for a site
- `get_structured_content` - Get a single structured content by ID
- `create_structured_content` - Create structured web content in a site
- `update_structured_content` - Update an existing structured content
- `delete_structured_content` - Delete a structured content
- `list_blog_posts` - List blog posts for a site
- `create_blog_post` - Create a blog post in a site
- `list_content_structures` - List content structures (DDM structures)

### Documents (5 tools)
- `list_documents` - List documents and media for a site
- `get_document` - Get a single document by ID
- `delete_document` - Delete a document
- `list_document_folders` - List document folders for a site
- `create_document_folder` - Create a document folder

### Users (5 tools)
- `list_users` - List user accounts
- `get_user` - Get a single user account by ID
- `list_roles` - List all roles
- `list_organizations` - List all organizations
- `get_my_user` - Get the currently authenticated user

### Sites (4 tools)
- `list_sites` - List all sites
- `get_site` - Get a single site by ID
- `list_pages` - List site pages
- `list_message_boards` - List message board threads

### Taxonomy (4 tools)
- `list_vocabularies` - List taxonomy vocabularies for a site
- `list_categories` - List taxonomy categories in a vocabulary
- `create_vocabulary` - Create a taxonomy vocabulary
- `create_category` - Create a taxonomy category

## MCP Configuration

```json
{
  "mcpServers": {
    "liferay": {
      "command": "node",
      "args": ["/path/to/liferay-mcp-server/dist/index.js"],
      "env": {
        "LIFERAY_URL": "https://liferay.example.com",
        "LIFERAY_USERNAME": "admin@liferay.com",
        "LIFERAY_PASSWORD": "secret"
      }
    }
  }
}
```
