import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-2">
        <nav>
          <ul className="flex gap-4">
            <li><Link href = '/'>Home</Link></li>
            <li><Link href = '/about'>About</Link></li>
          </ul>
        </nav>
        <hr></hr>
        {children}
      </body>
    </html>
  );
}
