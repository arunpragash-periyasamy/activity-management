'use client';
import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "./AppLayout/AppLayout";
import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang="en">
      <body>
        <AppLayout children={children} darkMode={darkMode} setDarkMode={setDarkMode}/>
        </body>
    </html>
  );
}
