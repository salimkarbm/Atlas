# Atlas Context Map Design

## Purpose

The Atlas Context Map defines the platform's bounded contexts, their responsibilities, and the relationships between them.

It establishes the architectural boundaries that partition the platform into cohesive business capabilities while defining how those capabilities collaborate to deliver the complete Atlas platform.

The Context Map is the authoritative source for platform boundaries and context relationships. It intentionally remains independent of implementation technologies, deployment architecture, and code organization.

---

# Responsibility

The Context Map is responsible for:

- Identifying the platform's bounded contexts.
- Defining the responsibility of each context.
- Defining the relationships between contexts.
- Identifying upstream and downstream dependencies.
- Establishing architectural ownership boundaries.
- Providing the high-level structure of the platform.

The Context Map is **not** responsible for:

- Defining business terminology.
- Explaining platform principles.
- Defining authorization rules.
- Defining persistence models.
- Describing implementation details.
- Defining APIs or services.

Those responsibilities belong to other architectural documents.

---

# Architectural Principles

The Context Map follows these principles:

## Business Capability First

Contexts represent business capabilities rather than technical components.

---

## Explicit Boundaries

Each context owns a clearly defined responsibility.

Responsibilities do not overlap.

---

## High Cohesion

Concepts that change together belong together.

---

## Loose Coupling

Contexts collaborate through well-defined interfaces while remaining independently understandable.

---

## Technology Independence

Contexts are business boundaries, not software packages, services, or deployment units.

---

# Proposed Bounded Contexts

The first version of the Atlas platform consists of the following bounded contexts.

## Identity and Access Management

**Responsibility**

Manages platform identities, authentication, memberships, roles, permissions, and authorization.

---

## Organization Management

**Responsibility**

Manages organizations, tenant configuration, organizational lifecycle, and organizational administration.

---

## Asset Management

**Responsibility**

Owns the lifecycle, organization, metadata, and governance of digital assets.

---

## Storage

**Responsibility**

Provides durable persistence and retrieval of platform-managed assets through provider abstractions.

---

## Processing

**Responsibility**

Executes asset transformations, analysis, enrichment, and other processing workflows.

---

## Delivery

**Responsibility**

Provides secure distribution and consumption of assets.

---

## Search

**Responsibility**

Indexes and discovers platform resources using metadata and search capabilities.

---

## Sharing

**Responsibility**

Manages controlled access to assets through links, invitations, and collaboration features.

---

## Audit & Compliance

**Responsibility**

Captures significant platform events to support traceability, governance, auditing, and compliance.

---

## Platform Administration

**Responsibility**

Manages platform-wide configuration, operational settings, and administrative capabilities.

---

# Context Collaboration

The Context Map defines collaboration between contexts without prescribing implementation.

Typical relationships include:

- Identity & Access provides identity information to Organization Management.
- Organization Management establishes tenant boundaries for Asset Management.
- Asset Management coordinates with Storage for persistence.
- Asset Management requests Processing when transformations are required.
- Delivery consumes managed assets for distribution.
- Search indexes assets and metadata.
- Sharing relies on Identity & Access and Asset Management.
- Audit & Compliance observes significant events across the platform.
- Platform Administration governs platform-wide configuration.

---

# Context Dependency Principles

The following principles govern relationships between contexts.

- Dependencies should be intentional and minimal.
- Contexts communicate through well-defined contracts.
- Contexts should avoid direct knowledge of each other's internal models.
- Shared concepts should remain small and stable.
- Cross-context collaboration should preserve context autonomy.

---

# Cross-Cutting Capabilities

Certain capabilities span multiple contexts without belonging exclusively to one.

Examples include:

- Observability
- Notifications
- Event Publishing
- Background Processing
- Configuration
- Feature Flags
- Logging

These capabilities support the platform but do not define business boundaries.

---

# Relationship to Other Documents

| Document                  | Responsibility                                                |
| ------------------------- | ------------------------------------------------------------- |
| `atlas-platform-model.md` | Defines the platform's architectural concepts and principles. |
| `domain-glossary.md`      | Defines the platform's ubiquitous business language.          |
| `context-map.md`          | Defines business boundaries and context relationships.        |
| `ownership-model.md`      | Defines ownership and authorization boundaries.               |
| `data-classification.md`  | Defines global, tenant, and platform-managed data.            |

The Context Map complements these documents without duplicating their responsibilities.

---

# Platform Context Diagram

The following diagram illustrates the high-level relationships between the Atlas bounded contexts.

```text
                           Atlas Platform
                                 │
        ┌────────────────────────┴────────────────────────┐
        │                                                 │
        ▼                                                 ▼
Identity & Access                             Platform Administration
        │
        ▼
Organization Management
        │
        ▼
Asset Management
   ┌────┼───────────────┬───────────────┐
   ▼    ▼               ▼               ▼
Storage Processing    Search         Sharing
   │        │             │               │
   └────────┴─────────────┴───────────────┘
                     │
                     ▼
                  Delivery
                     │
                     ▼
             Audit & Compliance
```

## Interpretation

The diagram represents architectural relationships rather than implementation dependencies.

- **Identity & Access** establishes platform identities and authorization.
- **Organization Management** defines tenant boundaries and organizational ownership.
- **Asset Management** is the core business capability of the platform.
- **Storage**, **Processing**, **Search**, and **Sharing** collaborate with Asset Management while remaining separate bounded contexts.
- **Delivery** makes managed assets available to authorized consumers.
- **Audit & Compliance** records significant platform activity across contexts.
- **Platform Administration** provides platform-wide governance and operational management.

The diagram communicates business capability relationships and should not be interpreted as deployment architecture, service topology, package structure, or database dependencies.

---

# Governance

The Atlas Context Map is a living architectural artifact.

Bounded contexts should evolve only when the platform's business responsibilities change.

Changes to context boundaries require architectural review because they influence platform organization, ownership, and future implementation.

The Context Map serves as the canonical reference for partitioning the Atlas platform into cohesive business capabilities.
