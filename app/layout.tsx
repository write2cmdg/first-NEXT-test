import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - First Next JS test APP",
  description: "Student Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col items-center justify-center p-12">
          <nav>
            <h1 className="w-screen text-center">This my first NEXT Project</h1>
            <div className="flex w-screen flex-row items-center justify-between p-12">
              <Link href="/">Go to Home Page</Link>
              <Link href="/about">Go to About Page</Link>
              <Link href="/users">Go to Users Page</Link>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
