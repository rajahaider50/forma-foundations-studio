export const modules=["files", "folders", "sharing"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
