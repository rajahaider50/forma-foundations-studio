export const modules=["users", "roles", "workflows"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
