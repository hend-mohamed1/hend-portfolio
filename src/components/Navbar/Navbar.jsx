import "./Navbar.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={scroll ? "navbar active" : "navbar"}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="logo">
  {"<"}<span>HM</span>{"/>"}
</h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>
<div className="socials">
  <a
    href="https://github.com/hend-mohamed1"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/hend-mohamed-baa50338a/"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>
</div>

<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
    </motion.nav>
  );
}