import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-400 py-6 ">
            <div className="container mx-auto flex justify-center text-white">
            <ul className="hidden md:flex space-x-4 bg-brown-800">
                <li>
                    <Link to ="/login" className="text-white hover:text-brown-300">Login</Link>
                </li>
                <li>
                    <Link to="/register" className="text-white hover:text-brown-300">Register</Link>
                </li>
               
                {/* <li>
                    <Link to="/password-reset" className="text-white hover:text-brown-300">PasswordReset</Link>
                </li> */}
                <li>
                    <Link to="/home" className='text-white hover:text-brown-300'>Home</Link>
                </li>
                <li>
                    <Link to ="/booking" className="text-white hover:text-brown-300">Booking</Link>
                </li>
                <li>
                    <Link to ="/prescription" className="text-white hover:text-brown-300">Prescription</Link>
                </li>
                <li>
                  <Link to ="/contact" className="text-white hover:text-brown-300">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;