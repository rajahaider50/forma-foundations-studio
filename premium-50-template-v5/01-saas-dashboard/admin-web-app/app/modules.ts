export const modules=["workspaces", "projects", "tasks", "analytics"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
