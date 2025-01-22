import { Fragment, useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";

const PUBLIC_URL = "http://localhost:3000";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");
  const [description, setDescription] = useState("");

  const handleEditorChange = (content: string) => {
    setDescription(content);
  };

  const handleSubmit = () => {
    const taskData = {
      title,
      description,
      priority,
      date,
      comments,
    };
    console.log("Task Data:", taskData);
    onClose();
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </TransitionChild>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-lg rounded-xl">
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Add Task
                  </DialogTitle>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={onClose}
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter task title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <Editor
                      tinymceScriptSrc={`${PUBLIC_URL}/tinymce/tinymce.min.js`}
                      initialValue="<p>Start editing...</p>"
                      init={{
                        height: 250,
                        menubar: false,
                        plugins: [
                          "advlist autolink lists link image charmap preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code wordcount",
                        ],
                        toolbar:
                          "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color: #333 }",
                        skin_url: `${PUBLIC_URL}/tinymce/skins/ui/oxide-dark`,
                      }}
                      onEditorChange={handleEditorChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                      <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Comments</label>
                    <textarea
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      className="w-full mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                      placeholder="Enter additional comments"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleSubmit}
                  >
                    Save Task
                  </button>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddTaskModal;
