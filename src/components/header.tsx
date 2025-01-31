import React from "react";
import { useInView } from "react-intersection-observer";

const Header: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <header ref={ref} className={`hero ${inView ? "visible" : ""}`}>
      <div className="container">
        <h1>Your Name</h1>
        <p className="tagline">Web Developer | Designer | Creative Thinker</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;
