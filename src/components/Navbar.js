import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navIsClose, setNavIsClose] = useState(true);

  const hamburgerOnClick = () => {
    setNavIsOpen((prev) => !prev);
    setNavIsClose((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavIsOpen((prev) => !prev);
    setNavIsClose((prev) => !prev);
  };

  let hamburgerClasses;
  let navMenuClasses;

  if (navIsClose) {
    hamburgerClasses = "hamburger";
    navMenuClasses = "nav-menu";
  } else if (navIsOpen) {
    hamburgerClasses = "hamburger active";
    navMenuClasses = "nav-menu active";
  }

  return (
    <>
      <header>
        <nav className="navbar">
          {/* <a href="/" className="nav-branding"> */}
          <Link to="/" className="nav-branding">
            <h1>MyNotesApp</h1>
          </Link>

          <div className="flex">
            <ul className={navMenuClasses}>
              <li className="nav-item" onClick={closeNavbar}>
                <Link to='/' className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="login center" to="/auth/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="signup center" to="/auth/signup">
                  <button type="button" className="main-cta signup-btn">
                    Signup
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div className={hamburgerClasses} onClick={hamburgerOnClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
