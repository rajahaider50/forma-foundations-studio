export const modules=["listings", "viewings", "favorites"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
