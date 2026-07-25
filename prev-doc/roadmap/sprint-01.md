# Sprint 1: Platform Bootstrap

**Sprint Goal**

Build a production-ready backend foundation. By the end of Sprint 1, we won't have any business features yet, but we'll have a backend that every future module can plug into.

---

# Sprint 1 Backlog

## Epic 1: Project Bootstrap

### Story 1.1 - Initialize Project

**Deliverables**

- Express
- TypeScript
- ts-node-dev (development)
- tsconfig-paths
- dotenv
- reflect-metadata

**Acceptance Criteria**

- `npm run dev` starts the server.
- TypeScript path aliases work.
- Environment variables load correctly.

---

### Story 1.2 - Project Structure

Create the initial directory structure.

```text
src/
│
├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── container/
│   ├── database/
│   ├── logger/
│   ├── middleware/
│   ├── routes/
│   └── server.ts
│
├── modules/
│
├── infrastructure/
│
├── shared/
│   ├── context/
│   ├── errors/
│   ├── events/
│   ├── result/
│   ├── types/
│   └── value-objects/
│
└── index.ts
```

---

## Epic 2: Code Quality

### Story 2.1

Install

- ESLint
- Prettier
- Husky
- lint-staged

Every commit should automatically lint and format code.

---

### Story 2.2

Testing

Choose one:

- Vitest (**my recommendation**)
- Jest

Configure:

```text
Unit Tests

Integration Tests
```

---

## Epic 3: Configuration

Create:

```text
app/config/
```

Structure:

```text
config/

index.ts

app.config.ts

database.config.ts

storage.config.ts

jwt.config.ts
```

No code outside the configuration layer should access `process.env`.

---

## Epic 4: Logging

We'll use **Pino**.

Create:

```text
logger/

logger.ts

request-logger.ts
```

Later we'll add:

- request IDs
- organization IDs
- user IDs

---

## Epic 5: Dependency Injection

Use **tsyringe**.

Container:

```text
container/

container.ts

tokens.ts
```

Never inject concrete implementations.

Always inject interfaces/tokens.

---

## Epic 6: Database

Install

- PostgreSQL
- TypeORM

Create:

```text
database/

data-source.ts

migrations/

subscribers/
```

---

## Epic 7: Base Infrastructure

### BaseEntity

```ts
id;

createdAt;

updatedAt;

deletedAt;

version;
```

---

### Result

```ts
Success<T>;

Failure<E>;
```

---

### Errors

```text
DomainError

ValidationError

ConflictError

NotFoundError

ForbiddenError
```

---

### Repository Interface

```ts
Repository<T>;
```

Generic.

---

## Epic 8: Request Context

Create

```ts
RequestContext;
```

Contains:

```text
requestId

user

organization

membership
```

Every Use Case receives this object.

---

## Epic 9: Health

Endpoints

```http
GET /health

GET /ready
```

---

## Epic 10: Docker

One compose file.

Services

```text
PostgreSQL

Redis

MinIO
```

This gives every developer the same environment.

---

# Sprint Deliverables

At the end of Sprint 1 we should have:

```
✅ Express

✅ TypeScript

✅ DI

✅ Config

✅ Logger

✅ PostgreSQL

✅ TypeORM

✅ Docker

✅ Request Context

✅ BaseEntity

✅ Repository Interface

✅ Error Handling

✅ Health Check
```

No assets.

No folders.

No uploads.

Just a strong foundation.

---

# Sprint Definition of Done

Before we move to Sprint 2:

- All tests pass.
- Lint passes.
- Formatting passes.
- Application starts with one command.
- Docker starts with one command.
- Health endpoint responds.
- Database connects.
- No business logic exists yet.
- CI pipeline is green.

---

# Repository Layout After Sprint 1

```text
atlas-api/
├── docker/
│   ├── docker-compose.yml
│   └── minio/
├── docs/
├── src/
│   ├── app/
│   ├── infrastructure/
│   ├── modules/
│   ├── shared/
│   └── index.ts
├── tests/
├── .env.example
├── package.json
├── tsconfig.json
├── eslint.config.js
└── README.md
```

---

## One adjustment I'd make before we write code

I'd slightly revise one earlier decision:

Instead of putting the DI container under `app/container`, I'd move it into `infrastructure`.

Why?

A DI container is an implementation detail of how the application is wired together, not part of the domain or application itself.

So I'd use:

```text
src/
├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── routes/
│   └── server.ts
│
├── infrastructure/
│   ├── container/
│   ├── persistence/
│   ├── logging/
│   ├── storage/
│   └── queue/
```

This keeps the dependency direction clean: the application defines abstractions, and the infrastructure provides and wires concrete implementations.

---

**Project Bootstrap**

We'll create:

- `package.json`
- `tsconfig.json`
- Folder structure
- Environment configuration
- Express server
- Dependency injection setup
- Logger
- Docker Compose
