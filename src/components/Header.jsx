import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F7F7FF] p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white">
        <span className="grow text-violet-800 text-[35px] font-bold">Talent</span>
        <span className="grow text-black text-[35px] font-bold">Finder</span>
        </div>

        {/* Hamburger Menu for Mobile and Tablet */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu for Desktop */}
        <ul className="hidden md:flex gap-x-10 space-x-4">
          <li><a href="#" className="text-black hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Home</a></li>
          <li><a href="#" className="text-black hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">About</a></li>
          <li><a href="#" className="text-black hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Services</a></li>
          <li><a href="#" className="text-black hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Products</a></li>
          <li><a href="#" className="text-black hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Blog</a></li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="text-white whitespace-nowrap bg-violet-800 rounded-xl max-md:px-5 max-md:mt-10 px-8 py-4 mb-5 hover:bg-violet-200 hover:text-violet-800 cursor-pointer transition-all transition-duration: 400ms;">Contact Us</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-15 right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
        <ul className="flex flex-col items-center gap-y-20 space-y-4 py-2">
          <li className='mt-20'><a href="#" className="text-black text-[25px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Home</a></li>
          <li className='mt-20'><a href="#" className="text-black text-[25px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">About</a></li>
          <li className='mt-20'><a href="#" className="text-black text-[25px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Services</a></li>
          <li className='mt-20'><a href="#" className="text-black text-[25px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Products</a></li>
          <li className='mt-20'><a href="#" className="text-black text-[25px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800">Blog</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
