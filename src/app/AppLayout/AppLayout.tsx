"use client";
import "tailwindcss/tailwind.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import React, { useState } from "react";

const AppLayout = (props: {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { children, darkMode, setDarkMode } = props;
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-900`}
    >
      {/* Sidebar */}
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
      {/* Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          setSidebarActive={setSidebarActive}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        {/* Main Content */}
        <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-auto">
          <div className="h-full w-full border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-lg flex items-start justify-start overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
