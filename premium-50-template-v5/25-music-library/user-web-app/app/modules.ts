export const modules=["artists", "albums", "tracks", "playlists"] as const;
export const moduleRoutes=modules.map(module=>({module,path:`/${module}`}));
