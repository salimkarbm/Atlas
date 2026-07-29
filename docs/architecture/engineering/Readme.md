````markdown
---
title: Engineering Architecture
status: Living
version: 2.0
owner: Architecture
last_updated: 2026-07-29
---

# Engineering Architecture

The Engineering Architecture defines how Atlas is engineered.

It establishes the engineering principles, governance, standards, and shared capabilities that support the development and evolution of the Atlas platform.

Unlike the Platform Architecture, which defines the business structure and architectural model of Atlas, the Engineering Architecture defines the engineering system used to build, validate, maintain, and evolve the platform.

---

# Purpose

The Engineering Architecture exists to:

- Establish engineering governance.
- Define the engineering lifecycle.
- Promote consistency across the platform.
- Provide shared engineering capabilities.
- Preserve Engineering Quality Strategy.
- Support long-term maintainability.

Every future bounded context inherits the Engineering Architecture.

---

# Engineering Architecture Overview

The Engineering Architecture is composed of five major areas.

```
Engineering Architecture

├── Governance
│
├── Lifecycle
│
├── Standards
│   ├── Repository Conventions
│   ├── Documentation Standards
│   ├── Development Standards
│   └── Testing Standards
│
└── Developer Foundation
```

Each area has a distinct responsibility.

---

# Governance

Engineering Governance defines the principles that guide all engineering decisions.

Primary documents include:

- Engineering Constitution
- Engineering Reviews
- Architecture Decision Records (ADRs)

Governance ensures that Atlas evolves through deliberate and reviewable engineering decisions.

---

# Lifecycle

The Architecture Lifecycle defines how significant engineering work progresses.

```
Discovery
    ↓
Architecture
    ↓
Design
    ↓
Implementation
    ↓
Review
    ↓
Merge
```

The lifecycle applies to engineering capabilities, platform capabilities, and business modules.

---

# Standards

Engineering Standards define the conventions used throughout Atlas.

Examples include:

- Documentation Standards
- Repository Conventions
- Development Standards
- Coding Standards
- Testing Standards

Standards improve consistency and reduce unnecessary variation across the platform.

---

# Developer Foundation

The Developer Foundation provides the shared engineering capabilities that every bounded context inherits.

Its purpose is to eliminate duplicated engineering infrastructure and establish a consistent developer experience across Atlas.

The Developer Foundation includes architectural guidance for:

- Engineering Capabilities
- Testing Architecture
- Testing Philosophy
- Engineering Quality Strategy

Implementation details are intentionally documented outside the architecture and are introduced during the Design and Implementation phases.

---

# Repository Conventions

Repository Conventions define how engineering artifacts are organized and maintained.

They include guidance for:

- Repository structure
- Documentation organization
- Pull Request lifecycle
- Review process
- Template usage

Repository conventions ensure that the engineering knowledge base remains consistent and maintainable as Atlas evolves.

---

# Relationship to Other Architecture

The Engineering Architecture complements the Platform Architecture.

| Engineering Architecture        | Platform Architecture |
| ------------------------------- | --------------------- |
| How Atlas is engineered         | How Atlas is modeled  |
| Engineering governance          | Business architecture |
| Shared engineering capabilities | Platform capabilities |
| Engineering standards           | Domain concepts       |
| Development lifecycle           | Platform model        |

Together they provide the complete architectural foundation of Atlas.

---

# Architecture Principles

The Engineering Architecture follows these principles:

- Engineering capabilities are shared platform capabilities.
- Architecture precedes design.
- Design precedes implementation.
- Documentation is a first-class deliverable.
- Shared engineering capabilities reduce duplication.
- Quality is a platform responsibility.
- Engineering decisions remain independent of business domains whenever practical.

---

# Scope

The Engineering Architecture governs:

- Engineering governance
- Engineering lifecycle
- Shared engineering capabilities
- Engineering standards
- Repository conventions
- Engineering Quality Strategy

It does not define:

- Business domains
- Business workflows
- Domain models
- Product capabilities

Those concerns belong to the Platform Architecture.

---

# Engineering Architecture Documents

## Governance

- Engineering Constitution

## Lifecycle

- Architecture Lifecycle

## Standards

- Repository Conventions
- Documentation Standards
- Development Standards
- Testing Standards

## Developer Foundation

- Developer Foundation
- Engineering Capabilities
- Testing Architecture
- Testing Philosophy
- Engineering Quality Strategy

---

# Evolution

The Engineering Architecture evolves through the Architecture Lifecycle and is governed by the Engineering Constitution.

Changes to the Engineering Architecture must preserve consistency, maintainability, and long-term sustainability.

Architectural refinements should extend the existing engineering system rather than introduce competing approaches.

---

# Summary

The Engineering Architecture provides the engineering foundation upon which Atlas is built.

It defines the governance, lifecycle, standards, and shared engineering capabilities that enable every future bounded context to be developed consistently, reviewed effectively, and maintained over the lifetime of the platform.
````
