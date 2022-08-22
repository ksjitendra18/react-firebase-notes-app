import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import About from "./pages/About";
import Features from "./pages/Features";
import Dashboard from "./components/Dashboard/Dashboard";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Notes from "./components/Notes/Notes";

function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser !== null);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth/login" />;
  };
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<About />} />

        <Route path="features" element={<Features />} />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="Notes"
          element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          }
        />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
