import Logos from '../components/Logos';
import Nav from '../components/Nav';
import { useCursorHover } from '../hooks/useCursorHover';

const Hero = () => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div className='flex flex-col items-center'>
      <Nav />
      <h1 className='w-[1124px] mt-4 text-9xl text-center font-bold'>Krate design and motion studio</h1>
      <div className='flex mt-18 w-[1158px] h-[612px] gap-1'>
        {
          Array.from({ length: 10 }, (_, i) => (
            <div
            key={i}
            className='transform scale-90 transition-transform duration-300 hover:scale-100 link'
            >
              <img
                onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover}
                className='rounded-[52px] w-full h-full object-cover'
                src={`assets/hero-split/image${i + 1}x1.png`}
                alt="hero-img"
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
