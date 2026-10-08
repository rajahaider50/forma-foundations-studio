# Shared runtime — expense-split

This template uses a **local-first runtime**, not a fake placeholder. CRUD state persists in browser storage for web surfaces and in app storage for Android. Provider interfaces are explicit integration boundaries for payment, email, OTP, storage, maps and AI. Replace the provider implementation when a client connects its real service.

The backend defaults to a persistent JSON repository for local development and can be switched to Prisma/PostgreSQL with `STORAGE_MODE=prisma`.
