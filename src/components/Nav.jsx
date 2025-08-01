import { useState } from 'react';
import { useCursorHover } from '../hooks/useCursorHover';

const Nav = () => {
  const { addCursorHover, removeCursorHover } = useCursorHover();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="my-6 justify-center lg:my-12 mx-2 sm:mx-4 lg:mx-auto w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] lg:w-full max-w-[1280px] flex flex-col lg:flex-row lg:items-center min-h-20 lg:h-28 border border-white-100 rounded-[24px] overflow-hidden">
      {/* Logo Section */}
      <div className="w-full lg:w-[194px] h-16 lg:h-28 flex items-center justify-between lg:justify-center px-4 lg:px-0 lg:border-r border-white-100">
        <img src="assets/logo.png" alt='logo' className="h-8 lg:h-auto" />
        
        {/* Mobile hamburger menu */}
        <button 
          className="lg:hidden p-2 transition-transform duration-200 hover:scale-110 flex flex-col items-center justify-center w-8 h-8"
          onClick={toggleMobileMenu}
          onMouseEnter={addCursorHover} 
          onMouseLeave={removeCursorHover}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Navigation Content */}
      <div className={`flex flex-col w-full lg:w-[1086px] transition-all duration-300 ease-in-out lg:transition-none ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:flex'
      } overflow-hidden lg:overflow-visible`}>
        
        {/* Top Navigation Row */}
        <div className="flex flex-col lg:flex-row lg:h-14 border-b border-white-100 lg:border-b">
          
          {/* Main Navigation Links */}
          <div className="flex flex-col lg:flex-row w-full lg:w-[854px] lg:justify-between lg:px-60 lg:items-center py-2 lg:py-0">
            <a 
              onMouseEnter={addCursorHover} 
              onMouseLeave={removeCursorHover} 
              href="#projects"
              className="px-4 lg:px-0 py-3 lg:py-0 hover:text-black hover:bg-gray-50 lg:hover:bg-transparent transition-colors duration-200 border-b border-gray-100 lg:border-none last:border-none"
            >
              Project
            </a>
            <a 
              onMouseEnter={addCursorHover} 
              onMouseLeave={removeCursorHover} 
              href="#about"
              className="px-4 lg:px-0 py-3 lg:py-0 hover:text-black hover:bg-gray-50 lg:hover:bg-transparent transition-colors duration-200 border-b border-gray-100 lg:border-none last:border-none"
            >
              About
            </a>
            <a 
              onMouseEnter={addCursorHover} 
              onMouseLeave={removeCursorHover} 
              href="#team"
              className="px-4 lg:px-0 py-3 lg:py-0 hover:text-black hover:bg-gray-50 lg:hover:bg-transparent transition-colors duration-200 border-b border-gray-100 lg:border-none last:border-none"
            >
              Team
            </a>
            <a 
              onMouseEnter={addCursorHover} 
              onMouseLeave={removeCursorHover} 
              href="#CTA"
              className="px-4 lg:px-0 py-3 lg:py-0 hover:text-black hover:bg-gray-50 lg:hover:bg-transparent transition-colors duration-200 border-b border-gray-100 lg:border-none last:border-none"
            >
              Contact
            </a>
          </div>
          
          {/* Desktop Hamburger Icon */}
          <div className="hidden lg:flex w-[232px] border-l border-white-100 items-center justify-center">
            <img src="assets/hamburger-icon.png" alt='icon' />
          </div>
        </div>

        {/* Bottom Navigation Row */}
        <div className="flex flex-col lg:flex-row lg:h-14">
          
          {/* Services Link */}
          <div className="flex w-full hover:text-black lg:w-[543px] gap-1.5 lg:border-r justify-start lg:justify-center items-center px-4 lg:px-0 py-4 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent transition-colors duration-200 border-b border-gray-100 lg:border-none">
            <img src='assets/pencil-icon.png' alt='icon' className="w-4 h-4" />
            <a 
              onMouseEnter={addCursorHover} 
              onMouseLeave={removeCursorHover} 
              href="#services"
            >
              Services
            </a>
          </div>
          
          {/* Get in Touch Link */}
          <div className="flex hover:text-black w-full lg:w-[543px] gap-1.5 justify-start lg:justify-center items-center px-4 lg:px-0 py-4 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent transition-colors duration-200">
            <img src="assets/calender-icon.png" alt='icon' className="w-4 h-4" />
            <a 
              onMouseEnter={addCursorHover} 
              onMouseLeave={removeCursorHover} 
              href="#CTA"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;