export default function Navigation() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        Samuel<span>.</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li  className="nav-contact-btn">
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <button className="mobile-menu-btn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
