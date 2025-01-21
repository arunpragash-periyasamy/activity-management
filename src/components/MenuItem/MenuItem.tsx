import { MenuItemInterface } from "@/utility/interfaces/MenuItem";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import Link from "next/link"
import React from "react"

const MenuItem = (props:{item: MenuItemInterface, sidebarOpen: boolean})=>{
    const {item, sidebarOpen} = props;
    return (
    < div>
          {item.children ? (
            <Disclosure>
              {({ open }) => (
                <div>
                  <DisclosureButton className="w-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                    <div className={`flex items-center ${sidebarOpen ? "px-4" : "justify-center"}`}>
                      {item.icon}
                      <div
                        className={`w-full flex justify-between items-center py-2 px-4 ${
                          sidebarOpen ? "block" : "hidden"
                        }`}
                      >
                        {item.label}
                      </div>
                      {sidebarOpen && (
                        open ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        )
                      )}
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel className={`pl-4 ${sidebarOpen ? "block" : "hidden"}`}>
                    {item.children && item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.href}
                        className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          ) : (
            <Link
              href={item.href ? item.href : ''}
              className={`flex items-center gap-5 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md ${
                sidebarOpen ? " px-4 " : "justify-center"
              }`}
            >
              {item.icon}
              <span className={sidebarOpen ? "block" : "hidden"}>{item.label}</span>
            </Link>
          )}
        </div>
    )
}

export default MenuItem;