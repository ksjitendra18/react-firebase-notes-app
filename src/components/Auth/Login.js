import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Auth = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(true);
        // ..
      });
  };
  return (
    <>
      <Navbar />
      <section id="authsignup">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="emailfield"
              required
              name="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="passwordfield"
              required
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-signup-btn">Log In</button>
            {error && (
              <span className="login-form-error">Wrong email or password</span>
            )}
            <p className="form-para">
              Not Registered?{" "}
              <Link to="/auth/signup">
                <u>
                  <strong>Sign Up</strong>
                </u>
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Auth;
