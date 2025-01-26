import {
  ERROR,
  notify,
  SUCCESS,
} from "@/utility/interfaces/helper/Toast/Toast";
import React from "react";
import { FC } from "react";
import "tailwindcss/tailwind.css";

interface ChatReplyProps {
  content: string;
  type: "send" | "response";
}

const ChatReply: FC<ChatReplyProps> = ({ content, type }) => {
  const parseContent = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactElement[] = [];
    let isCodeBlock = false;
    let codeLines: string[] = [];

    const copyToClipboard = (code: string) => {
      navigator.clipboard.writeText(code).then(
        () => {
          notify("Code copied to clipboard!", SUCCESS, 1000);
        },
        (err) => {
          notify("Failed to copy code to clipboard", ERROR);
          console.error("Could not copy text: ", err);
        }
      );
    };

    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        elements.push(
          <h1
            key={index}
            className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100"
          >
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={index}
            className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200"
          >
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={index}
            className="text-lg font-medium mb-1 text-gray-900 dark:text-gray-300"
          >
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <ul
            key={index}
            className="list-disc pl-6 text-gray-900 dark:text-gray-300"
          >
            <li>{line.slice(2)}</li>
          </ul>
        );
      } else if (line.startsWith("1. ")) {
        elements.push(
          <ol
            key={index}
            className="list-decimal pl-6 text-gray-900 dark:text-gray-300"
          >
            <li>{line.slice(3)}</li>
          </ol>
        );
      } else if (line.startsWith("> ")) {
        elements.push(
          <blockquote
            key={index}
            className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 mb-2"
          >
            {line.slice(2)}
          </blockquote>
        );
      } else if (line.startsWith("```") && isCodeBlock) {
        // End of a code block
        const codeContent = codeLines.join("\n");
        elements.push(
          <pre
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto mb-4 relative"
          >
            <button
              className="bg-slate-700 sticky top-5 left-full p-1 rounded text-slate-100 copy-button"
              onClick={() => copyToClipboard(codeContent)}
            >
              copy code
            </button>
            <code className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {codeContent}
            </code>
          </pre>
        );
        codeLines = [];
        isCodeBlock = false;
      } else if (line.startsWith("```") && !isCodeBlock) {
        // Start of a code block
        isCodeBlock = true;
      } else if (isCodeBlock) {
        codeLines.push(line);
      } else {
        elements.push(
          <p key={index} className="mb-2 text-gray-700 dark:text-gray-300">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div
      className={`
        shadow-md rounded-lg p-4 w-11/12 
        ${
          type === "send"
            ? "bg-gray-300 dark:bg-gray-500  ml-auto"
            : "bg-white dark:bg-gray-900 text-left mr-auto"
        }
      `}
    >
      {parseContent(content)}
    </div>
  );
};

export default ChatReply;
