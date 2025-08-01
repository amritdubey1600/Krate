import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useCursorHover } from "../hooks/useCursorHover";

const CTA = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { addCursorHover, removeCursorHover } = useCursorHover();
  
  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref} 
      id='CTA' 
      className={`relative w-full max-w-7xl h-[350px] sm:h-[400px] md:h-[450px] lg:h-[546px] mx-auto mt-10 sm:mt-16 lg:mt-20 flex items-center justify-center appear-block px-4 sm:px-6 lg:px-8 ${visible ? "appear-once" : ""}`}
    >
      <div className="absolute inset-0 mx-4 sm:mx-0">
        <img 
          src="assets/hero-img.png" 
          alt="Hero background" 
          className="w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl object-cover object-center z-0 opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-2xl lg:max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Have an idea? Let's talk.
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 leading-relaxed opacity-90">
          Visually attractive design from concept to final result. We create solutions that are bold and forward-looking.
        </p>
        
        <button 
          onMouseEnter={addCursorHover} 
          onMouseLeave={removeCursorHover} 
          className="bg-white text-black px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-2xl sm:rounded-3xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg w-auto inline-flex items-center justify-center"
        >
          <div className="flex items-center gap-2">
            <img 
              src="assets/calender-black.png" 
              alt='Calendar icon' 
              className="h-4 sm:h-5 w-auto"
            />
            <span>Free Consultation</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CTA;