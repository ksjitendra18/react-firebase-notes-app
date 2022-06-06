import { useState } from "react";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navIsClose, setNavIsClose] = useState(true);

  const hamburgerOnClick = () => {
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
          <a href="/" className="nav-branding">
            <h1>MyNotesApp</h1>
          </a>
          <div className="flex">
            <ul className={navMenuClasses}>
              <li className="nav-item">
                <a href="home.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>

              <li className="nav-item">
                <p className="login center"> Login</p>
              </li>

              <li className="nav-item">
                <button type="button" className="main-cta signup-btn">
                  Signup
                </button>
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
