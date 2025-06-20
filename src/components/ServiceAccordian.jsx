import { useCursorHover } from '../hooks/useCursorHover';

const ServiceAccordian = ({name,img1,img2}) => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div className="max-w-7xl group">
        <div className="flex items-center justify-between my-7">
          <div onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} className="flex items-center justify-start gap-4">
            <img className="h-10 group-hover:hidden" src={img1} alt='img' />
            <p className="font-semibold text-3xl">{name}</p>

            <img className="h-13 hidden group-hover:block" src={img2} alt='img'/>
          </div>
          
          <img onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} src='assets/add-icon.png' alt='icon' />
        </div>
        <hr />
    </div>
  )
}

export default ServiceAccordian;
