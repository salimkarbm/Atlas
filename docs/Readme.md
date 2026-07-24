# Atlas Documentation

Welcome to the Atlas documentation.

This repository contains the engineering, product, and operational knowledge required to understand, develop, and operate Atlas.

The documentation is organized by responsibility so contributors can quickly locate the information they need.

---

## Purpose

Documentation is a first-class deliverable in Atlas.

If a decision is important enough to influence future development, it belongs in the repository—not just in conversations or pull requests.

The repository is the long-term memory of the project.

---

## Documentation Principles

Atlas documentation follows these principles:

- Documentation is version controlled.
- Documentation evolves alongside the code.
- Documentation explains intent; code explains implementation.
- Every document has a single responsibility.
- The repository is the source of truth.

---

## Documentation Structure

### Product

Product documentation describes what Atlas is building.

Contents include:

- Product Vision
- Roadmap
- Milestones
- Requirements

Location:

docs/product/

---

### Architecture

Architecture documentation explains why Atlas is designed the way it is.

Contents include:

- Platform Model
- Context Map
- Engineering Constitution
- Glossary
- Architecture Decision Records (ADRs)

Location:

docs/architecture/

---

### Development

Development documentation helps contributors build Atlas.

Examples include:

- Local development
- Testing
- Database migrations
- Development workflows

Location:

docs/development/

---

### Operations

Operations documentation describes how Atlas is deployed and operated.

Examples include:

- Deployment
- Environments
- Monitoring
- Incident response

Location:

docs/operations/

---

### Templates

Templates provide standardized formats for recurring project artifacts.

Examples include:

- Epic Template
- Pull Request Template
- ADR Template

Location:

docs/templates/

---

## Documentation Lifecycle

Documentation follows the same engineering discipline as source code.

Significant documentation changes are planned, reviewed, and merged through pull requests.

Documentation should be updated whenever changes affect:

- Architecture
- Engineering process
- Product roadmap
- Development workflows

---

## Contributing to Documentation

When adding or modifying documentation:

1. Prefer updating an existing document before creating a new one.
2. Avoid duplicating information across multiple documents.
3. Keep documents focused on a single responsibility.
4. Ensure documentation reflects the current implementation and accepted architectural decisions.
5. Submit documentation changes through the standard pull request process.
