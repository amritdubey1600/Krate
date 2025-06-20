import { useCursorHover } from '../hooks/useCursorHover';

const ProjectCard = ({name,id}) => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} className="my-0.5">
      <img 
        className="w-[624px] rounded-t-3xl"
        src={`assets/project-${id}.png`} 
        alt="project" 
      />
      <p className="border-white-100 border-b-1 border-x-1 rounded-b-3xl text-2xl py-10 pl-7">{name}</p>
    </div>
  )
}

export default ProjectCard;
