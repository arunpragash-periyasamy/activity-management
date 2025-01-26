'use client';
import { useState, useEffect } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Initialize dark mode based on system preference or user choice
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg transition-colors">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 dark:text-gray-300" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              className="text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <button
            onClick={toggleForm}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 text-sm"
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
