export const modules=["services", "availability", "bookings"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
