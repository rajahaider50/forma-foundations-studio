export const modules=["threads", "prompts", "usage"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
