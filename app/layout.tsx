import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "DriveConnect",
  description: "Make Your Car Rental Experience Effortless",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
