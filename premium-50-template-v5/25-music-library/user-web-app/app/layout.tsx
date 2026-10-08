import "./globals.css";
export const metadata={title:"Music Library App",description:"Premium app surface for Music Library"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}