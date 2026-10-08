export const modules=["jobs", "companies", "applications"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
