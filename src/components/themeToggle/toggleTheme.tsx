import React, { useState, useEffect } from "react";

interface ThemeToggleProps {
  onToggle: (isDarkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    onToggle(!isDarkMode); // Notify parent component of theme change
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  //   useEffect(() => {
  //     const savedTheme = localStorage.getItem("theme");
  //     if (savedTheme === "dark") {
  //       setIsDarkMode(true);
  //     }
  //   }, []);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
