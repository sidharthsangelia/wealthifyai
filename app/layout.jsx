import { Inter } from "next/font/google";
import "./globals.css";
 
import {
  ClerkProvider,

} from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welthify",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>{/* <link rel="icon" href="/logo-sm.png" sizes="any" /> */}</head>
        <body className={`${inter.className}`}>
          <Header />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Sidharth</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
