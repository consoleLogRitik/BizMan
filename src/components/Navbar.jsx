import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hide the navbar if the current path is /dashboard
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <nav className="bg-gray-600  py-4 px-6 md:px-12 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">BizMan</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`hidden lg:flex lg:items-center lg:gap-8`}>
          <ul className="flex flex-row items-center gap-8">
            <li><Link to="/" className="text-white hover:text-gray-400 transition duration-200">Home</Link></li>
            <li><Link to="/login" className="text-white hover:text-gray-400 transition duration-200">Log In</Link></li>
            <li><Link to="/signup" className="text-white hover:text-gray-400 transition duration-200">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black opacity-90 mt-2 rounded-lg shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            <li><Link to="/" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/login" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>Log In</Link></li>
            <li><Link to="/signup" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>Sign Up</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;