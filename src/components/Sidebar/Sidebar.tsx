'use client';
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { TbDashboard } from "react-icons/tb";
import MenuItem from "../MenuItem/MenuItem";
const menuItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: <TbDashboard  className="text-xl"/>,
    },
    {
        label: "Tasks",
        icon: <FaTasks className="text-xl"/>,
        children: [
            { label: "Add Task", href: "/task/add-task" },
            { label: "Task List", href: "/task/task-list" },
        ],
    },
];

const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div
            className={`${sidebarOpen ? 'w-64' : 'w-16'} flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all`}
        >
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{sidebarOpen ? 'ERP App' : 'ERP'}</span>
                <button
                    className='sm:hidden md:block'
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
            <nav className="flex-grow space-y-2 px-4">
                {menuItems.map((item, index) => <MenuItem key={item.label} item={item} sidebarOpen={sidebarOpen} />)}
            </nav>
        </div>

    )
}

export default Sidebar;