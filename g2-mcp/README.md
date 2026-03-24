# g2-mcp

MCP server for the [G2 Data API](https://data.g2.com/api/docs).  
Exposes G2 product, competitor, category, rating, and review data as MCP tools — ready to plug into Claude or any MCP-compatible client.

## Tools

| Tool | Description |
|---|---|
| `search_product` | Look up a product by name, domain, or slug → returns G2 UUID |
| `get_product` | Full product profile: name, rating, review count, G2 URL |
| `get_product_categories` | All G2 categories a product belongs to |
| `get_competitors` | Full competitor list with ratings, categories, G2 URLs |
| `get_product_ratings` | Ease of use / support / setup scores (0–10) |
| `get_reviews` | Paginated reviews with likes, dislikes, recommendations |
| `get_category` | Fetch a G2 category by UUID, slug, or name |
| `list_categories` | Browse/search all G2 categories |

## Prerequisites

- Python 3.12+
- G2 API token — generate at [g2.com/static/integrations](https://www.g2.com/static/integrations)

## Quickstart

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Set your API key
export G2_API_KEY=your_token_here

# 3. Run the server
python server.py
```

## Docker

```bash
# Build and run
G2_API_KEY=your_token_here docker-compose up --build

# Or run directly
docker build -t g2-mcp .
docker run -e G2_API_KEY=your_token_here g2-mcp
```

## Claude Desktop config

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)  
or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "g2": {
      "command": "python",
      "args": ["/absolute/path/to/g2-mcp/server.py"],
      "env": {
        "G2_API_KEY": "your_token_here"
      }
    }
  }
}
```

## Claude.ai / Coolify deployment

Deploy via Docker Compose on your Coolify instance (`http://vps.opensaasapps.com:8000`):

1. Push this repo to GitHub
2. In Coolify → New Resource → Docker Compose → point to your repo
3. Add `G2_API_KEY` as an environment variable in Coolify
4. Deploy — the server will be available at your Coolify URL

## Running tests

```bash
pip install pytest

# Without API key — runs import/shape tests only
pytest test_server.py -v

# With API key — runs full live API tests
G2_API_KEY=your_token_here pytest test_server.py -v
```

## CI/CD (GitHub Actions)

On every push:
- Tests run automatically (live tests run if `G2_API_KEY` secret is set)
- On merge to `main`: Docker image is built and pushed to Docker Hub

Required GitHub repository secrets:
- `G2_API_KEY` — your G2 API token (optional; live tests skipped if absent)
- `DOCKERHUB_USERNAME` — your Docker Hub username
- `DOCKERHUB_TOKEN` — Docker Hub access token ([create here](https://hub.docker.com/settings/security))

## Rate limits

G2 API: 100 requests/second global. Blocked for 60 seconds if exceeded.

## Authentication

Token is read from the `G2_API_KEY` environment variable.  
**Never commit your API key to source control.**
