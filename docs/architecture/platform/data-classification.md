# Atlas Data Classification

## Purpose

The Atlas Data Classification defines how data is classified according to its ownership, scope, lifecycle, and governance within the Atlas platform.

Rather than classifying data by technical implementation or storage location, Atlas classifies data according to architectural ownership and business responsibility.

This document establishes the canonical rules for data ownership, isolation, inheritance, and governance across the platform.

---

# Classification Principles

The Atlas platform classifies data according to the following principles.

## Ownership Before Storage

Data is classified by its owner, not by where it is stored.

Storage providers, databases, caches, and search indexes do not determine ownership.

---

## Scope Before Type

The scope of data is more important than its technical representation.

Data with the same technical structure may belong to different ownership scopes.

---

## Inheritance of Ownership

Derived and dependent resources inherit ownership from their parent resource unless explicitly defined otherwise.

Ownership is never duplicated or inferred.

---

## Tenant Isolation

Tenant-owned data is isolated from every other tenant.

No tenant may access another tenant's data except through explicitly supported platform capabilities.

---

## Technology Independence

Data classification is independent of databases, storage providers, search engines, caches, or messaging systems.

Classification remains stable regardless of implementation.

---

# Data Classification Hierarchy

Atlas recognizes four architectural data scopes.

```text
Platform
    │
    ▼
Tenant
    │
    ▼
Resource
    │
    ▼
Derived
```

Each scope defines ownership, governance, and lifecycle responsibilities.

---

# Platform Data

## Definition

Platform Data is owned and governed by the Atlas platform itself.

Platform Data exists independently of any tenant and supports the operation of the platform as a whole.

## Characteristics

- Globally managed.
- Shared platform responsibility.
- Independent of tenant lifecycle.
- Managed through platform governance.

## Examples

- Platform configuration
- Global feature flags
- System policies
- Supported storage providers
- Platform capabilities
- System reference data

---

# Tenant Data

## Definition

Tenant Data is owned by a single organization.

It defines the operational state of an organization within Atlas and is isolated from every other tenant.

## Characteristics

- Organization-owned.
- Tenant-isolated.
- Governed by organizational policies.
- Independent of implementation technology.

## Examples

- Organization profile
- Memberships
- Roles
- Assets
- Collections
- Folders
- Organization settings
- Organization policies

---

# Resource Data

## Definition

Resource Data belongs to a parent business resource.

Its ownership is inherited from that parent resource.

Resource Data cannot exist independently of the resource it describes.

## Characteristics

- Inherits ownership.
- Shares lifecycle with parent resource.
- Cannot redefine ownership.
- Cannot cross tenant boundaries independently.

## Examples

- Asset metadata
- Asset versions
- Asset relationships
- Processing history
- Comments
- Tags
- Custom metadata
- Access history

---

# Derived Data

## Definition

Derived Data is generated from existing platform resources.

Derived Data never establishes independent ownership.

Ownership always flows from the originating resource.

## Characteristics

- Generated automatically.
- Replaceable.
- Regenerable.
- Ownership inherited.
- Governed by parent resource.

## Examples

- Search indexes
- AI embeddings
- OCR results
- Thumbnails
- Image renditions
- Video transcodes
- Cached previews
- Analytics summaries

---

# Ownership Matrix

| Data Scope | Owner           | Tenant Isolated | Independent Lifecycle |
| ---------- | --------------- | :-------------: | :-------------------: |
| Platform   | Atlas Platform  |       N/A       |          Yes          |
| Tenant     | Organization    |       Yes       |          Yes          |
| Resource   | Parent Resource |       Yes       |          No           |
| Derived    | Parent Resource |       Yes       |          No           |

---

# Lifecycle Rules

The following lifecycle rules apply across every classification.

## Platform Data

- Managed by platform governance.
- Evolves independently of tenant operations.
- Persists across tenant lifecycle events.

---

## Tenant Data

- Created when organizations create business resources.
- Governed by organizational ownership.
- Removed or archived according to organizational lifecycle policies.

---

## Resource Data

- Created with its parent resource.
- Deleted with its parent unless explicitly retained.
- Ownership never changes independently.

---

## Derived Data

- Created through platform capabilities.
- May be regenerated at any time.
- May be discarded without changing business ownership.
- Exists only while its parent resource exists.

---

# Classification Rules

The following architectural rules always apply.

## Rule 1

Every persistent business resource belongs to exactly one data scope.

---

## Rule 2

Every resource has exactly one authoritative owner.

---

## Rule 3

Derived data never establishes independent ownership.

---

## Rule 4

Ownership inheritance cannot be bypassed by implementation.

---

## Rule 5

Storage technology never changes classification.

---

## Rule 6

Search indexes, caches, and processing outputs remain governed by the ownership of their originating resource.

---

## Rule 7

Tenant isolation applies to every classification except Platform Data.

---

# Relationship to Other Documents

| Document                  | Responsibility                                                    |
| ------------------------- | ----------------------------------------------------------------- |
| `atlas-platform-model.md` | Defines the platform's core concepts and principles.              |
| `domain-glossary.md`      | Defines the platform's canonical business terminology.            |
| `context-map.md`          | Defines business capability boundaries.                           |
| `ownership-model.md`      | Defines ownership semantics and architectural invariants.         |
| `data-classification.md`  | Defines how platform data is classified, governed, and inherited. |

This document extends the Ownership Model by defining how ownership influences the classification and governance of data throughout the Atlas platform.

---

# Governance

The Atlas Data Classification is a living architectural artifact.

Changes to data classification require architectural review because they affect ownership, authorization, storage, search, processing, auditing, and platform governance.

New classifications should be introduced only when they represent genuinely new ownership or lifecycle semantics rather than implementation details.

All platform capabilities must classify and govern data according to the rules defined in this document.
