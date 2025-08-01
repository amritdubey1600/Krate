import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Heading from "../components/Heading";
import ServiceAccordian from "../components/ServiceAccordian";

const services=[
  {id: 1, name: "Web & Mobile Design"},
  {id: 2, name: "Brand Identity"},
  {id: 3, name: "App Development"},
  {id: 4, name: "Consultancy"},
  {id: 5, name: "Packaging"}
]

const Services = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref} 
      id="services" 
      className={`w-full max-w-7xl mb-12 sm:mb-16 md:mb-20 mx-auto px-4 sm:px-6 lg:px-8 appear-block ${visible ? "appear-once" : ""}`}
    >
      <Heading Text="Our Services" />
      <div className="h-2 sm:h-3 md:h-4"></div>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {
          services.map(service => 
            <ServiceAccordian 
              key={service.id}
              name={service.name}
              img1={`assets/service-${service.id}.png`}
              img2={`assets/upscaled-services/service-${service.id}.png`}
            />
          )
        }
      </div>
    </div>
  )
}

export default Services;