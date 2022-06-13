import pinimg from "../assets/pin.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const HomePage = () => {

  const { currentUser } = useContext(AuthContext);

  const userIsLoggedIn = currentUser !== null;


  // passing dynamic link to "Try for free button"
  const linkTryForFree = userIsLoggedIn ? '/dashboard' : '/auth/signup';
  console.log(userIsLoggedIn);
  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="leftside">
          <h2 className="main-text">
            One docs app for all your <br />
            notes, docs and all your <br />
            important links
          </h2>
          <h2 className="mobile-main-text hidden">
            One docs app for all your notes, docs and all your important links
          </h2>
          <p>
            One solution for storing all of your docs, notes and links for free.
          </p>

          <div className="main-section__cta">
            <button className="btn-try">
              <Link to={linkTryForFree}>Try For Free</Link>
            </button>
           
            <button className="btn-learnmore">
              <Link to="/features">Learn More</Link>
            </button>
          </div>
        </div>
        <div className="rightside">
          <img src={pinimg} width="350px" alt="" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
