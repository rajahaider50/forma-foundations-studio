export const modules=["students", "attendance", "grades"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
