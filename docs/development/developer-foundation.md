---
title: Developer Foundation
status: Accepted
version: 2.1
owner: Architecture
last_updated: 2026-07-31
---

---

title: Developer Foundation
status: Accepted
version: 2.1
owner: Architecture
last_updated: 2026-08-07
------------------------

# Developer Foundation

## Purpose

The Developer Foundation defines the shared engineering capabilities that support the development of every Atlas bounded context.

It establishes the architectural model for the reusable engineering platform that enables teams to build, test, validate, and maintain software consistently throughout the lifetime of Atlas.

The Developer Foundation is part of the Engineering Architecture and exists independently of any specific business domain or implementation technology.

---

# Mission

Provide every bounded context with a consistent, reusable, and well-governed engineering foundation that promotes engineering quality, maintainability, and developer productivity.

Rather than allowing individual modules to establish their own engineering infrastructure, Atlas defines shared engineering capabilities that can be adopted consistently across the platform.

---

# Architectural Responsibility

The Developer Foundation defines the engineering capabilities that are shared across Atlas.

These responsibilities include:

- Engineering Capabilities
- Testing Architecture
- Validation Architecture
- Engineering Quality Strategy
- Shared Developer Experience
- Engineering Conventions

The Developer Foundation defines the architectural model that guides the design, implementation, and evolution of these capabilities.

It does not prescribe implementation technologies or physical source-code organization.

---

# Scope

The Developer Foundation governs engineering capabilities shared across the platform.

Examples include:

- Testing
- Validation
- Shared Engineering Utilities
- Test Data Management
- Local Development
- Developer Tooling

Each capability exists to improve engineering consistency without introducing business-domain responsibilities.

---

# Out of Scope

The following concerns are outside the scope of the Developer Foundation:

- Business domains
- Domain models
- Product workflows
- Business capabilities
- Authorization rules
- Persistence models
- User interfaces

These responsibilities belong to the Platform Foundation and the corresponding bounded contexts.

---

# Architectural Position

The Developer Foundation extends the Engineering Foundation by defining the reusable engineering capabilities available throughout Atlas.

```text
Engineering Foundation
        │
        ▼
Developer Foundation
        │
        ▼
Engineering Capabilities
        │
        ▼
Repository Architecture
(application / core / infrastructure / modules)
        │
        ▼
Business Modules
```

The Engineering Foundation establishes governance.

The Developer Foundation establishes reusable engineering capabilities.

The repository architecture determines where those capabilities are implemented.

Business modules consume those capabilities while remaining focused on business responsibilities.

---

# Capability Ownership

The Developer Foundation owns engineering capabilities.

Capability ownership defines:

- architectural responsibility;
- capability boundaries;
- engineering intent;
- long-term evolution.

Capability ownership does **not** determine where source code is located.

---

# Implementation Ownership

Implementation ownership belongs to the architectural layer responsible for the concern being implemented.

For example:

| Capability        | Typical Implementation                                |
| ----------------- | ----------------------------------------------------- |
| Configuration     | `application/`                                        |
| Logging           | `infrastructure/`                                     |
| Testing           | Test infrastructure                                   |
| Validation        | Distributed according to architectural responsibility |
| Developer Tooling | Repository tooling and automation                     |
| Local Development | Repository infrastructure                             |

This separation preserves both architectural clarity and repository consistency.

---

# Implementation Mapping

The Developer Foundation is an architectural capability layer—not a physical source-code layer.

Developer Foundation capabilities are implemented within the established Atlas repository structure according to architectural responsibility.

Implementation location is determined by layer ownership rather than capability ownership.

This principle applies to every current and future engineering capability introduced by Atlas.

---

# Relationship to the Engineering Foundation

The Engineering Foundation establishes how Atlas is governed.

The Developer Foundation establishes the reusable engineering capabilities available within that governance model.

The Engineering Foundation provides the rules.

The Developer Foundation provides the capabilities.

---

# Relationship to the Platform Foundation

The Platform Foundation defines the business architecture of Atlas.

The Developer Foundation provides the engineering capabilities used to implement that architecture.

The two foundations are complementary.

| Developer Foundation     | Platform Foundation   |
| ------------------------ | --------------------- |
| Engineering capabilities | Business architecture |
| Engineering quality      | Domain model          |
| Testing                  | Business capabilities |
| Validation               | Bounded contexts      |
| Developer experience     | Platform behavior     |

Neither foundation replaces the other.

---

# Relationship to Engineering Capabilities

The Developer Foundation defines the architectural model for shared engineering capabilities.

The Engineering Capabilities document defines the individual capabilities provided by that model.

Together these documents establish the reusable engineering platform inherited by every Atlas bounded context.

---

# Relationship to Business Modules

Every bounded context adopts the engineering capabilities defined by the Developer Foundation.

Business modules consume shared engineering capabilities rather than creating independent engineering infrastructure.

This approach:

- promotes consistency;
- reduces duplication;
- simplifies maintenance;
- enables sustainable platform evolution.

---

# Validation Architecture

Validation is a shared engineering capability of the Developer Foundation.

Its responsibility is to provide the engineering model and reusable capabilities required to evaluate engineering work consistently throughout the Atlas development lifecycle.

Validation establishes:

- validation responsibilities;
- validation principles;
- quality gates;
- validation workflows;
- shared validation capabilities;
- boundaries between shared validation infrastructure and business-specific validation rules.

The Validation capability remains independent of business domains.

The shared Validation Foundation provides reusable engineering primitives and behavioral contracts that support the capability, while business-specific validation rules remain owned by their respective bounded contexts.

The Validation capability therefore distinguishes between:

```text
Developer Foundation
        │
        ▼
Shared Validation Capability
        │
        ├── reusable validation primitives
        ├── validation contracts
        ├── validation workflows
        └── quality gates
                │
                ▼
        Bounded Contexts
                │
                └── business-specific validation
```

The Developer Foundation does not own business validation rules.

Detailed Validation design and implementation guidance is defined by the Developer Foundation Design Specification.

---

# Architectural Principles

The Developer Foundation follows these principles.

## Shared Before Specific

Shared engineering capabilities should be established before introducing module-specific engineering solutions.

---

## Separation of Capability and Implementation

Capability ownership is independent of implementation ownership.

Capabilities define architectural responsibilities.

Architectural layers determine implementation placement.

---

## Consistency Over Duplication

Engineering capabilities should be reused across the platform whenever practical.

---

## Independence from Business Domains

Engineering capabilities remain independent of business concepts.

Business knowledge belongs exclusively within the Platform Foundation and bounded contexts.

---

## Quality by Design

Engineering quality emerges through shared capabilities, governance, and disciplined engineering practices rather than isolated implementation decisions.

---

## Evolution Through Governance

The Developer Foundation evolves through the Engineering Constitution, Architecture Lifecycle, and Architecture Decision Records.

---

# Architectural Boundaries

The Developer Foundation defines:

- engineering capabilities;
- capability boundaries;
- architectural responsibilities;
- engineering principles.

It does not define:

- framework selection;
- source-code organization;
- implementation technologies;
- module internals.

These concerns belong to the Design and Implementation phases.

---

# Success Criteria

The Developer Foundation is successful when:

- every bounded context adopts the shared engineering capabilities;
- engineering practices remain consistent across the platform;
- capabilities remain independent of business domains;
- implementation follows established architectural boundaries;
- new capabilities can be introduced without disrupting existing modules.

---

# Future Capability Areas

The Developer Foundation is expected to evolve through additional engineering capabilities as Atlas matures.

Future capabilities should:

- address demonstrated engineering needs;
- preserve clear architectural ownership;
- align with existing capability boundaries;
- extend the existing engineering platform rather than introduce competing approaches.

---

# Governance

The Developer Foundation is governed by:

- Engineering Constitution
- Architecture Lifecycle
- Engineering Quality Strategy
- Architecture Decision Records
- Engineering Reviews

Changes to the Developer Foundation should strengthen the engineering platform while preserving architectural consistency.

---

# Summary

The Developer Foundation defines the architectural model for the shared engineering capabilities inherited by every Atlas bounded context.

By separating capability ownership from implementation ownership, Atlas preserves a clean engineering architecture while allowing each capability to be implemented within the architectural layer best suited to its responsibility.

This approach enables consistent engineering practices, sustainable platform evolution, and a reusable engineering platform that remains independent of business-domain concerns.
