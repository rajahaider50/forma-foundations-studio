# V5 release checklist

- [x] 50 templates
- [x] Seven application surfaces per template
- [x] Local-first web persistence
- [x] Local-first Android persistence
- [x] Persistent backend file adapter
- [x] Prisma/PostgreSQL adapter + initial migration
- [x] Password hashing + JWT session flow
- [x] Password reset expiry + one-time reset records
- [x] Domain GET/POST/PATCH/DELETE routes
- [x] Optional authentication enforcement
- [x] Provider interfaces and deterministic test implementations
- [x] Backend TypeScript check scripts
- [x] Repository tests
- [x] Android repository tests
- [x] CI runs actual backend check/test commands
- [x] No hard-coded production secrets
- [ ] Client-specific cloud credentials
- [ ] Production database deployment
- [ ] App signing certificates
- [ ] Real external provider accounts
- [ ] Final browser/device E2E in each client's environment

The unchecked items are intentionally client integration boundaries, not missing template logic.
