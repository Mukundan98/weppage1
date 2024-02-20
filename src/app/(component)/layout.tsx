"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <h1>Apptimus Tech</h1>
          <ul>
            <li className={pathname === "/home" ? "active" : ""}>
              <Link href="/home">Home</Link>
            </li>
            <li className={pathname === "/contacts" ? "active" : ""}>
              <Link href="/contacts">Contact</Link>
            </li>
            <li className={pathname === "/blogs" ? "active" : ""}>
              <Link href="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
