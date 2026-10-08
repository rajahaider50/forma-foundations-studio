export const modules=["services", "alerts", "logs"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
