export const modules=["contacts", "leads", "notes", "pipelines"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
