export const modules=["projects", "case-studies", "leads"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
