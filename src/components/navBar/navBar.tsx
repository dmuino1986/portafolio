import React from "react";
import "./navBar.css";
import ThemeToggle from "../themeToggle/toggleTheme";

interface NavbarProps {
  visibleCss?: string; // Add className prop
  onThemeToggle: (isDarkMode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ visibleCss, onThemeToggle }) => {
  return (
    <nav className={`navbar ${visibleCss || ""}`}>
      {" "}
      {/* Apply className */}
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <ThemeToggle onToggle={onThemeToggle} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
