export const modules=["threads", "messages", "attachments"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
