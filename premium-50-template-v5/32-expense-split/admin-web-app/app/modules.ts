export const modules=["groups", "expenses", "balances"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
