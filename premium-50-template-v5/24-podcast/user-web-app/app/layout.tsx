import "./globals.css";
export const metadata={title:"Podcast App",description:"Premium app surface for Podcast"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}