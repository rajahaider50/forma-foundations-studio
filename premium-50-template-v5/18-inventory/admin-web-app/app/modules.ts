export const modules=["items", "warehouses", "stock"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
