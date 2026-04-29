# Lifera* MCP Server

MCP server for Lifera* DXP/Portal REST API.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `LIFERAY_URL` | Yes | Base URL of your Lifera* instance |
| `LIFERAY_USERNAME` | Yes | Username for authentication |
| `LIFERAY_PASSWORD` | Yes | Password for authentication |

## Tools

### Blog Postings
- `list_blog_postings` - List blog postings for a Lifera* site
- `get_blog_posting` - Get a single blog posting by ID
- `create_blog_posting` - Create a new blog posting
- `update_blog_posting` - Update an existing blog posting
- `delete_blog_posting` - Delete a blog posting by ID

## Usage

```bash
LIFERAY_URL=https://your-lifera*.com LIFERAY_USERNAME=admin LIFERAY_PASSWORD=secret npx @mcp/lifera*-mcp-server
```

## Development

```bash
npm install
npm run build
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t lifera*-mcp-server .
docker run -e LIFERAY_URL=https://your-lifera*.com -e LIFERAY_USERNAME=admin -e LIFERAY_PASSWORD=secret lifera*-mcp-server
```
