import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useCursorHover } from "../hooks/useCursorHover";

const Footer = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { addCursorHover, removeCursorHover } = useCursorHover();
  
  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref} 
      className={`my-12 lg:my-20 mx-2 sm:mx-4 lg:mx-auto w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] lg:w-full max-w-[1280px] border border-white-100 rounded-3xl appear-block overflow-hidden ${visible ? "appear-once" : ""}`}
    >
      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden">
        {/* Logo Section */}
        <div className="flex items-center justify-center py-8 px-6 border-b border-white-100">
          <img src="assets/logo.png" alt='logo' className="h-8 mr-2" />
          <p className="text-2xl font-medium">Compser</p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-4 p-6 border-b border-white-100">
          <a 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            href="#projects"
            className="text-center py-3 px-4 rounded-lg hover:text-black hover:bg-gray-50 transition-colors duration-200"
          >
            Project
          </a>
          <a 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            href="#about"
            className="text-center py-3 px-4 rounded-lg hover:text-black hover:bg-gray-50 transition-colors duration-200"
          >
            About
          </a>
          <a 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            href="#team"
            className="text-center py-3 px-4 rounded-lg hover:text-black hover:bg-gray-50 transition-colors duration-200"
          >
            Team
          </a>
          <a 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            href="#CTA"
            className="text-center py-3 px-4 rounded-lg hover:text-black hover:bg-gray-50 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Services */}
        <div className="flex items-center justify-center gap-2 py-6 px-6 border-b hover:text-black border-white-100">
          <img src='assets/pencil-icon.png' alt='icon' className="w-5 h-5" />
          <a 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            href="#services"
            className="text-lg hover:text-gray-600 transition-colors duration-200"
          >
            Services
          </a>
        </div>

        {/* Email */}
        <div className="text-center py-6 px-6 border-b border-white-100">
          <p className="text-xl font-medium text-gray-800">hello@Compser.io</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 py-6 px-6 border-b border-white-100">
          <a 
            href="#facebook" 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover}
            className="p-2 rounded-full hover:text-black hover:bg-gray-50 hover:scale-110 transition-all duration-200"
          >
            <img src="assets/fb-icon.png" alt='Facebook' className="w-6 h-6" />
          </a>
          <a 
            href="#instagram" 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover}
            className="p-2 rounded-full hover:text-black hover:bg-gray-50 hover:scale-110 transition-all duration-200"
          >
            <img src="assets/ig-icon.png" alt='Instagram' className="w-6 h-6" />
          </a>
          <a 
            href="#twitter" 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover}
            className="p-2 rounded-full hover:text-black hover:bg-gray-50 hover:scale-110 transition-all duration-200"
          >
            <img src="assets/tw-icon.png" alt='Twitter' className="w-6 h-6" />
          </a>
          <a 
            href="#mail" 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover}
            className="p-2 rounded-full hover:text-black hover:bg-gray-50 hover:scale-110 transition-all duration-200"
          >
            <img src="assets/mail-icon.png" alt='Email' className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 px-6">
          <p className="text-sm text-gray-500">© Amrit Dubey</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:h-52">
        {/* Logo Section */}
        <div className="w-[298px] h-52 gap-1 flex items-center justify-center border-r border-white-100">
          <img src="assets/logo.png" alt='logo' />
          <p className="text-3xl">Compser</p>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col w-[982px] items-center">
          
          {/* Top Row - Navigation & Email */}
          <div className="flex h-26 border-b border-white-100">
            
            {/* Navigation Links */}
            <div className="flex hover:text-black w-[494px] justify-center gap-8 items-center">
              <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#projects">Project</a>
              <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#about">About</a>
              <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#team">Team</a>
              <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#CTA">Contact</a>
            </div>
            
            {/* Email */}
            <div className="flex w-[488px] border-l border-white-100 items-center justify-center">
              <p className="text-3xl">hello@Compser.io</p>
            </div>
          </div>

          {/* Bottom Row - Services, Social, Copyright */}
          <div className="flex h-26">
            
            {/* Services Link */}
            <div className="flex hover:text-black w-[327px] gap-1.5 border-r border-white-100 justify-center items-center">
              <img src='assets/pencil-icon.png' alt='icon' />
              <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#services">Services</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex w-[327px] hover:text-black gap-3 border-r border-white-100 justify-center items-center">
              <a href="#facebook" onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover}>
                <img src="assets/fb-icon.png" alt='Facebook' />
              </a>
              <a href="#instagram" onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover}>
                <img src="assets/ig-icon.png" alt='Instagram' />
              </a>
              <a href="#twitter" onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover}>
                <img src="assets/tw-icon.png" alt='Twitter' />
              </a>
              <a href="#mail" onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover}>
                <img src="assets/mail-icon.png" alt='Email' />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="flex w-[328px] gap-1.5 justify-center items-center">
              <p>© Amrit Dubey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;