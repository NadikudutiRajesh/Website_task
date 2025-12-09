import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Bar - Hide on Mobile */}
      <div className="top-bar d-none d-lg-block">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span>✉️ krivamdigitechamail.com</span>
          </div>
          <div className="top-bar-center">
            <span>Reserve Now & Get 50% Off On Next Vacation!</span>
          </div>
          <div className="top-bar-right">
            <span>📞 +91-8454343849</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" onClick={closeMenu}>KRIVAM</Link>
          </div>

          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item mx-2">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : 'content'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : 'content'}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2" >
              <Link
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : 'content'}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/packages"
                className={`nav-link ${isActive('/packages') ? 'active' : 'content'}`}
                onClick={closeMenu}
              >
                Packages
              </Link>
            </li>
            <li className="nav-item d-lg-none mx-2">
              <Link to="/contact" className="nav-link content" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
          <Link to="/contact" className="btn btn-contact d-none d-lg-block">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
