export const modules=["trips", "itinerary", "places"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
