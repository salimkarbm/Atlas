# Naming Standards

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Coding Standards
**Last Updated:** July 16, 2026

---

# Purpose

This document defines the naming standards used throughout the Digital Asset Management Platform.

Consistent naming improves readability, discoverability, maintainability, and communication.

Names should express intent rather than implementation.

---

# Core Principles

## Business Language First

Code should use the language of the business domain.

Prefer:

- Organization
- Membership
- Asset
- Folder
- Transformation

Avoid implementation-driven names such as:

- OrganizationEntity
- AssetRecord
- FolderTable
- UploadObject

The codebase should read like the business it models.

---

## One Concept, One Name

Each business concept has exactly one canonical name.

If the glossary defines **Organization**, do not introduce:

- Workspace
- Tenant
- Company
- Team

unless they represent different concepts.

---

## One Name, One Meaning

A name should never represent multiple concepts.

Example:

`Member`

Always means:

> A User belonging to an Organization.

It should never also mean:

- Administrator
- Collaborator
- Owner
- Global User

---

## Prefer Clarity Over Brevity

Long descriptive names are preferred over short ambiguous names.

Good:

```text id="tgfx5j"
CreateOrganizationUseCase
```

Poor:

```text id="czvdu6"
OrgSvc
```

---

# General Naming Rules

Names should be:

- Descriptive
- Pronounceable
- Searchable
- Consistent
- Stable over time

Avoid abbreviations unless universally recognized.

Examples of acceptable abbreviations:

- API
- URL
- UUID
- HTTP
- JSON

Avoid project-specific abbreviations.

---

# File Names

Use **kebab-case** for files.

Examples:

```text id="2rggk8"
create-organization.use-case.ts
organization.repository.ts
upload-asset.controller.ts
asset.mapper.ts
member.entity.ts
```

---

# Directory Names

Use **kebab-case**.

Directories represent collections.

Examples:

```text id="l2b4es"
value-objects/
repositories/
controllers/
use-cases/
```

Avoid:

```text id="42rm9l"
Helpers/
Utils/
Misc/
```

Directory names must communicate responsibility.

---

# Class Names

Use **PascalCase**.

Examples:

```text id="mcnxtt"
Organization
Asset
Member
UploadAssetUseCase
InviteMemberUseCase
TypeOrmAssetRepository
```

Class names should be nouns unless representing a use case.

---

# Interface Names

Do **not** prefix interfaces with `I`.

Good:

```text id="mq17vr"
AssetRepository
PasswordHasher
StorageProvider
Clock
```

Avoid:

```text id="53bldo"
IAssetRepository
IPasswordHasher
IStorageProvider
```

Interfaces represent concepts, not implementation details.

---

# Repository Names

Repository interfaces belong to the Domain.

Naming pattern:

```text id="lb8mcl"
AssetRepository
OrganizationRepository
MemberRepository
```

Infrastructure implementations describe the technology.

Examples:

```text id="vx0z4i"
TypeOrmAssetRepository
PostgresOrganizationRepository
```

---

# Use Case Names

Every use case represents a single business action.

Pattern:

```text id="8b0svb"
Verb + Noun + UseCase
```

Examples:

```text id="w1d7wm"
CreateOrganizationUseCase
InviteMemberUseCase
UploadAssetUseCase
DeleteFolderUseCase
GenerateTransformationUseCase
```

Avoid generic names.

Poor:

```text id="o36k5h"
OrganizationService
```

---

# Controller Names

Pattern:

```text id="3x2r9m"
<Resource>Controller
```

Examples:

```text id="nglnbq"
OrganizationController
AssetController
FolderController
AuthenticationController
```

Controllers represent transport endpoints, not business logic.

---

# DTO Names

Pattern:

```text id="bzy08s"
CreateOrganizationRequestDto
CreateOrganizationResponseDto
InviteMemberRequestDto
UploadAssetResponseDto
```

DTOs should communicate both purpose and direction.

---

# Value Objects

Value Objects describe concepts, not implementation.

Examples:

```text id="ng0a2w"
EmailAddress
AssetIdentifier
FolderPath
OrganizationName
MimeType
```

Avoid suffixes like:

```text id="ebvvg0"
EmailValue
NameObject
```

---

# Domain Events

Use past tense.

Examples:

```text id="30kioo"
OrganizationCreated
MemberInvited
AssetUploaded
TransformationCompleted
```

Events describe facts that have already occurred.

---

# Error Classes

Pattern:

```text id="lhf4r9"
<BusinessMeaning>Error
```

Examples:

```text id="cp17qm"
OrganizationNotFoundError
MemberAlreadyExistsError
InvalidFolderPathError
AssetLockedError
```

Avoid:

```text id="d6gx1k"
GenericException
ErrorHandler
BusinessException
```

---

# Boolean Properties

Boolean names should answer a question.

Examples:

```text id="7g4k6x"
isActive
isArchived
hasPermission
canUpload
wasInvited
```

Avoid:

```text id="66i2eq"
active
permission
upload
```

---

# Collection Names

Collections use plural nouns.

Examples:

```text id="jlwmmt"
members
assets
organizations
folders
permissions
```

Avoid singular names for collections.

---

# Methods

Method names should describe behavior.

Examples:

```text id="g02kjz"
inviteMember()
archiveAsset()
restoreAsset()
assignRole()
generateTransformation()
```

Avoid vague verbs.

Poor:

```text id="r55f7r"
process()
executeTask()
handle()
run()
```

unless the context already makes the behavior explicit (e.g., a Use Case's `execute()` method).

---

# Constants

Use **UPPER_SNAKE_CASE** only for true compile-time constants.

Examples:

```text id="dhqq6q"
MAX_UPLOAD_SIZE
DEFAULT_PAGE_SIZE
SUPPORTED_IMAGE_TYPES
```

Application configuration belongs in the configuration module, not as scattered constants.

---

# Generic Names to Avoid

Avoid names that communicate nothing.

Examples:

- Helper
- Util
- Manager
- Processor
- Service
- Handler
- Common
- Misc
- Data
- Base

If a better business name cannot be found, reconsider the design.

---

# Technology Names

Technology should appear only in infrastructure implementations.

Good:

```text id="k9b4jt"
TypeOrmAssetRepository
RedisCacheStore
S3StorageProvider
```

Never expose technology-specific names in the Domain.

---

# Review Checklist

Before introducing a new name, ask:

1. Does it reflect the business domain?
2. Is it defined in the Glossary?
3. Could another engineer understand it immediately?
4. Is it unnecessarily abbreviated?
5. Does it describe intent rather than implementation?
6. Will it still make sense if the underlying technology changes?

If any answer is "no", choose a better name.

---

# Summary

Names are one of the most important design tools in software engineering.

Well-chosen names reduce documentation, simplify reviews, and make business rules easier to understand.

Every identifier should communicate purpose, not merely satisfy the compiler.
