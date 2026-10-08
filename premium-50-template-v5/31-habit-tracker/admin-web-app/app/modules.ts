export const modules=["habits", "checkins", "streaks"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
