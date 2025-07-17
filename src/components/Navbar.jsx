import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">Kapil</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 dark:text-gray-200 hover:underline">About</Link></li>
          <li><Link to="/projects" className="text-gray-700 dark:text-gray-200 hover:underline">Projects</Link></li>
          <li><Link to="/resume" className="text-gray-700 dark:text-gray-200 hover:underline">Resume</Link></li>
          <li><Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
