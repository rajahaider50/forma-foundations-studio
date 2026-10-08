export const modules=["orders", "menu", "kitchen", "staff"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
