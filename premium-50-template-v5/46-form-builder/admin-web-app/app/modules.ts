export const modules=["forms", "fields", "submissions"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
