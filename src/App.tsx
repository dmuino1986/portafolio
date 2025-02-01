import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

const App: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Store the current value of projectsRef in a variable
    const currentRef = projectsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle navbar visibility based on whether Projects section is in view
        setIsNavbarVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 5% of the Projects section is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleThemeToggle = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <div>
      <Header isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
      <Navbar
        visibleCss={isNavbarVisible ? "visible" : ""}
        onThemeToggle={handleThemeToggle}
      />
      <Projects inView={isNavbarVisible} ref={projectsRef} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
