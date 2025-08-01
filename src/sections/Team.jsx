import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Heading from "../components/Heading";
import MemberCard from "../components/MemberCard";
import Button from "../components/Button";

const Team = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.15,
  });

  return (
    <div ref={ref} id="team" className={`my-12 md:my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 appear-block ${visible ? "appear-once" : ""}`}>
      <Heading Text='Our Team' />
      <div className="flex flex-col lg:flex-row mt-8 md:mt-12 mb-8 justify-between gap-6 lg:gap-8">
        {/* Header text - responsive sizing and spacing */}
        <div className="lg:w-1/3 xl:w-2/5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight lg:pr-4">
            We are passionate about creating visually stunning and functional solutions that communicate effectively.
          </h1>
        </div>
        
        {/* Team members grid - responsive layout */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 6 }, (_, idx) => (
            <MemberCard key={idx} id={(idx + 1)} />
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:justify-start">
        <Button btnText='See All Members' />
      </div>
    </div>
  )
}

export default Team;