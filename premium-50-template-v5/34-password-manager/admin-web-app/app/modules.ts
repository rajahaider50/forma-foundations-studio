export const modules=["vault", "items", "sharing"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
