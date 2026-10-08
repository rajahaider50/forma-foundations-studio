export const modules=["accounts", "transfers", "transactions"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
