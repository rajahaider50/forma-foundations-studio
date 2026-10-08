export const modules=["listings", "favorites", "messages"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
