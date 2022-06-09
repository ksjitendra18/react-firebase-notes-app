import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
const DashNav = () => {
  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

const logoutHandler = ()=>{
  dispatch({type: 'LOGOUT'})
  navigate('/')
}

  return (
    <header>
      <nav className="navbar">
        <Link to="/dashboard" className="nav-branding">
          <h1>MyNotesApp</h1>
        </Link>
        <div className="flex">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notes" className="nav-link">
                Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/links" className="nav-link">
                Links
              </Link>
            </li>

            <li className="nav-item">
              <button type="button" className="main-cta logout-btn" onClick={logoutHandler}>
                <Link to="/">Logout</Link>
              </button>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default DashNav;
