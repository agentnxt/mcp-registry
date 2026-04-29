# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-04-29

### Added
- **67 MCP Servers** - Full registry of production-ready Model Context Protocol servers
- **Landing Page** - Static site with server listing deployed to GitHub Pages
- **Docker Hardening** - Security improvements for 7 Dockerfiles:
  - `ansible-mcp-server`
  - `gcloud-run-mcp-server`
  - `lxc-mcp-server`
  - `microcloud-mcp-server`
  - `terraform-mcp-server`
  - `g2-mcp`
  - `hostinger-mcp`
- Multi-stage Docker builds for Node.js servers
- OCI labels for container metadata
- Non-root user execution in containers
- **GitHub Pages Workflow** - Automated static site deployment
- **README** - Documentation for `lifera*-mcp-server`

### Servers Added
- agentcrew-mcp-server
- argilla-mcp-server
- aws-kb-retrieval-mcp-server
- brave-search-mcp-server
- calcom-mcp-server
- camunda-mcp-server
- cognitive-memory-mcp-server
- dbhub-mcp-server
- erpnext-mcp-server
- everart-mcp-server
- everything-mcp-server
- evidently-mcp-server
- evolution-mcp-server
- exa-mcp-server
- filesystem-mcp-server
- g2-mcp
- gcloud-run-mcp-server
- gdrive-mcp-server
- ghost-mcp-server
- github-mcp-server
- gitlab-mcp-server
- glitchtip-mcp-server
- google-analytics-mcp-server
- google-maps-mcp-server
- grafana-mcp-server
- hostinger-mcp
- lago-mcp-server
- langflow-mcp-server
- liferay-mcp-server
- liferay-mcp-sync
- limesurvey-mcp-server
- litellm-mcp-server
- logto-mcp-server
- lxc-mcp-server
- marquez-mcp-server
- matomo-mcp-server
- mautic-mcp-server
- memory-mcp-server
- microcloud-mcp-server
- mlflow-mcp-server
- n8n-mcp-server
- nextcloud-mcp-server
- nocodb-mcp-server
- ollama-mcp-server
- opa-mcp-server
- playwright-mcp-server
- postiz-mcp-server
- qdrant-mcp-server
- redis-mcp-server
- rustfs-mcp-server
- searxng-mcp-server
- sequentialthinking-mcp-server
- simstudio-mcp-server
- skyvern-mcp-server
- slack-mcp-server
- stalwart-mcp-server
- surrealdb-mcp-server
- temporal-mcp-server
- terraform-mcp-server
- tuwunel-mcp-server
- txtai-mcp-server
- typebot-mcp-server
- uptime-kuma-mcp-server
- woocommerce-mcp-server
- wuzapi-mcp-server
- zabbix-mcp-server

### Infrastructure
- GitHub Actions workflows for Docker image publishing
- Docker Compose for local development
- MCP Gateway configuration (`gateway-import.json`)
- Registry schema and documentation

[Unreleased]: https://github.com/agnxxt/mcp-registry/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/agnxxt/mcp-registry/tree/v1.0.0