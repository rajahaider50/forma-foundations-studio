export const modules=["courses", "lessons", "quizzes", "progress"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
