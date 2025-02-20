import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./navBar.css";

const DesktopNavBar = () => {
  const isVisible = useSelector((state: RootState) => state.navbar.isVisible);
  return (
    <nav className={`navbar desktop-nav ${isVisible ? "visible" : ""}`}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default DesktopNavBar;
