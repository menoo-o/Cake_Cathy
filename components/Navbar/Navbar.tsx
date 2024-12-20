'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import './nav.css';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link href="/" className="navbar-logo">
          <Image 
            src='/logo2.png'
            alt='logo'
            width={170}
            height={140}
            className="logo-image"
          />          
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
          <Link href="/shop" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
        </li>
        <li className="navbar-item">
          <Link href="/gallery" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
        <li className="navbar-item">
          <Link href="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
