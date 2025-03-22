'use client'

import { useState } from "react";
import Link from "next/link"; 
import { Menu, X} from 'lucide-react';

// React hooks allow you to make your React components stateful
// In the past they would have to make the component, and then extend it in a class
// But now you can skip that part and just add state to your component,
// by using useState from react
// Reminder that in JavaScript () => {} is a lambda function
const Navbar = () => {
    // isOpen is a boolean variable controlling whether the navbar is open or not
    // setIsOpen changes that isOpen value
    // useState is the default value of isOpen
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="flex justify-center bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
  
          {/* Navigation Links */}
          <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
            <Link href="/hobbies" className="hover:text-gray-400">
              Hobbies
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
};
export default Navbar; // Must export to use in app
