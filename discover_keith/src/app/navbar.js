'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="bg-gray-900 text-white shadow-md">
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

