import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

 
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const userIsLoggedIn = currentUser !== null;
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
                <Link to="/" className="nav-link">
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
              {userIsLoggedIn && (
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              )}

           {!userIsLoggedIn &&   <li className="nav-item">
                <Link className="login center" to="/auth/login">
                  Login
                </Link>
              </li>}

            {!userIsLoggedIn &&  <li className="nav-item">
                <Link className="signup center" to="/auth/signup">
                  <button type="button" className="main-cta signup-btn">
                    Signup
                  </button>
                </Link>
              </li>}
             {userIsLoggedIn && <li className="nav-item">
                <Link className="signup center" to="/auth/signup">
                  <button type="button" className="main-cta signup-btn" onClick={logoutHandler}>
                    Logout
                  </button>
                </Link>
              </li>}
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
