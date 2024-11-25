import React from 'react';
import logo from '../images/Main Logo small.png';


function Navbar() {
  const homepageUrl = process.env.REACT_APP_HOMEPAGE_URL || '/';
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo section */}
        <a href={homepageUrl}>
          <img src={logo} alt="Main Logo" className="h-40 w-auto" />
        </a>

        {/* Links section */}
        <ul className="flex space-x-8 text-white text-lg">
          <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
