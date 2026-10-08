export const modules=["patients", "appointments", "records"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
