# Atlas Domain Glossary

## Purpose

The Atlas Domain Glossary defines the canonical business and platform terminology used throughout Atlas.

It establishes the platform's ubiquitous language by providing consistent, technology-independent definitions for the core concepts that describe the Atlas domain.

This glossary serves as the authoritative reference for business terminology used across architecture, implementation, APIs, documentation, and user interfaces.

Engineering terminology is intentionally maintained in the Engineering Glossary.

---

# Platform

## Platform

### Definition

Atlas is a multi-tenant platform that enables organizations to manage, process, organize, govern, and deliver digital assets.

### Context

The platform provides shared capabilities while ensuring that each tenant operates within clearly defined ownership and authorization boundaries.

### Related Terms

Tenant, Organization, Asset

---

## Tenant

### Definition

A logical isolation boundary within the Atlas platform that encapsulates an organization's resources, users, configuration, and data.

### Context

Every organization operates within its own tenant. Tenant boundaries provide data isolation, ownership, and administrative independence.

### Related Terms

Organization, Membership, Ownership

---

# Identity

## User

### Definition

A person who can authenticate with and interact with the Atlas platform.

### Context

A user exists independently of any organization and may belong to one or more organizations through memberships.

### Related Terms

Membership, Organization, Identity

---

## Membership

### Definition

The relationship that associates a user with an organization.

### Context

Membership defines a user's participation within an organization and forms the basis for authorization within that organizational boundary.

### Related Terms

User, Organization, Role

---

# Organization

## Organization

### Definition

An organizational entity that operates independently within the Atlas platform.

### Context

An organization owns resources, manages memberships, and represents the primary operational boundary for business activities.

### Related Terms

Tenant, Membership, Ownership

---

## Ownership

### Definition

The authoritative relationship between a resource and the organization or platform responsible for managing it.

### Context

Every platform resource has a clearly defined owner responsible for its governance and lifecycle.

### Related Terms

Organization, Asset, Authorization

---

## Role

### Definition

A named collection of responsibilities and permissions granted to memberships within an organization.

### Context

Roles simplify authorization by grouping related permissions according to organizational responsibilities.

### Related Terms

Membership, Permission

---

## Permission

### Definition

A capability that authorizes a user to perform a specific action within the platform.

### Context

Permissions are evaluated within the context of an organization and are typically granted through roles.

### Related Terms

Role, Membership, Authorization

---

# Resources

## Asset

### Definition

A managed digital resource stored and governed by the Atlas platform.

### Context

Assets represent the primary business resource managed by organizations and may include associated metadata, versions, and processing history.

### Related Terms

Collection, Folder, Metadata

---

## Collection

### Definition

A logical grouping of related assets.

### Context

Collections organize assets according to business needs without altering asset ownership.

### Related Terms

Asset, Folder

---

## Folder

### Definition

A hierarchical organizational structure used to arrange assets and collections.

### Context

Folders provide navigational organization and do not change ownership or authorization.

### Related Terms

Asset, Collection

---

## Metadata

### Definition

Structured descriptive information associated with an asset.

### Context

Metadata enables discovery, classification, governance, and automation throughout the asset lifecycle.

### Related Terms

Asset, Search

---

# Platform Services

## Storage

### Definition

The platform capability responsible for the durable persistence of assets.

### Context

Storage abstracts the underlying storage provider and provides a consistent interface for asset persistence.

### Related Terms

Asset, Processing, Delivery

---

## Processing

### Definition

The platform capability responsible for transforming, analyzing, or enriching assets.

### Context

Processing executes operations that produce new representations or metadata while preserving ownership and governance.

### Related Terms

Asset, Storage, Delivery

---

## Delivery

### Definition

The platform capability responsible for securely making assets available to authorized consumers.

### Context

Delivery manages how assets are accessed, distributed, and consumed while respecting platform authorization policies.

### Related Terms

Asset, Processing, Authorization

---

## Search

### Definition

The platform capability responsible for discovering assets using metadata and other searchable characteristics.

### Context

Search enables efficient retrieval of platform resources while respecting ownership and authorization boundaries.

### Related Terms

Metadata, Asset

---

# Governance

## Authorization

### Definition

The process of determining whether a user may perform a specific action on a resource.

### Context

Authorization evaluates permissions within the context of organizational ownership and platform policies.

### Related Terms

Permission, Role, Ownership

---

## Policy

### Definition

A rule that governs the behavior, access, or lifecycle of platform resources.

### Context

Policies provide consistent governance across organizations and platform capabilities.

### Related Terms

Authorization, Ownership

---

## Audit

### Definition

A record of significant actions performed within the platform.

### Context

Audit information provides traceability, accountability, and compliance throughout the platform.

### Related Terms

Policy, Asset, User

---

## Lifecycle

### Definition

The sequence of states through which a platform resource progresses from creation to retirement.

### Context

Lifecycle management ensures that resources are governed consistently throughout their existence.

### Related Terms

Asset, Policy, Ownership

---

# Glossary Governance

The Atlas Domain Glossary is the authoritative source for business and platform terminology.

New terms should be introduced only after they have been accepted through the project's architectural governance process.

Existing definitions should evolve only when intentional architectural decisions change the platform model.

All architectural, implementation, API, and user-facing documentation should reference this glossary rather than redefining business concepts.

## Related Documents

- Platform Model
- Bounded Contexts
- Engineering Glossary
