import { Inter } from "next/font/google";
import "./globals.css";
import DrawerAppBar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
export const metadata = {
  title: "Canoa Club",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      
      <body className={inter.className}>
        <DrawerAppBar />
          {children} 
        </body>
    </html>
  );
}
