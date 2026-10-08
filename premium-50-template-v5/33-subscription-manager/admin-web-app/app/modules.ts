export const modules=["subscriptions", "renewals", "billing"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
