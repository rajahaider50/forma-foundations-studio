export const modules=["shipments", "tracking", "dispatch"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
