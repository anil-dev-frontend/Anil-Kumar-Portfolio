import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface MenuItem {
  id: string;
  label: string;
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detect scroll and change navbar background
useEffect(() =>{
  const handelScroll = () =>{
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handelScroll);
  return () =>{
    window.removeEventListener("scroll", handelScroll);
  }

},[])

// Smooth scroll function
  const handleMenuItemClick = (sectionId: string) =>{
    setActiveSection(sectionId);
    setIsOpen(false);
  }

  const menuItems: MenuItem[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];


  return (
    <div className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className='text-white py-5 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-lg font-semibold cursor-poiner'>
          <span className='text-[#8254ec]'>&lt;</span>
          <span className='text-white'>Anil</span>
          <span className='text-[#8254ec]'>/</span>
           <span className='text-white'>Kumar</span>
           <span className='text-[#8254ec]'>&gt;</span>
        </div>
        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
       {menuItems.map((item) =>(
        <li  key={item.id} className={`cursor-pointer hover:text-[#8254ec] ${activeSection === item.id? 'text-[#8254ec]' : ''}`}>
          <button onClick={() => handleMenuItemClick(item.id)}>
            {item.label}
          </button>
        </li>

       ))}
        </ul>

           {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/anil-dev-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anil-kumar-8bb69413a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>


      </div>

    </div>
  )
}
