import React, { forwardRef, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { hideNavbar } from '../../store/navBarSlice';
import ThemeToggle from '../themeToggle/toggleTheme';
import './header.css';

interface HeaderProps {
  ref?: React.Ref<HTMLDivElement>;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  // Hide navbar when in the header section
  useEffect(() => {
    dispatch(hideNavbar());
  }, [dispatch]);

  const particleOptions: RecursivePartial<IOptions> = {
    // background: {
    //  image: "url('https://particles.js.org/images/background3.jpg')",
    //   // color: {
    //   //   value: isDarkMode ? "#121212" : "#ffffff",
    //   // },
    // },
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
    <header className="hero" ref={ref}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <div className="container">
        <h1>DARIEN MARTIN</h1>
        <p className="tagline">Full Stack Web Developer </p>
        <a href="#projects" className="btn">View My Work</a>
        <i className="material-icons arrow-button">arrow_downward</i>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;