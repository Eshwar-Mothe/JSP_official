import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faContactBook,
  faHome,
  faInfoCircle,
  faLifeRing,
  faNewspaper,
  faUserCog,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import logo from '/Logo.png';

const Header = ({ searchBar }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const shouldApplyLightTheme = !isHome || isScrolled;

  const navLinkStyle = {
    color: shouldApplyLightTheme ? 'black' : 'white',
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${shouldApplyLightTheme ? 'bg-light' : ''}`}
      style={shouldApplyLightTheme ? { zIndex: '999' } : { position: 'fixed', zIndex: '999' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" id="logo" to="/">
          <img src={logo} alt="JanaSena" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse w-100 justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 text-center" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={navLinkStyle}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/district" style={navLinkStyle}>
                <FontAwesomeIcon icon={faUserFriends} /> Joinings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" style={navLinkStyle}>
                <FontAwesomeIcon icon={faLifeRing} /> Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" style={navLinkStyle}>
                <FontAwesomeIcon icon={faUserCog} /> Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={navLinkStyle}>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news" style={navLinkStyle}>
                <FontAwesomeIcon icon={faNewspaper} /> News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={navLinkStyle}>
                <FontAwesomeIcon icon={faContactBook} /> Contact
              </Link>
            </li>
          </ul>

          {searchBar && (
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
