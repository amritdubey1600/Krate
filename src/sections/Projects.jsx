import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Button from '../components/Button';
import Heading from '../components/Heading';
import ProjectCard from '../components/ProjectCard';

const projects = ["Galaxia Branding", "John Mayer NYC", "Nayzak Patterns", "Crave Chips"];

const Projects = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.1,
  });

  return (
    <div id="projects" ref={ref} className={`mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 appear-block ${visible ? "appear-once" : ""}`}>
      <Heading Text='Recent Work' />
      <div className="my-8 sm:my-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((name, idx) => (
          <ProjectCard key={idx} id={(idx + 1)} name={name} />
        ))}
      </div>
      <div className="text-center">
        <Button btnText='View All Work' />
      </div>
    </div>
  )
}

export default Projects;