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
    <div ref={ref} id='CTA' className={`relative max-w-7xl h-[546px] mx-auto mt-20 flex items-center justify-center appear-block ${visible ? "appear-once" : ""}`}>
      <div className="absolute inset-0">
        <img 
          src="assets/hero-img.png" 
          alt="Hero background" 
          className="w-full h-full rounded-3xl object-cover z-0 opacity-45"
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Have an idea? Let's talk.
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Visually attractive design from concept to final result. We create solutions that are bold and forward-looking.
        </p>
        
        <button onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} className="bg-white text-black px-8 py-3 rounded-3xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
          <div className="flex items-center gap-2">
            <img 
            src="assets/calender-black.png" 
            alt='Calendar icon' 
            className="h-5"
            />
            <p>Free Consultation</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CTA;
