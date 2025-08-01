import { useCursorHover } from '../hooks/useCursorHover';

const ServiceAccordian = ({name,img1,img2}) => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div className="w-full max-w-7xl group">
        <div className="flex items-center justify-between py-4 sm:py-5 md:py-7 px-2 sm:px-0">
          <div 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            className="flex items-center justify-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0"
          >
            <img 
              className="h-6 sm:h-8 md:h-10 group-hover:hidden flex-shrink-0" 
              src={img1} 
              alt={`${name} icon`} 
            />
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl truncate sm:truncate-none">
              {name}
            </p>

            <img 
              className="h-8 sm:h-10 md:h-12 lg:h-13 hidden group-hover:block flex-shrink-0" 
              src={img2} 
              alt={`${name} hover icon`}
            />
          </div>
          
          <img 
            onMouseEnter={addCursorHover} 
            onMouseLeave={removeCursorHover} 
            src='assets/add-icon.png' 
            alt='expand icon'
            className="h-5 sm:h-6 md:h-7 lg:h-8 flex-shrink-0 ml-2 sm:ml-4"
          />
        </div>
        <hr className="border-gray-300" />
    </div>
  )
}

export default ServiceAccordian;