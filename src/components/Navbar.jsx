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
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
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
