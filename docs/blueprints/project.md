---

# 📋 Project Blueprint (v1.0)

## Product

A multi-tenant Digital Asset Management Platform.

Think:

> **Cloudinary + Vercel Organizations + GitHub Permissions + Stripe-quality APIs**

---

# Non-Functional Requirements

Before writing features, we define what the system must guarantee.

## Scalability

Target

```text
10M+ assets

100K+ organizations

1M+ users
```

Nothing we build should assume a "small app."

---

## Availability

Uploads should continue working if:

- Image processor is down
- Email service is down
- Thumbnail service is down

That means uploads **must not depend** on downstream processing.

---

## Storage Agnostic

The application must support:

```text
S3

Cloudflare R2

Google Cloud Storage

Azure Blob

Local Storage
```

without changing business logic.

---

## Stateless API

Every API instance should be replaceable.

```text
API 1

API 2

API 3
```

All state lives in:

- PostgreSQL
- Redis
- Object Storage

---

# Architecture Principles

These are now "laws."

## Law 1

**Business code never imports Express.**

---

## Law 2

**Business code never imports TypeORM.**

---

## Law 3

**Business code never imports AWS SDK.**

---

## Law 4

Infrastructure depends on Domain.

Never the opposite.

---

## Law 5

Everything is replaceable.

Repositories

↓

Storage

↓

Queues

↓

Email

↓

Cache

↓

Logger

All behind interfaces.

---

# Coding Standards

No file should exceed:

```text
300 lines
```

Ideal:

```text
150–200
```

If a service grows larger:

Split it.

---

Functions:

```text
20–40 lines
```

Maximum.

---

Controllers:

```text
10–30 lines
```

They should almost read like routing glue.

---

# Naming

Avoid generic names like:

```text
helpers

common

misc

utils
```

Prefer intent:

```text
authorization

storage

events

contracts

validation
```

If a folder name doesn't explain its purpose, rename it.

---

# Dependency Injection

Everything should resolve through interfaces.

```text
UploadAssetUseCase

↓

AssetRepository

↓

StorageProvider

↓

Logger

↓

EventPublisher
```

No `new` inside business logic.

---

# Error Philosophy

Every domain error has:

```text
Code

Message

Metadata
```

Example:

```json
{
  "code": "ASSET_ALREADY_EXISTS",
  "message": "An asset with this public ID already exists.",
  "metadata": {
    "publicId": "marketing/logo"
  }
}
```

This makes APIs predictable for clients.

---

# Logging Philosophy

Every log should answer:

- What happened?
- Who did it?
- Which organization?
- Which request?
- How long did it take?

Example fields:

```text
timestamp

level

requestId

organizationId

userId

action

duration
```

Structured logs make production debugging much easier.

---

# Metrics

Every important operation should eventually expose metrics.

Examples:

```text
Upload Duration

Upload Success Rate

Upload Failure Rate

Storage Latency

Database Latency

Queue Depth

Transformation Duration
```

We don't need dashboards on day one, but we should leave hooks for them.

---

# Security Defaults

Everything private unless explicitly public.

For assets:

```text
visibility

↓

PRIVATE
```

For folders:

Private.

For API keys:

Least privilege.

For signed URLs:

Short-lived by default.

---

# Performance Targets

Eventually:

```text
Create Folder

<100 ms

List Assets

<200 ms

Upload Metadata

<100 ms

Signed URL

<50 ms
```

The actual upload time depends on the file size, but metadata operations should remain fast.

---

# Release Strategy

We won't build every feature at once.

We'll build vertical slices.

Example:

Sprint 1:

```text
Storage abstraction

↓

Local provider

↓

Folder CRUD

↓

Tests
```

Sprint 2:

```text
Tags

↓

Assets

↓

Metadata
```

Sprint 3:

```text
Uploads

↓

Background workers
```

Each sprint should leave the application in a deployable state.

---

# Definition of Done

No feature is complete until it has:

- Domain model
- Migration
- Repository
- Use case
- Controller
- Validation
- Authorization
- Tests
- Documentation
- Logging
- Error handling

That checklist will keep quality consistent.

---

## Epic: Platform Bootstrap

Tasks:

1. Initialize project structure.
2. Configure TypeScript.
3. Configure ESLint + Prettier.
4. Configure TypeORM.
5. Set up dependency injection.
6. Create configuration module.
7. Implement logger abstraction.
8. Implement domain error hierarchy.
9. Implement result type.
10. Create base entity.
11. Create repository interfaces.
12. Configure testing.
13. Add Docker Compose (PostgreSQL + Redis + MinIO for local object storage).
14. Wire application bootstrap.
15. Add health and readiness endpoints.

---

## One adjustment I'd make

Earlier we discussed using a local filesystem provider for development. I'd slightly change that recommendation:

**Use MinIO as the default local object storage instead of the filesystem.**

Why?

- It exposes an S3-compatible API.
- Your upload code is identical in development and production.
- You can test buckets, object metadata, signed URLs, multipart uploads, and lifecycle behavior locally.
- Switching from MinIO to AWS S3 or Cloudflare R2 later becomes almost entirely a configuration change.

I'd still keep a `LocalStorageProvider` for lightweight tests, but for day-to-day development I'd standardize on **MinIO + PostgreSQL + Redis via Docker Compose**. That gives the team a production-like environment from the very beginning.

---
