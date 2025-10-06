import { useState } from "react";
import { Link } from "react-router-dom";
import '../css/navigation.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar anim1">
      <Link id="logo" to="/"><span style={{color: "#cc7a0eff"}}>Paragon</span> <span style={{color:"#ffffff"}}>Robotics</span></Link>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link className="nav-link nav-link-start" onClick={() => setOpen(false)} to="/about">About Us</Link>
        <Link className="nav-link" onClick={() => setOpen(false)} to="/projects">Projects</Link>
        <Link className="nav-link nav-link-end" onClick={() => setOpen(false)} to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}