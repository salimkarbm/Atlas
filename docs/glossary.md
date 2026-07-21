# Project Glossary

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Last Updated:** July 16, 2026

---

# Purpose

This glossary defines the project's ubiquitous language.

Every contributor should use these terms consistently in:

- Source code
- Documentation
- API design
- Database schema
- Pull requests
- Architecture discussions

If a term is not defined here, it should be proposed before becoming part of the domain model.

---

# Naming Principles

The following principles apply to all domain terminology.

## One Concept, One Name

Each business concept has exactly one canonical name.

Example:

✅ Organization

Not:

- Workspace
- Team
- Company
- Tenant

These may exist in the future as distinct concepts, but they must never be used interchangeably.

---

## One Name, One Concept

A single term must never represent multiple concepts.

Example:

"Member" always means:

> A user belonging to an organization.

It never means:

- Global user
- Account owner
- Collaborator
- Administrator

---

## Prefer Business Language

Names should reflect the business domain rather than implementation details.

Prefer:

- Asset
- Folder
- Organization

Avoid:

- FileEntity
- FolderRecord
- UploadObject

---

# Identity

## User

A **User** is the global identity within the platform.

Users authenticate once and may belong to zero or more organizations.

A User exists independently of any organization.

Examples:

- Email address
- Password
- Global profile
- Authentication credentials

---

## Organization

An **Organization** is the top-level tenant.

Organizations own resources.

Organizations provide isolation between customers.

Everything that belongs to an organization must remain inaccessible to other organizations unless explicitly shared.

---

## Membership

A **Membership** represents the relationship between a User and an Organization.

Membership contains organization-specific information such as:

- role
- invitation status
- joined date

A User may have multiple memberships.

---

## Member

A **Member** is a User viewed within the context of an Organization.

Outside an organization they are a User.

Inside an organization they are a Member.

---

# Authorization

## Role

A Role is a named collection of permissions.

Examples:

- Owner
- Admin
- Editor
- Viewer

Roles simplify permission management.

---

## Permission

A Permission represents a single authorized action.

Examples:

- asset.create
- asset.delete
- folder.create
- member.invite

Permissions are atomic.

---

## System Role

A System Role applies globally across the platform.

Examples include:

- Platform Administrator
- Support Engineer

System Roles are distinct from organization roles.

---

# Assets

## Asset

An Asset is a digital resource managed by the platform.

Examples:

- Image
- Video
- Audio
- PDF
- Document

An Asset has metadata and binary content.

---

## Original Asset

The uploaded source file.

This file remains unchanged after upload.

---

## Derived Asset

A generated version of an original asset.

Examples:

- resized image
- compressed video
- thumbnail

Derived assets are reproducible.

---

## Transformation

A Transformation is the operation used to produce a derived asset.

Examples:

- Resize
- Crop
- Rotate
- Convert format
- Compress

Transformations do not modify the original asset.

---

# Organization Structure

## Folder

A Folder is a logical container for organizing assets.

Folders improve discoverability.

Folders do not define authorization boundaries.

---

## Collection _(Reserved)_

A future concept representing curated groups of assets.

Collections are independent of folder hierarchy.

This term is reserved until implemented.

---

# Storage

## Storage Provider

The infrastructure responsible for storing binary asset data.

Examples:

- Local filesystem
- Amazon S3
- Google Cloud Storage
- Azure Blob Storage

The domain remains independent of storage providers.

---

## Object Key

The unique identifier used by a storage provider to locate an object.

Object Keys are infrastructure concerns.

They are not user-facing identifiers.

---

# Processing

## Upload

The process of creating a new Asset from external input.

---

## Processing Job

An asynchronous task performed after upload.

Examples:

- Generate thumbnails
- Extract metadata
- Virus scanning
- Video transcoding

---

# Tenant Context

## Active Organization

The organization currently selected by the authenticated user.

Every organization-scoped request executes within exactly one Active Organization.

The Active Organization determines:

- authorization
- visibility
- ownership
- data isolation

---

## Tenant Isolation

The guarantee that one organization's data cannot be accessed by another organization except through explicitly supported sharing mechanisms.

Tenant isolation is a core architectural principle.

---

# Infrastructure

## Repository

A Repository provides persistence for an aggregate.

Repositories return domain models.

Repositories never expose ORM entities.

---

## Aggregate

A cluster of related domain objects treated as a single consistency boundary.

Aggregates protect business invariants.

---

## Use Case

A Use Case represents a single business operation.

Examples:

- Create Organization
- Invite Member
- Upload Asset

Use Cases coordinate domain behavior but do not contain infrastructure logic.

---

# Reserved Terms

The following concepts are intentionally reserved for future implementation.

- Collection
- Project
- Workspace
- Team
- API Key
- Service Account
- Webhook
- Audit Log
- Billing Account

These names should not be reused for unrelated concepts.

---

# Glossary Governance

Before introducing a new business term:

1. Confirm that an existing term does not already describe the concept.
2. Ensure the name reflects the business domain.
3. Add the definition to this glossary.
4. Update related documentation where necessary.

The glossary is the single source of truth for project terminology.

When code and documentation disagree, this glossary defines the canonical language.
