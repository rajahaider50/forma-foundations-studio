export const modules=["events", "tickets", "attendees"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
