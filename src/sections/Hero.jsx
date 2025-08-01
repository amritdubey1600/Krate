import Logos from '../components/Logos';
import Nav from '../components/Nav';
import { useCursorHover } from '../hooks/useCursorHover';

const Hero = () => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>
      <Nav />
      
      {/* Responsive heading */}
      <h1 className='w-full max-w-7xl mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold leading-tight'>
        Krate design and motion studio
      </h1>
      
      {/* Responsive image grid */}
      <div className='flex mt-8 sm:mt-12 md:mt-16 lg:mt-18 w-full max-w-7xl h-32 sm:h-48 md:h-64 lg:h-80 xl:h-[612px] gap-1'>
        {
          Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className='flex-1 h-full transform scale-90 transition-transform duration-300 hover:scale-100 link'
            >
              <img
                onMouseEnter={addCursorHover} 
                onMouseLeave={removeCursorHover}
                className='rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-[42px] xl:rounded-[52px] w-full h-full object-cover'
                src={`assets/hero-split/image${i + 1}x1.png`}
                alt={`Hero image ${i + 1}`}
                />
            </div>
          ))
        }
      </div>
      
      <Logos />
    </div>
  )
}

export default Hero;