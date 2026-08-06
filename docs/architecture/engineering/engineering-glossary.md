---
title: Atlas Engineering Glossary
status: Accepted
version: 1.0
owner: Architecture
last_updated: 2026-07-29
---

# Atlas Engineering Glossary

## Purpose

The Atlas Engineering Glossary defines the project's ubiquitous engineering language. It establishes a shared vocabulary for architectural, engineering, and development concepts that have been formally adopted within the project.

The glossary serves as the authoritative source for engineering terminology used throughout the Atlas Engineering Architecture. Terms should be added only after they have been reviewed, agreed upon, and incorporated into the project's engineering practices.

Business domain terminology is intentionally maintained separately within the Platform Domain Glossary.

---

# Usage

This glossary is the authoritative source for engineering terminology used throughout the Atlas Engineering Architecture.

Definitions contained within this document are normative. Engineering documentation should reference these terms consistently and avoid introducing alternative terminology for established concepts.

Business terminology is maintained separately within the Platform Domain Glossary to preserve clear ownership between business architecture and engineering architecture.

---

# Engineering Terms

The following terms define the canonical engineering vocabulary used throughout the Atlas Engineering Architecture.

| Term                                   | Definition                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Architecture Decision Record (ADR)** | A document that captures an important architectural decision, the reasoning behind it, the alternatives considered, and its consequences. ADRs preserve architectural knowledge and explain why significant decisions were made.                                                                                                                                                                  |
| **Architecture Lifecycle**             | The canonical engineering workflow that guides work through the Discovery, Architecture, Architecture Review, Design, Design Review, Implementation, Engineering Review, and Merge phases.                                                                                                                                                                                                        |
| **Architecture Review**                | A formal governance review that validates the completeness, consistency, and correctness of an architecture before the Design phase begins.                                                                                                                                                                                                                                                       |
| **Boundary**                           | A clearly defined separation between responsibilities, components, or architectural concerns that reduces coupling, clarifies ownership, and supports long-term maintainability.                                                                                                                                                                                                                  |
| **Builder**                            | A reusable engineering component that constructs test objects with sensible defaults while allowing selective customization for individual verification scenarios.                                                                                                                                                                                                                                |
| **Dependency Rule**                    | A design constraint that defines the permitted direction of dependencies between architectural layers, ensuring lower-level engineering capabilities remain independent of higher-level business modules.                                                                                                                                                                                         |
| **Design Review**                      | A formal governance review that validates that the engineering design faithfully realizes the approved architecture and is ready for implementation.                                                                                                                                                                                                                                              |
| **Design Specification**               | An implementation-ready engineering document that defines how an approved architecture will be realized without prescribing production code.                                                                                                                                                                                                                                                      |
| **Developer Foundation**               | The architectural layer that provides shared engineering capabilities, conventions, tooling, and infrastructure consumed by all bounded contexts.                                                                                                                                                                                                                                                 |
| **Developer Infrastructure**           | The implementation of the shared engineering capabilities defined by the Developer Foundation. It includes tooling, automation, testing support, validation utilities, and other reusable engineering systems.                                                                                                                                                                                    |
| **Developer Tooling**                  | Shared engineering tools, workflows, automation, and utilities that improve developer productivity and promote a consistent development experience.                                                                                                                                                                                                                                               |
| **Domain Service**                     | A service that encapsulates domain behavior that does not naturally belong to a single aggregate or entity while preserving the responsibilities of aggregates.                                                                                                                                                                                                                                   |
| **Engineering Capability**             | A reusable engineering responsibility provided by the Developer Foundation to support software development, verification, quality, or maintainability.                                                                                                                                                                                                                                            |
| **Engineering Constitution**           | The authoritative document defining the engineering principles, architectural standards, development practices, and governance model of the Atlas platform.                                                                                                                                                                                                                                       |
| **Engineering Convention**             | A documented engineering practice or standard adopted consistently across the Atlas platform to improve maintainability and developer experience.                                                                                                                                                                                                                                                 |
| **Engineering Foundation**             | The foundational governance layer that establishes engineering principles, standards, repository conventions, and lifecycle processes for Atlas.                                                                                                                                                                                                                                                  |
| **Engineering Governance**             | The collection of constitutions, standards, reviews, ADRs, and lifecycle processes that guide engineering decisions and ensure consistency across the platform.                                                                                                                                                                                                                                   |
| **Engineering Quality Strategy**       | The engineering approach for achieving software quality through governance, architecture, verification, reviews, and continuous improvement.                                                                                                                                                                                                                                                      |
| **Engineering Review**                 | A formal engineering governance activity that validates completed work against the project's architectural principles, engineering standards, and agreed objectives before approval.                                                                                                                                                                                                              |
| **Epic**                               | A large body of engineering work representing a significant capability or objective that is delivered through multiple pull requests and implementation stories.                                                                                                                                                                                                                                  |
| **Factory**                            | A reusable engineering component that produces complete and internally consistent object graphs for complex verification scenarios.                                                                                                                                                                                                                                                               |
| **Fixture**                            | A stable, reusable collection of predefined test data used to support deterministic and repeatable verification.                                                                                                                                                                                                                                                                                  |
| **Layer**                              | A logical separation of responsibilities within the system that enforces clear boundaries between different parts of the architecture.                                                                                                                                                                                                                                                            |
| **Local Development**                  | The standardized engineering environment, workflows, and supporting capabilities used for developing, testing, and validating Atlas locally.                                                                                                                                                                                                                                                      |
| **Migration**                          | A controlled and versioned change to the persistence layer that evolves the database schema while preserving data integrity.                                                                                                                                                                                                                                                                      |
| **Milestone**                          | A major engineering checkpoint representing a coherent set of completed objectives that collectively advance the platform toward a larger architectural goal. Milestones conclude with formal engineering reviews before progressing to the next lifecycle phase.                                                                                                                                 |
| **Pull Request (PR)**                  | The primary unit of engineering delivery within Atlas. A pull request implements a well-defined architectural or engineering responsibility and is reviewed before integration into the main branch.                                                                                                                                                                                              |
| **Quality Gate**                       | A mandatory verification step that software or documentation must satisfy before progressing to the next stage of the engineering lifecycle.                                                                                                                                                                                                                                                      |
| **Repository**                         | A Domain-Driven Design pattern that provides an abstraction for accessing and persisting aggregates without exposing underlying storage technologies. Repository implementations belong to the Persistence Infrastructure and expose aggregates through well-defined interfaces. Within Atlas, the term refers to the architectural Repository pattern and not to the Git source code repository. |
| **Repository Convention**              | A documented standard governing repository organization, naming, structure, documentation, and engineering practices.                                                                                                                                                                                                                                                                             |
| **Scenario Data**                      | Business-specific verification data owned by a bounded context and used to verify domain behavior. Scenario data is not shared as platform-wide engineering infrastructure.                                                                                                                                                                                                                       |
| **Seed Data**                          | Canonical baseline data used to initialize environments for integration, end-to-end, or system-level verification. Seed data is versioned, reproducible, and environment-independent.                                                                                                                                                                                                             |
| **Shared Engineering Utility**         | A reusable engineering component that provides common functionality without containing business-domain knowledge.                                                                                                                                                                                                                                                                                 |
| **Test Data**                          | The collection of engineering assets used to support software verification, including fixtures, builders, factories, seed data, and scenario data.                                                                                                                                                                                                                                                |
| **Testing Architecture**               | The architectural definition of testing responsibilities, boundaries, and guiding principles within Atlas.                                                                                                                                                                                                                                                                                        |
| **Testing Design**                     | The implementation-ready engineering design that defines how the Testing Architecture is realized through organization, conventions, and shared capabilities.                                                                                                                                                                                                                                     |
| **Validation**                         | The engineering capability responsible for verifying that software, documentation, architecture, and engineering deliverables satisfy defined standards and expectations.                                                                                                                                                                                                                         |
| **Verification Layer**                 | A logical level of software verification, such as unit, integration, end-to-end, or architectural verification, used to validate behavior at an appropriate level of abstraction.                                                                                                                                                                                                                 |

---

# Glossary Governance

The Atlas Engineering Glossary is maintained as a living architectural artifact.

New terms should be introduced only after they have been reviewed, agreed upon, and incorporated into the project's engineering architecture or governance.

Existing definitions should be modified only when an approved architectural or engineering decision intentionally changes the project's ubiquitous engineering language.

The glossary should remain concise, authoritative, and free of duplicate or conflicting terminology.

---

# Related Documents

## Engineering Foundation

- Engineering Constitution
- Architecture Lifecycle
- Repository Conventions

## Developer Foundation

- Developer Foundation
- Developer Foundation Design
- Engineering Capabilities
- Testing Architecture
- Testing Design
- Engineering Quality Strategy

## Platform Architecture

- Platform Domain Glossary

```

```
