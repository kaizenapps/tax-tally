// components/Footer.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-white shadow py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Company Info & Social */}
          <div className="flex flex-col space-y-4 items-center text-center md:items-start md:text-left">
            <div className="text-emerald-800 font-bold text-xl mb-4">Tax Tally</div>
            <p className="text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Tax Tally. All rights reserved.
            </p>
            
            
            {/* Social Media Links */}
            <div className="mt-4">
              <p className="text-gray-700 font-medium mb-3"><b>Follow us</b></p>
              <div className="flex space-x-3 justify-center md:justify-start">
              <SocialIcon url="https://www.kaizenapps.com/" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://www.youtube.com/@KaizenAppsAgency" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://github.com/kaizenapps" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://www.linkedin.com/company/kaizen-applications/" style={{ height: 35, width: 35 }} />
              </div>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="flex flex-col space-y-4 items-center md:items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <a href="/" className="text-gray-600 hover:text-[#0088cc]">Home</a>
            <a href="/pricing" className="text-gray-600 hover:text-[#0088cc]">Pricing</a>
            <a href="/contact" className="text-gray-600 hover:text-[#0088cc]">Contact</a>
          </div>
          
          {/* Right Column - Location */}
          <div className="flex flex-col space-y-4 items-center text-center md:items-end md:text-right">
            <h3 className="text-lg font-semibold mb-4">About Tax-Tally</h3>
            <a href="/" className="text-gray-600 hover:text-[#0088cc]">Cookies Policy</a>
            <a href="/" className="text-gray-600 hover:text-[#0088cc]">Privacy Policy</a>
            <a href="/" className="text-gray-600 hover:text-[#0088cc]">Terms of Use</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="text-sm text-gray-500 text-center">
            <a href="https://kaizenapps.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              Powered by <strong className="font-bold">Kaizen Apps</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;