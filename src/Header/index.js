import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './index.css'

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/', { replace: true });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/home" className="logo-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="logout-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-items">
            <li className="mobile-nav-item">
              <Link to="/home" className="mobile-nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/jobs" className="mobile-nav-link" onClick={closeMobileMenu}>
                Jobs
              </Link>
            </li>
            <li className="mobile-nav-item">
              <button
                type="button"
                className="mobile-logout-btn"
                onClick={() => {
                  onClickLogout();
                  closeMobileMenu();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  )
}

export default Header
