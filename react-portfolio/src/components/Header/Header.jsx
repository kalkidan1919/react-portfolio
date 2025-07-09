import React from 'react'

function Header() {
  return (
    <div>
      <header className="bg-dark fixed-top" id="mainNav">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <a className="navbar-brand" href="#page-top">
            Kalkidan Kidanemariam
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#ABOUT">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#PROJECT">
                  PROJECT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#CERTIFICATES">
                  CERTIFICATES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#contactform">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header
