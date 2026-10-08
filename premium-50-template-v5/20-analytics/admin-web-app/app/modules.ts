export const modules=["dashboards", "metrics", "reports"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
