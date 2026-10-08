export const modules=["clients", "invoices", "payments"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
