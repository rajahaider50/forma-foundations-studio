# Premium 50 Template Pack — V5

V5 is a local-first, production-pattern template library. It does not require a remote backend to demonstrate real application behavior. Web surfaces persist CRUD state locally; Android persists local state; the backend persists data to a JSON store by default and supports Prisma/PostgreSQL as the production adapter.

## Design rule
No primary workflow is a static fake button. Create/update/delete/search/validation/auth/reset/rate-limit/state transitions are implemented as actual logic. External services remain provider interfaces because client credentials cannot be embedded in a reusable template.

## Production integration
1. Configure environment variables.
2. Switch storage to Prisma/PostgreSQL.
3. Set `REQUIRE_AUTH=true` and a strong JWT secret.
4. Replace provider implementations with the client's payment/email/OTP/storage/maps/AI adapters.
5. Run CI and device/browser E2E in the target environment.
