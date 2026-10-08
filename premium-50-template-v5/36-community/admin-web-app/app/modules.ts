export const modules=["groups", "posts", "reactions", "members"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
