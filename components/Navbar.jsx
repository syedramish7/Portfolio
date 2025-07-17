"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "about" },
        { id: "skills" },
        { id: "contact" },
      ];
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="https://www.instagram.com/syed._.ramish/" target="_blank">
          Ramish
        </Link>
      </div>
      <nav>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
        <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
      </nav>
      <a href="" className="cta-btn">Reload</a>
    </div>
  );
}

export default Navbar;