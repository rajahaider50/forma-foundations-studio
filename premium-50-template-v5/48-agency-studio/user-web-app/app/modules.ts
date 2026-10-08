export const modules=["services", "projects", "leads"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
