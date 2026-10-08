export const modules=["shows", "episodes", "queue"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
