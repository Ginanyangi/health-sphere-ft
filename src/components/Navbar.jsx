import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <nav className="bg-blue-500 py-6">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-center">
            <div className="text-2xl font-bold">HS</div>
            <ul className="hidden md:flex space-x-4 ml-10">
              <li>
                <Link to="/login" className="text-white hover:text-blue-300">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-white hover:text-blue-300">Register</Link>
              </li>
              <li>
                <Link to="/home" className="text-white hover:text-blue-300">Home</Link>
              </li>
              <li>
                <Link to="/booking" className="text-white hover:text-blue-300">Booking</Link>
              </li>
              <li>
                <Link to="/prescription" className="text-white hover:text-blue-300">Prescription</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-white hover:text-blue-300">Facilities</Link>
              </li>
            </ul>
          </div>
          <button 
            onClick={toggleTheme} 
            className="text-white hover:text-blue-300 p-2 rounded-md"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    );
  };
  
export default Navbar;