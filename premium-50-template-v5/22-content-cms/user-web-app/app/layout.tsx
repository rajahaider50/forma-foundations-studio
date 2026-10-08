import "./globals.css";
export const metadata={title:"Content CMS App",description:"Premium app surface for Content CMS"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}