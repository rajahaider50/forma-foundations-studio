import "./globals.css";
export const metadata={title:"Content CMS Studio",description:"Premium public surface for Content CMS"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}