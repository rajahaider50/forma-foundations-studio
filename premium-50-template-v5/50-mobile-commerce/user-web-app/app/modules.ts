export const modules=["products", "cart", "orders", "delivery"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
