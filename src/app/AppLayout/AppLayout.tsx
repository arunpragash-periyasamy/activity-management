'use client';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';

const AppLayout = (props:{children: any, darkMode: boolean, setDarkMode:any}) => {
  const {children, darkMode, setDarkMode} = props;
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''} h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-900`}>
      {/* Sidebar */}
      <Sidebar />
      {/* Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
       <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        {/* Main Content */}
        <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <div className="max-h-full border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
