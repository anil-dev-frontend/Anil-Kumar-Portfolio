

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import type { JSX } from "react/jsx-runtime";
interface NavItem {
  name: string;
  id: string;
}
interface SocialItem {
  icon: JSX.Element;
  link: string;
}

export default function Footer() {
  // Smooth scroll function
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems: NavItem[] = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  const socialItems: SocialItem[] = [
    { icon: <FaFacebook />, link: "" },
    { icon: <FaTwitter />, link: "" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anil-kumar-8bb69413a" },
    { icon: <FaInstagram />, link: "" },
    { icon: <FaYoutube />, link: "" },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Anil Kumar</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Anil Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}