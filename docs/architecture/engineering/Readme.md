---
title: Atlas Engineering
status: Living
version: 1.0
owner: Architecture
last_updated: 2026-07-25
---

---

# Atlas Engineering

## Purpose

The Engineering documentation defines **how Atlas is engineered**.

It establishes the governance, standards, conventions, and engineering practices that guide the development and evolution of the platform.

Unlike the Platform Architecture, which defines what Atlas is, the Engineering documentation defines how Atlas is built, maintained, and governed.

---

# Scope

The Engineering documentation governs the engineering process rather than the business architecture.

It includes:

- Engineering governance
- Documentation standards
- Repository conventions
- Development standards
- Testing standards
- Engineering terminology

These documents apply to every repository contribution regardless of the business capability being developed.

---

# Engineering Documents

The Engineering section consists of the following documents.

## Engineering Constitution

Defines the foundational engineering principles that govern the Atlas project.

Every significant engineering and architectural decision should be evaluated against the Constitution.

---

## Engineering Glossary

Defines engineering terminology used throughout the repository.

This glossary contains technical and engineering concepts.

Business terminology belongs in the Platform Domain Glossary.

---

## Documentation Standards

Defines how documentation is authored, organized, reviewed, and maintained across the repository.

Documentation is treated as a first-class deliverable.

---

## Repository Conventions

Defines the organization and conventions of the repository, including documentation structure and contribution expectations.

---

## Development Standards

Defines engineering practices for implementing software, including coding conventions, quality expectations, and review requirements.

---

## Testing Standards

Defines the testing philosophy, expectations, and quality criteria that apply across the platform.

---

# Reading Order

New contributors should read the Engineering documentation in the following order.

```text
1. Engineering Constitution
        │
        ▼
2. Engineering Glossary
        │
        ▼
3. Documentation Standards
        │
        ▼
4. Repository Conventions
        │
        ▼
5. Development Standards
        │
        ▼
6. Testing Standards
```

This sequence introduces the project's governance before its implementation practices.

---

# Relationship to Other Architecture

The Engineering documentation forms the foundation of the Atlas Architecture.

```text
Engineering
        │
        ▼
Platform Architecture
        │
        ▼
Architecture Decision Records
        │
        ▼
Domain Architecture
        │
        ▼
Design
        │
        ▼
Implementation
```

Every subsequent architectural layer inherits the governance established by the Engineering documentation.

---

# Governance

The Engineering documentation is the authoritative source for engineering practices within Atlas.

Changes should:

- Preserve consistency with the Engineering Constitution.
- Support long-term maintainability.
- Avoid duplicating information owned by other documentation.
- Follow the project's standard pull request process.

Engineering documentation should evolve deliberately as the project and its engineering practices mature.
