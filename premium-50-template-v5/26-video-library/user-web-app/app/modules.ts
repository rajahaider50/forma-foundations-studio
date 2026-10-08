export const modules=["videos", "watchlist", "progress"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
