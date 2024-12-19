'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import './nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Logo
        </Link>
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link href="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li className="navbar-item">
          <Link href="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
