# Atlas

> A multi-tenant Digital Asset Management platform designed as a long-lived, modular, and extensible software platform.

## Overview

Atlas is a multi-tenant Digital Asset Management (DAM) platform being designed and built as a long-lived software platform.

The platform is intended to enable organizations to manage, govern, organize, process, store, search, share, and deliver digital assets while maintaining clear ownership and tenant boundaries.

Atlas is designed around explicit architectural boundaries and business capabilities rather than implementation technologies.

### Platform characteristics

Atlas is designed to be:

- **Multi-tenant** — organizations operate within isolated tenant boundaries.
- **Modular** — business capabilities are partitioned into bounded contexts.
- **Extensible** — the architecture is designed to evolve as platform capabilities grow.
- **Secure** — ownership and authorization boundaries are fundamental architectural concerns.
- **API-first** — platform capabilities are exposed through application interfaces.
- **Event-capable** — the architecture allows for event-driven collaboration between capabilities.
- **Provider-agnostic** — platform concepts remain independent of infrastructure and technology providers.

### Architectural principles

Several principles govern the evolution of Atlas:

- Architecture precedes implementation.
- Ownership precedes authorization.
- Every resource has an owner.
- Business capabilities are partitioned into bounded contexts.
- Architectural responsibilities have a single canonical owner.
- Platform concepts remain technology-independent.
- Documentation evolves alongside implementation.
- Significant architectural decisions are captured in Architecture Decision Records (ADRs).

The repository is the authoritative source of project knowledge.

For the complete architectural model, see:

- [`docs/architecture/platform/atlas-platform-model.md`](docs/architecture/platform/atlas-platform-model.md)
- [`docs/architecture/platform/context-map.md`](docs/architecture/platform/context-map.md)
- [`docs/architecture/platform/ownership-model.md`](docs/architecture/platform/ownership-model.md)
- [`docs/architecture/platform/data-classification.md`](docs/architecture/platform/data-classification.md)

---

## Current Status

Atlas is currently in its engineering foundation and platform architecture phase.

The repository currently provides the foundational application, domain, infrastructure, persistence, configuration, testing, and engineering-quality capabilities required to build the platform.

The business capabilities defined by the platform architecture are being introduced incrementally through the project's architecture and engineering lifecycle.

### Current foundation

The current codebase includes:

- Application bootstrap and server infrastructure
- Environment configuration and validation
- Core domain primitives
- Domain errors
- Result types
- Validation infrastructure
- Dependency injection
- Logging
- PostgreSQL persistence infrastructure
- TypeORM integration
- Repository abstractions
- Transaction management
- Database migration infrastructure
- Unit testing infrastructure
- Integration and end-to-end test foundations
- Static dependency analysis
- Unused-code analysis
- Code formatting and linting
- Git hooks and commit conventions

---

# Prerequisites

Before working with Atlas locally, install the following:

- **Node.js 22 or later**
- **npm**
- **PostgreSQL**
- **Git**

The required Node.js version is defined by the repository's `package.json`:

```text
Node.js >= 22.0.0
```

````

The repository also contains an `.nvmrc` file for Node.js version management.

### Recommended tooling

The project uses the following development tools:

- TypeScript
- tsx
- ESLint
- Prettier
- Vitest
- TypeORM
- Husky
- Commitlint
- dependency-cruiser
- Knip

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/salimkarbm/Atlas.git
cd Atlas
```

Or, using GitHub CLI:

```bash
gh repo clone salimkarbm/Atlas
cd Atlas
```

## 2. Select the required Node.js version

If you use `nvm`:

```bash
nvm use
```

Verify:

```bash
node --version
```

The project requires Node.js 22 or later.

## 3. Install dependencies

```bash
npm install
```

## 4. Configure the environment

Create a local environment file from the provided example:

```bash
cp .env.example .env
```

The current environment configuration includes:

```env
NODE_ENV=development
PORT=3000

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=cooperative_platform
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_SSL=false
```

Update the database values to match your local PostgreSQL installation.

> Never commit `.env` or other files containing credentials or secrets.

## 5. Prepare PostgreSQL

Create a PostgreSQL database matching your configured environment.

For example:

```sql
CREATE DATABASE cooperative_platform;
```

The database configuration is loaded from environment variables and validated by the application's configuration layer.

## 6. Run database migrations

When migrations are available:

```bash
npm run migration:run
```

To inspect migration state:

```bash
npm run migration:show
```

---

# Development

Start the development server with:

```bash
npm run dev
```

The application uses `tsx` to run the TypeScript entry point with watch mode.

The application entry point is:

```text
src/index.ts
```

The default development port is:

```text
3000
```

The health route is provided by:

```text
src/Application/Routes/health.route.ts
```

## Type checking

Run TypeScript without emitting compiled output:

```bash
npm run typecheck
```

## Build

Create the production TypeScript build:

```bash
npm run build
```

The compiled application is emitted to the configured TypeScript output directory.

## Start the built application

After building:

```bash
npm start
```

---

# Testing

Atlas uses **Vitest** as its testing framework.

Run the test suite with:

```bash
npm test
```

The test structure is organized into:

```text
tests/
├── e2e/
├── integration/
├── shared/
└── unit/
```

Unit tests currently cover foundational domain functionality including:

- Domain errors
- Assertions
- Validation
- Validation models
- Validation interfaces

Testing architecture and philosophy are documented under:

```text
docs/architecture/engineering/
```

See:

- [`testing-architecture.md`](docs/architecture/engineering/testing-architecture.md)
- [`testing-philosophy.md`](docs/architecture/engineering/testing-philosophy.md)

---

# Code Quality

Atlas treats code quality as part of the engineering foundation.

## Lint

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

## Formatting

Check formatting:

```bash
npm run format:check
```

Format the repository:

```bash
npm run format
```

## Dependency architecture

Run dependency-cruiser:

```bash
npm run depcruise
```

This validates architectural dependency relationships defined in:

```text
dependency-cruiser.cjs
```

## Unused code and dependencies

Run Knip:

```bash
npm run knip
```

Attempt automatic fixes:

```bash
npm run knip:fix
```

---

# Database Migrations

Atlas uses TypeORM for database persistence and migration management.

The TypeORM CLI is configured through:

```text
src/infrastructure/persistence/typeorm/cli.ts
```

### Create a migration

```bash
npm run migration:create
```

### Generate a migration

```bash
npm run migration:generate
```

### Run migrations

```bash
npm run migration:run
```

### Revert the latest migration

```bash
npm run migration:revert
```

### Show migration status

```bash
npm run migration:show
```

Additional migration guidance belongs in:

[`docs/development/migrations.md`](docs/development/migrations.md)

---

# Docker

Docker support is **not currently represented in the repository structure**.

There is currently no `Dockerfile` or Docker Compose configuration in the repository tree.

Docker should therefore not be considered a required part of the current local development workflow.

When containerization is introduced, this section should be updated to document:

- Application container configuration
- PostgreSQL services
- Development and production environments
- Environment configuration
- Health checks
- Networking
- Persistent volumes
- Common Docker commands

---

# Scripts

The following npm scripts are currently defined by Atlas:

| Script                       | Purpose                                         |
| ---------------------------- | ----------------------------------------------- |
| `npm run dev`                | Start the development server with watch mode    |
| `npm run build`              | Compile the TypeScript application              |
| `npm start`                  | Start the compiled application                  |
| `npm run typecheck`          | Run TypeScript type checking                    |
| `npm test`                   | Run the Vitest test suite                       |
| `npm run lint`               | Run ESLint                                      |
| `npm run lint:fix`           | Automatically fix ESLint issues                 |
| `npm run format`             | Format the repository with Prettier             |
| `npm run format:check`       | Verify repository formatting                    |
| `npm run depcruise`          | Analyze architectural dependencies              |
| `npm run knip`               | Analyze unused files, dependencies, and exports |
| `npm run knip:fix`           | Attempt to automatically fix Knip findings      |
| `npm run typeorm`            | Execute the TypeORM CLI                         |
| `npm run migration:create`   | Create a database migration                     |
| `npm run migration:generate` | Generate a migration                            |
| `npm run migration:run`      | Apply pending migrations                        |
| `npm run migration:revert`   | Revert the latest migration                     |
| `npm run migration:show`     | Display migration status                        |

---

# Folder Structure

The repository is organized around architectural responsibility.

```text
Atlas/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .husky/
│   ├── commit-msg
│   ├── pre-commit
│   └── pre-push
│
├── docs/
│   ├── architecture/
│   │   ├── adr/
│   │   ├── domain/
│   │   ├── engineering/
│   │   └── platform/
│   │
│   ├── development/
│   ├── operations/
│   ├── product/
│   └── templates/
│
├── src/
│   ├── Application/
│   │   ├── Configuration/
│   │   ├── Kernel/
│   │   ├── Routes/
│   │   └── Server.ts
│   │
│   ├── core/
│   │   ├── domain/
│   │   ├── errors/
│   │   ├── internal/
│   │   ├── result/
│   │   ├── types/
│   │   ├── utils/
│   │   └── validations/
│   │
│   ├── infrastructure/
│   │   ├── di/
│   │   ├── logging/
│   │   └── persistence/
│   │       ├── migrations/
│   │       ├── repositories/
│   │       └── typeorm/
│   │
│   └── index.ts
│
├── tests/
│   ├── e2e/
│   ├── integration/
│   ├── shared/
│   └── unit/
│
├── package.json
├── tsconfig.json
├── vitest.config.mts
├── eslint.config.mjs
├── dependency-cruiser.cjs
└── README.md
```

## Source directories

### `src/Application`

Contains application-level composition and runtime concerns.

Responsibilities include:

- Application configuration
- Application bootstrap
- Server startup
- HTTP routes
- Application kernel

### `src/core`

Contains technology-independent foundational domain primitives and shared core concepts.

Responsibilities include:

- Entities
- Value objects
- Domain errors
- Result types
- Validation
- Domain-oriented types
- Core utilities

### `src/infrastructure`

Contains technical implementations required to run the application.

Responsibilities currently include:

- Dependency injection
- Logging
- Persistence
- TypeORM
- Repository infrastructure
- Transactions
- Database migrations

### `tests`

Contains the project's testing infrastructure and tests organized by testing scope.

---

# Architecture Overview

Atlas follows a layered architecture organized around **Application**, **Core**, and **Infrastructure** responsibilities.

```text
                    Atlas Application
                           │
                           ▼
                    ┌─────────────┐
                    │ Application │
                    │             │
                    │ Bootstrap   │
                    │ Config      │
                    │ Routes      │
                    │ Kernel      │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    Core     │
                    │             │
                    │ Domain      │
                    │ Errors      │
                    │ Validation  │
                    │ Result      │
                    │ Types       │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │Infrastructure│
                    │             │
                    │ DI          │
                    │ Logging     │
                    │ Persistence │
                    │ TypeORM     │
                    └─────────────┘
```

The repository structure reflects architectural responsibility rather than framework conventions.

## Application

The Application layer coordinates application execution.

It contains:

- Configuration
- Bootstrap
- Application kernel
- HTTP routes
- Server initialization

The Application layer should coordinate the system without becoming the owner of business rules.

## Core

The Core contains foundational domain concepts that should remain independent from infrastructure concerns.

It currently provides:

- Entity primitives
- Value objects
- Unique entity identifiers
- Domain errors
- Result types
- Validation infrastructure
- Domain-oriented types
- Core utilities

The Core should not depend on infrastructure implementations.

## Infrastructure

Infrastructure contains technical implementations and external system concerns.

Current infrastructure includes:

- Dependency injection
- Logging
- PostgreSQL connectivity
- TypeORM
- Repository infrastructure
- Transaction management
- Database migrations

Infrastructure exists to support the application and core architecture rather than define the platform's business concepts.

---

# Platform Architecture

The technical architecture described above is distinct from the higher-level Atlas platform architecture.

Atlas is partitioned into business capabilities through bounded contexts.

The current platform model identifies contexts including:

- Identity & Access Management
- Organization Management
- Asset Management
- Storage
- Processing
- Delivery
- Search
- Sharing
- Audit & Compliance
- Platform Administration

These are **architectural business boundaries**, not necessarily application modules, packages, services, or deployment units.

The canonical context definitions are maintained in:

[`docs/architecture/platform/context-map.md`](docs/architecture/platform/context-map.md)

The platform model is maintained in:

[`docs/architecture/platform/atlas-platform-model.md`](docs/architecture/platform/atlas-platform-model.md)

---

# Multi-Tenancy

Atlas is designed as a multi-tenant platform.

The fundamental platform model establishes:

```text
Platform
   │
   ├── Tenant / Organization
   │       │
   │       ├── Users
   │       ├── Memberships
   │       └── Resources
   │
   └── Platform-owned resources
```

The architecture treats ownership as a foundational concern.

Key invariants include:

- Atlas is always multi-tenant.
- Every resource has an owner.
- Every resource belongs to one tenant unless platform-owned.
- Ownership precedes authorization.
- Data is classified according to ownership scope.

The detailed ownership model is maintained separately from this README.

---

# Documentation

Documentation is a first-class engineering deliverable in Atlas.

The repository is the authoritative source of project knowledge.

```text
docs/
├── architecture/
├── development/
├── operations/
├── product/
└── templates/
```

### Architecture

Defines the architectural foundation and decisions governing Atlas.

### Development

Provides guidance for local development, testing, migrations, and development workflows.

### Operations

Contains operational documentation for deployment, environments, and monitoring.

### Product

Contains the product vision, roadmap, milestones, and product decisions.

### Templates

Provides reusable templates for architectural and engineering governance.

Start with:

1. [Engineering Constitution](docs/architecture/engineering/engineering-constitution.md)
2. [Architecture Lifecycle](docs/architecture/engineering/architecture-lifecycle.md)
3. [Platform Model](docs/architecture/platform/atlas-platform-model.md)
4. [Context Map](docs/architecture/platform/context-map.md)
5. [Architecture Decision Records](docs/architecture/adr/)

---

# Engineering Lifecycle

Significant Atlas engineering work follows an explicit lifecycle:

```text
Discovery
    ↓
Architecture
    ↓
Architecture Review
    ↓
Design
    ↓
Design Review
    ↓
Implementation
    ↓
Engineering Review
    ↓
Merge
```

The lifecycle exists to ensure that implementation follows approved architectural and design decisions.

See:

[`docs/architecture/engineering/architecture-lifecycle.md`](docs/architecture/engineering/architecture-lifecycle.md)

---

# Contributing

Contributions should follow the engineering and architectural governance established by Atlas.

Before contributing:

1. Understand the Engineering Constitution.
2. Review the relevant architectural documentation.
3. Identify the responsibility and architectural boundary affected by the change.
4. Follow the established development and testing practices.
5. Update documentation when the change affects architectural or engineering knowledge.
6. Follow the repository's commit and pull request conventions.

See:

- [`docs/contributing.md`](docs/contributing.md)
- [`docs/architecture/engineering/engineering-constitution.md`](docs/architecture/engineering/engineering-constitution.md)
- [`docs/architecture/engineering/architecture-lifecycle.md`](docs/architecture/engineering/architecture-lifecycle.md)

---

# License

Atlas is licensed under the MIT License.

```

```
````
