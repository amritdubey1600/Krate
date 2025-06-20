import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useCursorHover } from "../hooks/useCursorHover";

const Footer = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { addCursorHover, removeCursorHover } = useCursorHover();
  
  useIntersectionObserver(ref, () => setVisible(true), {
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`my-20 mx-auto w-[1280px] flex items-center h-52 border border-white-100 rounded-3xl appear-block ${visible ? "appear-once" : ""}`}>
      <div className="w-[298px] h-52 gap-1 flex items-center justify-center border-r border-white-100">
        <img src="assets/logo.png" alt='logo' />
        <p className="text-3xl">Compser</p>
      </div>
      <div className="flex flex-col w-[982px] items-center">
        <div className="flex h-26 border-b border-white-100">
          <div className="flex w-[494px] justify-center gap-8 items-center">
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#projects">Project</a>
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#about">About</a>
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#team">Team</a>
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#CTA">Contact</a>
          </div>
          <div className="flex w-[488px] border-l border-white-100 items-center justify-center">
            <p className="text-3xl">hello@Compser.io</p>
          </div>
        </div>

        <div className="flex h-26">
          <div className="flex w-[327px] gap-1.5 border-r border-white-100 justify-center items-center">
            <img src='assets/pencil-icon.png' alt='icon' />
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#services">Services</a>
          </div>
          <div className="flex w-[327px] gap-3 border-r border-white-100 justify-center items-center">
            <img src="assets/fb-icon.png" alt='icon' />
            <img src="assets/ig-icon.png" alt='icon' />
            <img src="assets/tw-icon.png" alt='icon' />
            <img src="assets/mail-icon.png" alt='icon' />
          </div>
          <div className="flex w-[328px] gap-1.5 justify-center items-center">
            <p>© 2088 Nayzak Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
