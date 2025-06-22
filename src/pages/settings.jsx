
import Sidebar from "../components/Sidebar.jsx";
import { Sun, Moon, User } from "lucide-react";
import { useEffect, useState } from "react";
import React from 'react';

function Settings() {


  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme ? storedTheme === "dark" : prefersDark;

  const [darkMode, setDarkmode] = useState(initialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkmode(!darkMode);
  };
  return (
    <div className="flex bg-slate-100 text-black dark:text-white dark:bg-slate-700">
      <Sidebar />
      <main className="flex-1 pt-5">
        <h1 className="md:text-3xl font-bold text-2xl border-b-2 pl-5">Chats</h1>

        {/* Chats layout */}
        <div className="m-10">
        <h1>Settings</h1>
        </div>

      </main>


      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 p-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
    </div>
  )
}  

export default Settings;