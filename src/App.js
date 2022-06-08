import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import About from "./pages/About";
import Features from "./pages/Features";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
