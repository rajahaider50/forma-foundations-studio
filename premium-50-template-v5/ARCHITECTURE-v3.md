# Architecture v3

Each template is a vertical slice: public site, user app, admin site, admin app, Android user/admin clients, and backend. Shared contracts prevent drift between surfaces. Provider interfaces isolate external systems. Repositories isolate persistence. ViewModels/state layers isolate Android UI. Next.js routes isolate web UI.

