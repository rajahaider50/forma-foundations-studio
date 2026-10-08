export const modules=["posts", "authors", "bookmarks"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
