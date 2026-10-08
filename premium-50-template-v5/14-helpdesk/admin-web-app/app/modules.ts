export const modules=["tickets", "agents", "knowledgebase"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
