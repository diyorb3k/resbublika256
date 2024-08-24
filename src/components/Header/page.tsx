"use client";
import { FaMoon, FaSun } from "react-icons/fa"; 
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div className=" name  container  body.dark:bg-[#222] mx-auto fixed z-[10000px] py-[23px] shadow-lg">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="font-nunito text-2xl leading-[32.74px] font-extrabold">
          Where in the world?
        </h2>
        <button onClick={toggleDarkMode} className="flex items-center gap-1 rounded">
          {isDarkMode ? <FaSun /> : <FaMoon />} 
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
