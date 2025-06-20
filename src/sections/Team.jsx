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
    <div ref={ref} id="team" className={`my-20 max-w-7xl mx-auto appear-block ${visible ? "appear-once" : ""}`}>
      <Heading Text='Our Team' />
      <div className="flex mt-12 mb-8 w-7xl justify-between gap-6 flex-wrap">
        <h1 className="w-xl text-4xl pr-3 mr-13">
          We are passionate about creating visually stunning and functional solutions that communicate effectively.
        </h1>
        {Array.from({ length: 6 }, (_,idx)=><MemberCard key={idx} id={(idx+1)} />)}
      </div>

      <Button btnText='See All Members' />
    </div>
  )
}

export default Team;
