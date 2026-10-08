export const modules=["events", "attendees", "reminders"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
