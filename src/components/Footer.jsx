import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold text-md">
              HS
            </div>
            <div className="ml-3 text-left">
              <h3 className="text-md font-semibold">HealthSphere</h3>
              <p className="text-sm">&copy; 2024 HealthShere. All rights reserved.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-sm">
            <a href="/" className="hover:underline mb-2 md:mb-0 md:mr-4">Home</a>
            <a href="/about" className="hover:underline mb-2 md:mb-0 md:mr-4">About Us</a>
            <a href="/contact" className="hover:underline mb-2 md:mb-0 md:mr-4">Contact</a>
            <a href="/privacy" className="hover:underline mb-2 md:mb-0 md:mr-4">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <p>Contact us:</p>
          <p>Phone: +254 703881999</p>
          <p>Email: georginakabasa@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
