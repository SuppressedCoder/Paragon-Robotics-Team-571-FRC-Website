import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/home.jsx";
import About from "./components/pages/about-us.jsx";
import Contact from "./components/pages/contact-us.jsx";
import Projects from "./components/pages/projects.jsx";
import Donate from "./components/pages/donate.jsx";

export default function App() {
  return (
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
  );
}