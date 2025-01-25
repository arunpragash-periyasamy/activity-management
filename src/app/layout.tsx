'use client';
import "./globals.css";
import AppLayout from "./AppLayout/AppLayout";
import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en">
      <body className={darkMode ? "dark" : ""}>
        <AppLayout darkMode={darkMode} setDarkMode={setDarkMode}>
          {children}
        </AppLayout>
        </body>
    </html>
  );
}
