export const modules=["vehicles", "drivers", "maintenance"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
