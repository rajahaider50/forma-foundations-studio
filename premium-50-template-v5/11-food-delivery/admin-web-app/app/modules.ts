export const modules=["restaurants", "menu", "cart", "orders"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
