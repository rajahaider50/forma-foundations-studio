# Calendar — Completion Contract

- Public website: responsive, SEO-ready pages, CTA/contact surfaces, loading/error/empty states.
- User web app: auth flow, protected workspace, search/filter/sort/pagination, CRUD, validation, notifications.
- Admin website: overview, user/role controls, audit surface, settings.
- Admin web app: CRUD, bulk operations, RBAC-aware actions, audit log.
- User Android: Compose navigation, ViewModel, repository, loading/error/empty states, local mode.
- Admin Android: admin navigation, role guard, moderation/CRUD states.
- Backend: controller/service/repository boundaries, auth/RBAC, validation, rate-limit abstraction, audit log, mock providers, health, OpenAPI.
- Integrations: provider interfaces + deterministic mock implementations; real credentials/providers are injected later.
- Tests: deterministic unit/API/UI smoke coverage and seeded demo credentials.
- Modules: events, attendees, reminders

**Local development credentials**: `user@calendar.local / LocalUser123!` and `admin@calendar.local / LocalAdmin123!`.

