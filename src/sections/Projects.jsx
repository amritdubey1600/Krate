import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Button from '../components/Button';
import Heading from '../components/Heading';
import ProjectCard from '../components/ProjectCard';

const projects=["Galaxia Branding", "John Mayer NYC", "Nayzak Patterns", "Crave Chips"];

const Projects = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.1,
  });

  return (
    <div id="projects" ref={ref} className={`mt-10 max-w-7xl mx-auto appear-block ${visible ? "appear-once" : ""}`}>
      <Heading Text='Recent Work' />
      <div className="my-12 gap-8 flex flex-wrap">
        {projects.map((name,idx) => <ProjectCard key={idx} id={(idx+1)} name={name} />)}
      </div>
      <Button btnText='View All Work' />
    </div>
  )
}

export default Projects;
