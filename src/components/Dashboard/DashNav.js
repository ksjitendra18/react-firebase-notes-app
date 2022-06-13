import { Link, useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
const DashNav = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

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
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-branding">
          <h1>MyNotesApp</h1>
        </Link>
        <div className="flex">
          <ul className={navMenuClasses}>
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/notes"   className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }>
                Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/links"   className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }>
                Links
              </NavLink>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="main-cta logout-btn"
                onClick={logoutHandler}
              >
                <Link to="/">Logout</Link>
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
  );
};

export default DashNav;
