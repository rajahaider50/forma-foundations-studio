import "./globals.css";
export const metadata={title:"CRM App",description:"Premium app surface for CRM"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}