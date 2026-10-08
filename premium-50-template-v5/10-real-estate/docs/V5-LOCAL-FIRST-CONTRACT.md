# V5 local-first contract — 10-real-estate

This template is functional without a remote backend. Web CRUD persists to browser localStorage. Android CRUD persists to app-local storage. Backend CRUD persists to a JSON data file by default.

## Integration boundary
Set `NEXT_PUBLIC_API_URL` / Android API base URL and switch repository wiring to the HTTP adapter. The UI contracts, validation, state transitions and provider interfaces remain unchanged.

## Provider boundaries
Payment, OTP, email, storage, maps and AI use explicit interfaces. The bundled implementations are deterministic test/local providers, not fake UI buttons. A real client provider replaces the implementation and keeps the same contract.

## Production switch
Use `STORAGE_MODE=prisma`, `DATABASE_URL`, a strong `JWT_SECRET`, `REQUIRE_AUTH=true`, HTTPS, real provider adapters, and a managed database.
