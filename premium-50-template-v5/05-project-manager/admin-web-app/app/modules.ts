export const modules=["projects", "tasks", "kanban", "calendar"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
