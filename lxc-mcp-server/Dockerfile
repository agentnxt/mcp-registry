# ── Build stage ───────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ── Production stage ──────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

LABEL org.opencontainers.image.title="lxc-mcp-server"
LABEL org.opencontainers.image.description="MCP server"
LABEL org.opencontainers.image.source="https://github.com/agentnxt/mcpservers"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Create non-root user
RUN addgroup --system mcp && adduser --system --ingroup mcp mcp
USER mcp

ENTRYPOINT ["node", "dist/index.js"]
