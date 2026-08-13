---
title: Engineering Capabilities
status: Accepted
version: 1.1
owner: Architecture
last_updated: 2026-08-09
---

---

# Engineering Capabilities

## Purpose

Engineering Capabilities define the canonical reusable engineering services provided by the Atlas Developer Foundation.

They describe what engineering capabilities Atlas provides and the responsibilities of those capabilities, while remaining independent of implementation technologies and physical repository organization.

Engineering Capabilities describe **what the platform provides**, not **how those capabilities are implemented**.

---

# Mission

Provide reusable engineering capabilities that improve consistency, maintainability, quality, and developer productivity across the Atlas platform.

The objective is to establish shared capabilities once and make them available to every future bounded context.

---

# Architectural Position

Engineering Capabilities are part of the Developer Foundation.

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
Business Modules
```

Business modules consume these capabilities but do not own or redefine them.

---

# Implementation Model

Engineering Capabilities define architectural responsibilities rather than physical source-code organization.

The Developer Foundation owns the capabilities.

The Atlas repository architecture determines where each capability is implemented.

Accordingly:

- capabilities do not imply dedicated source-code layers;
- implementation follows architectural layer responsibilities;
- capability ownership is distinct from implementation ownership.

This separation allows Atlas to preserve both architectural clarity and repository consistency.

---

# Capability Model

The capability model is logical rather than physical. It organizes engineering responsibilities and should not be interpreted as the repository structure.

## Verification

Capabilities responsible for verifying engineering outcomes.

| Capability | Responsibility                                            |
| ---------- | --------------------------------------------------------- |
| Testing    | Verify platform behavior.                                 |
| Validation | Verify engineering outcomes and architectural compliance. |

---

## Engineering Support

Capabilities that provide reusable engineering infrastructure.

| Capability                   | Responsibility                                     |
| ---------------------------- | -------------------------------------------------- |
| Shared Engineering Utilities | Provide reusable engineering components.           |
| Local Development            | Support consistent local development environments. |

---

## Developer Productivity

Capabilities that improve engineering efficiency.

| Capability           | Responsibility                                 |
| -------------------- | ---------------------------------------------- |
| Developer Tooling    | Provide shared engineering tooling.            |
| Test Data Management | Support repeatable and maintainable test data. |

---

## Engineering Quality

Capabilities that promote long-term engineering excellence.

| Capability                   | Responsibility                                    |
| ---------------------------- | ------------------------------------------------- |
| Engineering Quality Strategy | Coordinate quality practices across the platform. |

---

# Capability Responsibilities

## Testing

Provides the architectural capability for verifying software behavior throughout the platform.

Testing architecture is defined independently from any specific framework or technology.

---

## Validation

Supports consistent validation of engineering outcomes.

Validation includes architectural verification, documentation verification, testing, and engineering review.

---

## Shared Engineering Utilities

Provides reusable engineering components that eliminate duplication across bounded contexts.

Shared Engineering Utilities remain independent of business domains and are introduced only when a demonstrated cross-context engineering need exists.

The capability is a governed extension point rather than a requirement to maintain a generic collection of helper functions.

A component qualifies as a Shared Engineering Utility when it:

- addresses a recurring engineering problem;
- is reusable across bounded contexts;
- has a stable engineering responsibility;
- is independent of business-domain concepts;
- does not belong to an existing specialized capability;
- provides meaningful value by reducing duplication or establishing a shared engineering behavior.

The existence of a potential reusable helper does not by itself justify introducing a shared utility.

Existing internal invariant assertions remain under:

`src/core/internal/assert/`

They are not required to be relocated into the general utilities boundary.

The general utilities boundary may be used for future justified Shared Engineering Utilities.

---

## Local Development

Provides the shared capabilities required for engineers to develop Atlas consistently in local environments.

Environment setup and operational guidance belong to the Development documentation.

---

## Test Data Management

Supports the creation, organization, and maintenance of repeatable test data.

The architecture defines the capability without prescribing implementation techniques.

---

## Developer Tooling

Defines the shared engineering tooling required to support software development.

Specific tools are selected during the Design phase.

---

## Engineering Quality Strategy

Coordinates quality practices across the Atlas platform.

Quality is achieved through architecture, engineering practices, validation, testing, engineering reviews, and continuous improvement.

---

# Capability Principles

Engineering Capabilities follow these principles.

## Shared by Default

Capabilities are designed for platform-wide reuse.

---

## Independent of Business Domains

Capabilities remain independent of business logic and domain concepts.

---

## Architecture Before Technology

Capabilities describe architectural responsibilities rather than implementation choices.

---

## Extensible

New capabilities may be introduced without disrupting existing bounded contexts.

---

## Consistent

Capabilities establish common engineering practices across the platform.

---

# Repository Mapping

Engineering Capabilities are implemented within the existing Atlas repository architecture.

Each capability is implemented by the architectural layer responsible for the concern.

Typical examples include:

| Capability        | Typical Implementation                  |
| ----------------- | --------------------------------------- |
| Configuration     | Application layer                       |
| Logging           | Infrastructure layer                    |
| Testing           | Test infrastructure                     |
| Validation        | Distributed across architectural layers |
| Developer Tooling | Repository tooling                      |
| Local Development | Repository infrastructure               |

These examples illustrate implementation responsibility rather than prescribing repository structure.

The existence of a capability does not require a dedicated source-code directory.

---

# Capability Boundaries

Engineering Capabilities define shared engineering responsibilities.

They do not define:

- Business rules
- Product workflows
- Domain models
- User-facing functionality
- Module-specific engineering solutions

These concerns remain within their respective bounded contexts.

---

# Evolution

Engineering Capabilities evolve as Atlas grows.

New capabilities should:

- extend the existing capability model;
- preserve architectural consistency;
- avoid overlapping responsibilities;
- remain reusable across bounded contexts.

Capability evolution follows the Architecture Lifecycle and is governed by the Engineering Constitution.

---

# Relationship to Other Documents

This document complements:

- Developer Foundation
- Developer Foundation Design
- Testing Architecture
- Testing Philosophy
- Engineering Quality Strategy
- Architecture Lifecycle

Together these documents define the engineering capabilities provided by the Developer Foundation.

---

# Summary

Engineering Capabilities define the shared engineering services that support every Atlas bounded context.

They provide reusable engineering capabilities that improve consistency, reduce duplication, and enable business modules to focus on domain responsibilities while inheriting a common engineering platform.

Engineering Capabilities define what engineering services Atlas provides, while the Design and Implementation phases determine how and where those services are realized within the repository architecture.

Shared Engineering Utilities are intentionally governed as a reusable capability rather than a generic collection of helper functions. New utilities are introduced only when demonstrated cross-context engineering needs justify their existence.
