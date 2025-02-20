import React, { useEffect, useRef } from "react";
import Navbar from "./components/navBar/navBar";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./App.css";
import { useDispatch } from "react-redux";
import { hideNavbar, showNavbar } from "./store/navBarSlice";
import About from "./components/about/about";

const App: React.FC = () => {
  // const isNavbarVisible = useSelector((state:RootState)=>state.navbar.isVisible);
  const dispatch = useDispatch();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(hideNavbar()); // Hide navbar when header is in view
        } else {
          dispatch(showNavbar()); // Show navbar when header is out of view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the header is visible
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Header ref={headerRef} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
