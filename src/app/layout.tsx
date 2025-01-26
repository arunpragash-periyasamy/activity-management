'use client';
import "./globals.css";
import AppLayout from "./AppLayout/AppLayout";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bounce, ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en">
      <body className={darkMode ? "dark" : ""}>
        {pathName === "/auth" ? (
          children
        ) : (
          <AppLayout darkMode={darkMode} setDarkMode={setDarkMode}>
            {children}
          </AppLayout>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
          transition={Bounce}
        />
      </body>
    </html>
  );
}
