"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        Samuel<span>.</span>
      </a>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#works" onClick={() => setIsOpen(false)}>
            Works
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>
            Testimonial
          </a>
        </li>
        <li  className="nav-contact-btn">
          <a
            href="#contact"
           
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
