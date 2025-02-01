import React from "react";
import "./navBar.css";

interface NavbarProps {
  visibleCss?: string; // Add className prop
}

const Navbar: React.FC<NavbarProps> = ({ visibleCss }) => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
