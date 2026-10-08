export const modules=["posts", "media", "drafts", "publishing"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
