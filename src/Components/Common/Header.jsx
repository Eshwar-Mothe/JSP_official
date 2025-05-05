import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{ zIndex: '999' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" id='logo' to="/">
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
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 text-center"
            style={{ fontWeight: 'bold', fontSize: '18px' }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/signup">
                <FontAwesomeIcon icon={faUserFriends} /> Joinings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                <FontAwesomeIcon icon={faLifeRing} /> Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <FontAwesomeIcon icon={faUserCog} /> Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/news">
                <FontAwesomeIcon icon={faNewspaper} /> News
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <FontAwesomeIcon icon={faContactBook} /> Contact
              </Link>
            </li>
          </ul>

          {searchBar && (
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
