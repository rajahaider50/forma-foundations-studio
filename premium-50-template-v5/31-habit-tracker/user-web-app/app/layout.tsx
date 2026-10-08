import "./globals.css";
export const metadata={title:"Habit Tracker App",description:"Premium app surface for Habit Tracker"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}