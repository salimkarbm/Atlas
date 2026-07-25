# Knip

## Purpose

Knip is used to detect:

- unused dependencies
- unused exports
- dead files
- unused binaries
- unused scripts

It complements:

- ESLint
- TypeScript
- dependency-cruiser

## Running

npm run knip

## Auto Fix

npm run knip:fix

## CI

Knip runs on every pull request.

Pull requests cannot be merged if Knip reports actionable issues.

## False Positives

Framework discovery mechanisms and generated files may require explicit ignore rules.

Ignore rules should only be introduced after investigation.
