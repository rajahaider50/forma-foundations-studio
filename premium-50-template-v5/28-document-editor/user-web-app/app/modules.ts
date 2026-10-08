export const modules=["documents", "versions", "comments"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
