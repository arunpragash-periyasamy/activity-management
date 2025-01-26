'use client'
import React from "react";
import { FaPaperPlane, FaBan, FaFile, FaFolder, FaImage } from "react-icons/fa";
import ChatReply from "./components/responseContent/responseContent";

const content =
  "To convert the provided HTML and JavaScript code into a Next.js component using TypeScript, we will create a functional component that encapsulates the chat application. We'll also make use of React hooks to manage state and effects. Below is a simplified version of how you might structure this component in a Next.js application.\n\n### Step 1: Create a new Next.js component\n\nCreate a new file named `ChatApp.tsx` in your `components` directory (or wherever you prefer to keep your components).\n\n### Step 2: Convert the HTML and JavaScript to TypeScript\n\nHere’s how you can convert the provided code into a Next.js component:\n\n```tsx\n// components/ChatApp.tsx\n\nimport React, { useEffect, useRef, useState } from 'react';\nimport $ from 'jquery';\nimport 'font-awesome/css/font-awesome.min.css'; // Make sure to install font-awesome if you haven't\n\nconst ChatApp: React.FC = () => {\n    const chatBodyRef = useRef<HTMLDivElement>(null);\n    const messageInputRef = useRef<HTMLTextAreaElement>(null);\n    const [content, setContent] = useState<string>('');\n    const [myMessage, setMyMessage] = useState<string>('');\n    const [folderCount, setFolderCount] = useState<number>(0);\n    const [fileCount, setFileCount] = useState<number>(0);\n    const [currentDirectory, setCurrentDirectory] = useState<any>(null);\n    const [homeDirectory, setHomeDirectory] = useState<any>(null);\n    const history = useRef<any[]>([]);\n    const forwardHistory = useRef<any[]>([]);\n\n    useEffect(() => {\n        // Initialize any necessary jQuery plugins or effects here\n    }, []);\n\n    const addMessage = (sender: string, messageContent: string) => {\n        const messageDiv = $('<div>')\n            .addClass('p-3 rounded-lg')\n            .addClass(sender === 'user' ? 'bg-blue-100 text-blue-800 self-end ml-10' : 'bg-gray-100 text-gray-800 self-start mr-10');\n        messageDiv.html(messageContent);\n        $(chatBodyRef.current).append(messageDiv);\n    };\n\n    const submitRequest = () => {\n        const message = messageInputRef.current?.value.trim();\n        if (message) {\n            setContent((prev) => (prev.length > 0 ? `${prev}\\n\\n${message}` : message));\n            setMyMessage((prev) => `${prev}${message}`);\n            addMessage('user', myMessage);\n            sendToAPI({ type: 'text', content });\n            setContent('');\n            setMyMessage('');\n        }\n    };\n\n    const sendToAPI = (data: any) => {\n        // Implement your API call here\n    };\n\n    const handleFileUpload = (files: FileList) => {\n        setFileCount(files.length);\n        // Handle file uploads\n    };\n\n    return (\n        <div className=\"bg-gray-100 h-screen flex justify-center items-center\">\n            <div className=\"w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-[90vh]\">\n                <div className=\"bg-blue-600 text-white text-center py-3\">\n                    <h1 className=\"text-xl font-bold\">Chat Application</h1>\n                </div>\n                <div ref={chatBodyRef} className=\"flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 relative\">\n                    <div id=\"toastContainer\" className=\"absolute top-3 right-5\"></div>\n                </div>\n                <div className=\"p-4 bg-white border-t border-gray-200\">\n                    <form id=\"chatForm\" onSubmit={(e) => { e.preventDefault(); submitRequest(); }}>\n                        <div className=\"flex items-center space-x-2\">\n                            <textarea\n                                ref={messageInputRef}\n                                placeholder=\"Type a message...\"\n                                className=\"no-scrollbar flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500\"\n                            />\n                            <button type=\"button\" onClick={submitRequest} className=\"p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700\">\n                                <i className=\"fas fa-paper-plane\"></i>\n                            </button>\n                            {/* Add other buttons and functionalities here */}\n                        </div>\n                    </form>\n                </div>\n                {/* Add modals and other components here */}\n            </div>\n        </div>\n    );\n};\n\nexport default ChatApp;\n```\n\n### Step 3: Use the Component in Your Next.js Page\n\nYou can now use this `ChatApp` component in any of your Next.js pages. For example, in `pages/index.tsx`:\n\n```tsx\n// pages/index.tsx\n\nimport React from 'react';\nimport ChatApp from '../components/ChatApp';\n\nconst Home: React.FC = () => {\n    return (\n        <div>\n            <ChatApp />\n        </div>\n    );\n};\n\nexport default Home;\n```\n\n### Step 4: Install Dependencies\n\nMake sure you have the necessary dependencies installed. You can install jQuery and Font Awesome if you haven't done so already:\n\n```bash\nnpm install jquery font-awesome\n```\n\n### Step 5: Adjust Styles and Functionality\n\nYou may need to adjust styles and functionality based on your specific requirements. The above code provides a basic structure to get you started, and you can expand upon it as needed.\n\n### Note\n\n- This is a simplified version and does not include all the functionalities from your original code. You will need to implement the remaining functionalities (like file handling, folder access, etc.) in a similar manner.\n- Make sure to handle any asynchronous operations (like API calls) properly with async/await or promises.\n- Ensure that you manage state and effects correctly to avoid memory leaks or unwanted behavior.";

const ChatGPT = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div
        id="chatBody"
        className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-800 relative"
      >
        <div id="toastContainer" className="absolute top-3 right-5"></div>
        {/* Messages will appear here */}
        <ChatReply content={content} type="send"/>
        <ChatReply content={content} type="response"/>
      </div>

      {/* Chat Footer */}
      <div className="p-4 bg-white dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <form id="chatForm">
          <div className="flex items-center space-x-2">
            <textarea
              id="messageInput"
              placeholder="Type a message..."
              className="no-scrollbar flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
            ></textarea>
            <button
              type="button"
              id="sendMessageButton"
              className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <FaPaperPlane />
            </button>
            <button
              type="button"
              className="p-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
            >
              <FaPaperPlane />
            </button>
            <button
              type="button"
              id="uploadFileButton"
              className="relative p-2 text-gray-600 bg-gray-100 rounded-lg hover:text-orange-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            >
              <FaFile />
              <div
                id="fileCount"
                className="hidden absolute -top-3 left-[90%] bg-gray-200 dark:bg-gray-700 rounded-xl text-sm p-1 text-green-700 dark:text-green-400"
              >
                0
              </div>
            </button>
            <button
              type="button"
              id="uploadFolderButton"
              className="relative p-2 text-gray-600 bg-gray-100 rounded-lg hover:text-orange-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            >
              <FaFolder />
              <div
                id="folderCount"
                className="hidden absolute -top-3 left-[90%] bg-gray-200 dark:bg-gray-700 rounded-xl text-sm p-1 text-green-700 dark:text-green-400"
              >
                0
              </div>
            </button>
            <button
              type="button"
              id="uploadImageButton"
              className="relative p-2 text-gray-600 bg-gray-100 rounded-lg hover:text-orange-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            >
              <FaImage />
              <div
                id="imageCount"
                className="hidden absolute -top-3 left-[90%] bg-gray-200 dark:bg-gray-700 rounded-xl text-sm p-1 text-green-700 dark:text-green-400"
              >
                0
              </div>
            </button>
            <button
              type="button"
              id="clearUploadsButton"
              className="hidden relative p-2 text-gray-600 bg-gray-100 rounded-lg hover:text-orange-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            >
              <FaBan />
            </button>
          </div>

          {/* Hidden Inputs */}
          <input type="file" id="fileInput" className="hidden" multiple />
          <input
            type="file"
            id="folderInput"
            ref={(input) => {
              if (input) {
                input.setAttribute('directory', 'true');
                input.setAttribute('webkitdirectory', 'true');
              }
            }}
            className="hidden"
          />
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden"
          />
        </form>
      </div>

      {/* Single Button */}
      <button
        id="folderAccessButton"
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 dark:bg-blue-700 dark:hover:bg-blue-800"
      >
        <span>📁</span>
        <span>Open Folder</span>
      </button>

      {/* Permission Modal */}
      <div
        id="permissionModal"
        className="hidden fixed inset-0 bg-black bg-opacity-50 'flex' items-center justify-center"
      >
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 w-96 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Permission Required
          </h2>
          <p className="mb-4 dark:text-gray-300">
            Your browser needs permission to access local files and folders.
          </p>
          <div className="flex justify-end">
            <button
              id="closePermissionModal"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 dark:bg-gray-600"
            >
              Cancel
            </button>
            <button
              id="grantPermission"
              className="bg-green-500 text-white px-4 py-2 rounded dark:bg-green-600"
            >
              Grant Permission
            </button>
          </div>
        </div>
      </div>

      {/* Folder Modal */}
      <div
        id="folderModal"
        className="hidden fixed inset-0 bg-black bg-opacity-50 'flex' items-center justify-center"
      >
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 w-96 shadow-lg overflow-y-auto max-h-[80vh]">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Folders
            </h2>
            <div>
              <button
                type="button"
                id="uploadCurrentFilesButton"
                className="relative p-2 text-gray-600 bg-gray-100 rounded-lg hover:text-orange-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
              >
                <FaFile />
                <div
                  id="fileCount"
                  className="hidden absolute -top-3 left-[90%] bg-gray-200 dark:bg-gray-700 rounded-xl text-sm p-1 text-green-700 dark:text-green-400"
                >
                  0
                </div>
              </button>
              <button
                type="button"
                id="uploadCurrentFoldersButton"
                className="relative p-2 text-gray-600 bg-gray-100 rounded-lg hover:text-orange-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
              >
                <FaFolder />
                <div
                  id="folderCount"
                  className="hidden absolute -top-3 left-[90%] bg-gray-200 dark:bg-gray-700 rounded-xl text-sm p-1 text-green-700 dark:text-green-400"
                >
                  0
                </div>
              </button>
            </div>
          </div>
          <div id="folderList" className="space-y-2 mb-4"></div>
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              id="backButton"
              className="bg-gray-500 text-white px-4 py-2 rounded hidden dark:bg-gray-600"
            >
              Back
            </button>
            <button
              id="forwardButton"
              className="bg-blue-500 text-white px-4 py-2 rounded hidden dark:bg-blue-700"
            >
              Forward
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <button
              id="closeFolderModal"
              className="bg-gray-500 text-white px-4 py-2 rounded dark:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPT;
