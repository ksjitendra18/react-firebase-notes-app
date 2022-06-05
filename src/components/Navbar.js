const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="nav-branding">
          <h1>MyNotesApp</h1>
        </a>
        <div className="flex">
          <ul className="nav-menu">
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

        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
