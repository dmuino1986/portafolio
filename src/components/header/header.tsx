import React from "react";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine"; // Correct import for Engine type
import { loadFull } from "tsparticles";
import "./header.css";
import ThemeToggle from "../themeToggle/toggleTheme";

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: (isDarkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onThemeToggle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine); // Load the full tsparticles bundle
  };

  const particleOptions: RecursivePartial<IOptions> = {
    background: {
      // image: "url('https://particles.js.org/images/background3.jpg')",
      color: {
        value: isDarkMode ? "#121212" : "#ffffff",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDarkMode ? "#bb86fc" : "#007bff", // Dynamic particle color
      },
      links: {
        color: isDarkMode ? "#03dac6" : "#6c757d", // Dynamic link color
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <header ref={ref} className={`hero ${inView ? "visible" : ""}`}>
      {/* Particle.js Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
      <div className="container">
        <h1>Your Name</h1>
        <p className="tagline">Web Developer | Designer | Creative Thinker</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
        <ThemeToggle onToggle={onThemeToggle} />
      </div>
    </header>
  );
};

export default Header;
