// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-emerald-800 font-bold mb-2 md:mb-0">Tax Tally</div>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Tax Tally. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://kaizenapps.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <p>Powered by <strong className="font-bold">Kaizen Apps</strong></p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;