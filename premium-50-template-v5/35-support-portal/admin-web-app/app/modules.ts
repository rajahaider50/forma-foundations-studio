export const modules=["faq", "tickets", "feedback"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
