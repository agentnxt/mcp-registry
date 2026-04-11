# Schema.org JSON-LD Templates

Structured data templates for the AgentNxt MCP Marketplace. Inject these into Ghost CMS pages as code injection (`<script type="application/ld+json">`) to improve SEO and enable rich search results.

## Templates

| Template | Use For | Ghost Page Type |
|----------|---------|-----------------|
| `software-application.jsonld` | Each self-hosted MCP server | Server detail page |
| `web-api.jsonld` | Each cloud MCP server | Cloud server detail page |
| `marketplace.jsonld` | Marketplace homepage | Landing page |
| `organization.jsonld` | Author/publisher profiles | Author page |
| `tech-article.jsonld` | Blog posts, tutorials | Blog post |
| `howto.jsonld` | Step-by-step guides | Documentation page |

## How to Use in Ghost

1. Create a page/post in Ghost
2. Go to **Settings** → **Code injection**
3. Paste in the **Header** section:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lago MCP Server",
  ...
}
</script>
```

4. Replace `{{placeholders}}` with actual values

## Categories for `applicationCategory`

Use these consistently across all server pages:

| Category | Servers |
|----------|---------|
| `DeveloperApplication` | GitHub, GitLab, Playwright |
| `FinanceApplication` | Stripe, Lago, WooCommerce |
| `BusinessApplication` | ERPNext, Mautic, Cal.com |
| `CommunicationApplication` | Slack, Tuwunel, Wuzapi, Evolution |
| `SecurityApplication` | GlitchTip, Sentry, OPA |
| `UtilitiesApplication` | Filesystem, Memory, Sequential Thinking |
| `MultimediaApplication` | EverArt, Figma |
| `WebApplication` | Cloudflare, Netlify, Ghost, Typebot |
| `HealthApplication` | Uptime Kuma, Zabbix, Grafana |
| `StorageApplication` | RustFS, Nextcloud, Redis |
| `SearchApplication` | Brave Search, SearXNG, Exa, txtai |
| `DatabaseApplication` | DBHub, NocoDB, SurrealDB, Qdrant |
| `AIApplication` | Ollama, LiteLLM, MLflow, Evidently, AgentCrew |
