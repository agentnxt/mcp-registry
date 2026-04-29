# ── Production stage ──────────────────────────────────────────────────────────
FROM python:3.12-slim AS runner

LABEL org.opencontainers.image.title="g2-mcp"
LABEL org.opencontainers.image.description="MCP server"
LABEL org.opencontainers.image.source="https://github.com/agentnxt/mcpservers"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY server.py .

ENV G2_API_KEY=""

# Create non-root user
RUN addgroup --system mcp && adduser --system --ingroup mcp mcp
USER mcp

CMD ["python", "server.py"]
