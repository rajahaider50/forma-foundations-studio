export const modules=["products", "cart", "checkout", "orders"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
