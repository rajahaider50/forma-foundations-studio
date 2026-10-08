export const modules=["products", "carts", "sales"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
