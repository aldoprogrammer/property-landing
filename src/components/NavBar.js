import React from 'react'
import Logo from '../assets/favicon-16x16.png';
import './NavBar.css';


const NavBar = () => {
  return (
    <div>
      <div class="bg-white-900 text-black-400 p-4">
    <div class="container mx-auto flex justify-between items-center">
        
        
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        
        <nav class="space-x-4">
            <a href="#" class="hover:text-gray-400">Be a leader</a>
            <a href="#" class="hover:text-gray-400">Be a Borrower</a>
            <a href="#" class="hover:text-gray-400">Available Loans</a>
            <a href="#" class="hover:text-gray-400">Contact Us</a>
            <a href="#" class="hover:text-gray-400">Login</a>
            <button>Register</button>
        </nav>
    </div>
</div>

    </div>
  )
}

export default NavBar
