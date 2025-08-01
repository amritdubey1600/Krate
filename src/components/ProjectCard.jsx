import { useCursorHover } from '../hooks/useCursorHover';

const ProjectCard = ({ name, id }) => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div 
      onMouseEnter={addCursorHover} 
      onMouseLeave={removeCursorHover} 
      className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
    >
      <img 
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl"
        src={`assets/project-${id}.png`} 
        alt={`${name} project preview`}
      />
      <div className="border-white-100 border-b border-x rounded-b-3xl">
        <p className="text-lg sm:text-xl lg:text-2xl py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-7 font-medium">
          {name}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard;