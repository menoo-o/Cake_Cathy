'use client'

import './footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Pink Cake Shop in Aigburth, baking from scratch and spreading love!
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: cbcakeparlour@gmail.com</p>
          <p>Phone: +44 123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{' '}
            |{' '}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Catherine Braidy. All rights reserved.</p>
      </div>
    </footer>
  );
}
