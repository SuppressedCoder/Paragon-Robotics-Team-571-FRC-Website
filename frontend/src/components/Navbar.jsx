import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar anim1">
      <Link id="logo" to="/">Paragon Robotics</Link>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/contact">Contact Us</Link>
        <Link className="nav-link" to="/donate">Donate</Link>
      </div>
    </nav>
  );
}