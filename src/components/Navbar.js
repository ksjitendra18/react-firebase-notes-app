const Navbar = () => {
  return (
    <header>
      <nav class="navbar">
        <a href="/" class="nav-branding">
          <h1>MyNotesApp</h1>
        </a>
        <div class="flex">
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="home.html" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/pricing" class="nav-link">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link">
                About
              </a>
            </li>

            <li class="nav-item">
              <p class="login center"> Login</p>
            </li>

            <li class="nav-item">
              <button type="button" class="main-cta signup-btn">
                Signup
              </button>
            </li>
          </ul>
        </div>

        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
