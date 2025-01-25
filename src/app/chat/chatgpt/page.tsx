'use client'
import React from "react";
import { FaPaperPlane, FaBan, FaFile, FaFolder, FaImage } from "react-icons/fa";

const ChatGPT = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div
        id="chatBody"
        className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-800 relative"
      >
        <div id="toastContainer" className="absolute top-3 right-5"></div>
        {/* Messages will appear here */}
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
