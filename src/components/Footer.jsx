import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center p-4 mt-8 shadow-inner">
      <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Kapil. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
