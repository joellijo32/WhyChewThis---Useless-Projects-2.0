import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          WhyChewThis
        </Link>

        {/* Hamburger Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/calculator" 
            className={`nav-link ${location.pathname === '/calculator' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Calculator
          </Link>
          <Link 
            to="/diet-planner" 
            className={`nav-link ${location.pathname === '/diet-planner' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Diet Planner
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
