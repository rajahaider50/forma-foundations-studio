export const modules=["rooms", "reservations", "guests"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
