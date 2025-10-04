import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar anim1">
      <a id="logo" href="/">Paragon Robotics</a>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a className="nav-link" href="#">About Us</a>
        <a className="nav-link" href="#">Projects</a>
        <a className="nav-link" href="#">Contact Us</a>
        <a className="nav-link" href="#">Donate</a>
      </div>
    </nav>
  );
}