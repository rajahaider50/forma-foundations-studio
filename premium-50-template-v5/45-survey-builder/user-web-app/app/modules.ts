export const modules=["surveys", "questions", "responses"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
