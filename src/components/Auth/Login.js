import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <>
      <Navbar />
      <section id="authsignup">
        <div className="form">
          <h2>Login</h2>
          <form>
            {/* <label htmlFor="name">Name</label>
                  <input type="text" id="namefield" required name="name" placeholder="Your Name"/> */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="emailfield"
              required
              name="email"
              placeholder="Your Email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="passwordfield"
              required
              name="password"
              placeholder="Password"
            />
            <button className="form-signup-btn">Log In</button>

            <p className="form-para">
              Not Registered? <Link to="/auth/signup"><u><strong>Sign Up</strong></u></Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Auth;
