# Atlas Engineering Glossary

## Purpose

The Atlas Engineering Glossary defines the project's ubiquitous engineering language. It establishes a shared vocabulary for architectural, engineering, and development concepts that have been formally adopted within the project.

The glossary serves as the authoritative source for engineering terminology used throughout the Atlas documentation. Terms should be added only after they have been reviewed, agreed upon, and incorporated into the project's engineering practices.

Business domain terminology is intentionally excluded from this glossary until those concepts are formally defined within the Atlas Core Domain Model (PR-0007.0).

---

# Engineering

## Epic

### Definition

A large body of engineering work representing a significant capability or objective that is delivered through multiple pull requests and implementation stories.

### Context

Epics provide long-term organization of engineering work and are decomposed into milestones, pull requests, and implementation stories.

### Related Terms

Milestone, Pull Request

---

## Milestone

### Definition

A major engineering checkpoint representing a coherent set of completed objectives that collectively advance the platform toward a larger architectural goal.

### Context

Milestones group related engineering work and conclude with an engineering review before the project transitions to the next architectural phase.

### Related Terms

Epic, Engineering Review

---

## Pull Request (PR)

### Definition

The primary unit of engineering delivery within Atlas. A pull request implements a well-defined architectural or engineering responsibility and is reviewed before integration into the main branch.

### Context

Every significant engineering change is delivered through a pull request with clearly defined scope, acceptance criteria, and review.

### Related Terms

Epic, Milestone

---

## Architecture Decision Record (ADR)

### Definition

A document that captures an important architectural decision, the reasoning behind it, the alternatives considered, and its consequences.

### Context

ADRs preserve architectural knowledge and explain why significant decisions were made.

### Related Terms

Engineering Constitution, Architecture

---

# Architecture

## Layer

### Definition

A logical separation of responsibilities within the system that enforces clear boundaries between different parts of the architecture.

### Context

Layers promote maintainability by ensuring that responsibilities remain isolated and interactions follow established architectural rules.

### Related Terms

Boundary, Architecture

---

## Boundary

### Definition

A clearly defined separation between responsibilities, components, or architectural concerns.

### Context

Boundaries reduce coupling, clarify ownership, and support long-term maintainability.

### Related Terms

Layer, Aggregate

---

## Repository

### Definition

A Domain-Driven Design pattern that provides an abstraction for accessing and persisting aggregates without exposing underlying storage technologies.

### Context

Within Atlas, the term "Repository" refers to the architectural Repository pattern and not to the Git source code repository.

### Related Terms

Aggregate, Persistence Infrastructure

---

## Aggregate

### Definition

A consistency boundary within the domain model that groups related objects under a single transactional root.

### Context

Aggregates define ownership, enforce business invariants, and establish transactional consistency.

Business aggregates will be formally introduced in PR-0007.0.

### Related Terms

Repository, Boundary

---

## Domain Service

### Definition

A service that encapsulates domain behavior that does not naturally belong to a single aggregate or entity.

### Context

Domain services coordinate business rules while preserving the responsibilities of aggregates.

### Related Terms

Aggregate, Domain Model

---

# Development

## Developer Infrastructure

### Definition

The collection of engineering tools, workflows, automation, and standards that support software development throughout the Atlas platform.

### Context

Developer infrastructure includes repository organization, development tooling, continuous integration, code quality standards, and supporting engineering systems.

### Related Terms

Quality Gate, Engineering Constitution

---

## Quality Gate

### Definition

A mandatory verification step that software or documentation must satisfy before progressing to the next stage of the engineering lifecycle.

### Context

Quality gates may include automated testing, code review, documentation review, architectural validation, or other agreed engineering standards.

### Related Terms

Pull Request, Engineering Review

---

## Migration

### Definition

A controlled and versioned change to the persistence layer that evolves the database schema while preserving data integrity.

### Context

Migrations provide a repeatable mechanism for managing structural changes to persistent storage throughout the platform lifecycle.

### Related Terms

Persistence Infrastructure, Repository

---

## Engineering Review

### Definition

A formal engineering governance activity that validates completed work against the project's architectural principles, engineering standards, and agreed objectives before approval.

### Context

Engineering reviews conclude milestones and establish approved engineering baselines for future work.

### Related Terms

Milestone, Quality Gate

---

## Engineering Constitution

### Definition

The authoritative document defining the engineering principles, architectural standards, development practices, and governance model of the Atlas platform.

### Context

The Engineering Constitution provides the enduring principles that guide engineering decisions throughout the project.

### Related Terms

Engineering Review, ADR

---

# Future Platform Concepts

The following concepts represent future platform terminology. They are intentionally listed without definitions because their canonical meanings will be established during PR-0007.0 (Atlas Core Domain Model).

- Asset
- Collection
- Folder
- Organization
- Workspace
- Membership
- User
- Tenant
- Ownership
- Authorization
- Storage
- Processing
- Delivery
- Search
- Sharing

# Glossary Governance

The Atlas Engineering Glossary is maintained as a living architectural artifact. New terms should be introduced only after they have been agreed upon through the project's engineering and architectural governance process. Existing definitions should be modified only when architectural decisions intentionally change the project's ubiquitous language.
