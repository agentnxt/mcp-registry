# OpenAutonomyX Standards-First Policy

This policy applies across OpenAutonomyX and AgentNxt products, repositories, schemas, metadata models, registries, runtimes, agents, and trust systems.

## Core principle

Do not reinvent what a mature open standard, open-source foundation, or widely adopted framework already covers.

Use this decision order:

1. Adopt an existing standard or framework.
2. Align to the relevant open-source ecosystem or foundation collection.
3. Extend only for the missing gap.
4. Build a new OpenAutonomyX/AgentNxt vocabulary only when no mature framework fits.
5. Mark new vocabulary as experimental until it has examples, review, and adoption.

## Product alignment rule

Every OpenAutonomyX product should identify at least one primary open ecosystem alignment before introducing custom models or infrastructure.

Use Linux Foundation curated collections and other mature open standards as the first alignment map.

Examples:

| Product concern | Prefer alignment with |
|---|---|
| Public semantic metadata | Schema.org |
| APIs and API documentation | OpenAPI, AsyncAPI, Schema.org `WebAPI`, Schema.org `APIReference` |
| Cloud-native runtime, deployment, gateways, observability | CNCF, Kubernetes, Helm, OpenTelemetry, Envoy, Gateway API |
| Container image identity and metadata | OCI |
| Supply-chain security and integrity | OpenSSF, SLSA, Sigstore, SPDX, CycloneDX |
| Decentralized identity, credentials, ledgers, endorsements | LF Decentralized Trust, Hyperledger, Trust Over IP, W3C DID, W3C Verifiable Credentials |
| Provenance | W3C PROV, SLSA, Sigstore attestations, C2PA where content/media provenance matters |
| AI, ML, data, pipelines, model serving, evaluation | LF AI & Data, PyTorch Foundation, Open Platform for Enterprise AI where relevant |
| JavaScript/web app ecosystem | OpenJS Foundation |
| Finance/regtech products | FINOS |
| Edge/IoT products | LF Edge |
| Energy/grid products | LF Energy |
| Networking/telco products | LF Networking, O-RAN Software Community where relevant |

## Registry and canonical ID rule

Do not invent registry IDs, package identifiers, or canonical ID schemes if existing identifiers fit.

Prefer:

| Need | Prefer |
|---|---|
| Web identity | canonical URL, `@id`, `url`, Schema.org `identifier` |
| Decentralized identity | DID |
| Package identity | ecosystem-native package coordinates, such as npm package name, PyPI project name, Maven coordinates, Cargo crate, Go module path |
| Container artifact identity | OCI image reference and immutable digest |
| Source repository identity | canonical repository URL and commit/tag refs |
| Software/package license and SBOM identity | SPDX, CycloneDX |
| Build/release provenance identity | SLSA provenance, Sigstore bundle/attestation, OCI digest |
| Local registry lookup | local slug or alias only, never as the sole canonical identity when a better external identifier exists |

For MCP registry entries:

- `mcp.canonicalId` should normally be a publisher-controlled URL or DID.
- `mcp.id` is a local registry slug or legacy ID.
- `mcp.aliases` are search aliases, previous names, package names, or convenience labels.
- `sameAs` means the same entity.
- `isBasedOn` means derived from, forked from, wrapped from, cloned from, or adapted from.

## Schema and metadata rule

Use Schema.org first for public semantics.

Examples:

| Concept | Use |
|---|---|
| Application/software | `SoftwareApplication`, `WebApplication` |
| API surface | `WebAPI` |
| API docs/reference | `APIReference` |
| Endpoint | `EntryPoint` |
| Person or maintainer | `Person` |
| Publisher/provider | `Organization`, `provider`, `publisher` |
| Identifier | `@id`, `identifier`, `url` |
| Equivalent identity | `sameAs` |
| Fork/wrapper/derivative | `isBasedOn` |
| Runtime/platform | `runtimePlatform`, `operatingSystem` |
| Required package/API/service | `softwareRequirements` |
| Documentation | `documentation`, `softwareHelp` |

Only add custom OpenAutonomyX or AgentNxt fields when the concept is not cleanly covered.

## MCP-specific extension rule

MCP-specific operational metadata may use the AgentNxt `mcp.*` namespace when no standard field fits.

Examples that may remain MCP-specific:

- supported MCP transports, such as stdio, SSE, Streamable HTTP
- MCP tool inventory
- MCP client configuration hints
- MCP server deployment wrapper metadata
- MCP-specific runtime/auth notes

Even then, use existing standards where possible:

- use OpenAPI/Schema.org for API shape and docs
- use OCI for container images
- use Kubernetes/Helm for cloud-native deployment packages
- use OpenTelemetry for traces/observability
- use SPDX/CycloneDX/SLSA/Sigstore for supply-chain metadata

## Trust and provenance rule

Do not invent a trust model until existing trust, provenance, and identity frameworks have been checked.

Prefer:

- W3C PROV for provenance relationships
- DID for decentralized identifiers
- Verifiable Credentials for signed claims
- Trust Over IP / LF Decentralized Trust for trust governance patterns
- Hyperledger Fabric or related frameworks for permissioned endorsement/audit ledgers
- SLSA/Sigstore for build and release attestations
- C2PA for media/content provenance where applicable

If OpenAutonomyX defines trust scoring, label it clearly as an OpenAutonomyX/AgentNxt evaluation layer. It should cite evidence and avoid pretending to be a universal standard.

## Evidence and multimodal data rule

Do not invent evidence/media/embedding metadata without checking existing models first.

Prefer:

- Schema.org `CreativeWork`, `MediaObject`, `Dataset`, `Claim`, `Review`, `Rating`
- W3C PROV for generated/derived/attributed relationships
- C2PA for content provenance
- OpenTelemetry for traces/logs where operational telemetry is involved
- dataset/model metadata standards from LF AI & Data and related ecosystems where applicable

If a custom evidence model is needed, document:

- why existing standards do not fit
- which standards are reused
- which fields are new
- whether it is experimental
- examples and migration path

## Field proposal rule

Any new OpenAutonomyX/AgentNxt field should answer:

1. Which existing standards/frameworks were checked?
2. Why do they not fit?
3. Is this field public semantic metadata, operational metadata, provenance metadata, trust metadata, or UI convenience metadata?
4. Can the field be represented as a standard field plus a small extension?
5. Is the field optional and incrementally adoptable?
6. What examples prove the field is useful?
7. What migration path exists if a standard later emerges?

## Validation rule

Use layered validation:

1. Syntax validation for JSON/YAML/etc.
2. Standard-specific validation where available, such as Schema.org Markup Validator, OpenAPI validators, SPDX/CycloneDX validators, OCI tools, Kubernetes validators, or Sigstore/SLSA tooling.
3. OpenAutonomyX/AgentNxt profile validation for known extension fields.
4. Human review for identity, derivation, provenance, and trust semantics.

## Documentation rule

Every product/repo should document:

- primary open ecosystem alignment
- standards and frameworks reused
- custom extensions introduced
- why each custom extension exists
- which fields are experimental
- validation workflow
- migration/deprecation expectations

## Short version

Adopt before inventing.

Extend before replacing.

Build only for real gaps.

Keep custom fields optional, documented, and reversible.
