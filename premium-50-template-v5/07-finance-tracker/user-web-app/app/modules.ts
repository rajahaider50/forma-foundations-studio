export const modules=["transactions", "budgets", "accounts"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
