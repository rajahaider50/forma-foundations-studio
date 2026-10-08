export const modules=["posts", "comments", "reactions", "following"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
