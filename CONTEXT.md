# hackforla/311-data context
> refreshed 2026-09-04 | upstream default: main @ 3ffa1f3b

## Identity & policies
- upstream: hackforla/311-data, default branch main, primary language JavaScript (React + Redux), English-first yes (issues/docs/UI in English).
- CLA/DCO: none (CONTRIBUTING + repo policy; org hackforla/.github has org defaults but repo-level overrides apply).
- AI-assisted PR policy: unstated/allowed (no ban, no disclosure requirement found in repo or org).
- signed commits required: no (repo policy overrides org-level default).
- PR template: .github/PULL_REQUEST_TEMPLATE.md (simple "Fixes #..." + checklist).
- external tracker: GitHub issues.

## Conventions (verified from merged PRs)
- branch naming: issue-ID-prefixed when tied to an issue (`1981-NC-Name-Preview-Modal`, `1975-FEAT-Debounce100ms`, `ssiegal.2078`); CONTRIBUTING recommends `issueId-Prefix-MinimalDescription`. Fall back to descriptive `fix/...` for self-found gaps.
- commit style: plain imperative summaries, no strict Conventional Commits.
- test command: `npm test` (vitest + React Testing Library), lint `npm run lint` (eslint).
- CI: GitHub Actions workflows on PR; tests in `src/**/*.test.js(x)`, setup `src/utils/test-setup.js`, jsdom env.
- outside contributions DO get merged (ssiegal1, rayneng, krystalphn, DorianDeptuch, melissaluc recently) — responsive.

## Maintainer picture
- active devs: ssiegal1 (data pipeline/years), rayneng (map/UI), plus rotating volunteers. Data-pipeline area actively worked in Feb 2026.

## Issue-area health
- many open issues are UX/design or onboarding meta; a few small verifiable DEV bug fixes are unassigned (#2030, #2056, #2059). #2083 (write tests for neighborhood council dropdown) is assigned to brucek.
- map/filter/address-search area has in-flight work; avoid large data-pipeline refactors.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-09-04 self-found (utils) — `getTypeIdFromTypeName` fails to map official Socrata request-type names to typeIds. Verified in current upstream: live data.lacity.org 2025 dataset returns request types "Dead Animal Removal", "Metal/Household Appliances", "Multiple Streetlight Issue"; the function searches only app `typeName` (not `socrataNames`), so those return `undefined` instead of typeIds 3, 7, 9. Dedupe: no open/closed/merged upstream PR or issue touches getTypeIdFromTypeName/socrataNames/typeId/Dead Animal Removal. — status: PR-OPENED 2026-09-04 https://github.com/olitreadwell/311-data/pull/1 (fork main -> fix/request-type-id-mapping; fix + regression test; local `npm test` green).

## Mined gaps (discovered, not yet attempted)
- 2026-09-04 utils `transformCounts` / `createObjFromArrays` / `truncateName` have no unit tests (CONTRIBUTING asks for tests). — status: proposed (test-coverage candidate, lower priority than above).
- 2026-09-04 #2030 address-search persists on blur — NOT verifiable in this env (needs Mapbox token + manual UI); clearOnBlur already defaults to false in mapbox-gl-geocoder 5.0.1; root cause unclear. — status: dropped(unverified/undiagnosed).
