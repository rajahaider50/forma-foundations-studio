import "./globals.css";
export const metadata={title:"Blog Admin",description:"Premium admin surface for Blog"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}