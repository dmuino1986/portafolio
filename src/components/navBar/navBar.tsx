import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './navBar.css';

const Navbar: React.FC = () => {
  const isVisible = useSelector((state: RootState) => state.navbar.isVisible);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;