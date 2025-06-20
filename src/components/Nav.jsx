import { useCursorHover } from '../hooks/useCursorHover';

const Nav = () => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div className="my-12 mx-auto w-[1280px] flex items-center h-28 border border-white-100 rounded-[24px]">
      <div className="w-[194px] h-28 flex items-center justify-center border-r border-white-100">
        <img src="assets/logo.png" alt='logo' />
      </div>
      <div className="flex flex-col w-[1086px] items-center">
        <div className="flex h-14 border-b border-white-100">
          <div className="flex w-[854px] justify-between px-60 items-center">
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#projects">Project</a>
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#about">About</a>
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#team">Team</a>
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#CTA">Contact</a>
          </div>
          <div className="flex w-[232px] border-l border-white-100 items-center justify-center">
            <img src="assets/hamburger-icon.png" alt='icon' />
          </div>
        </div>

        <div className="flex h-14">
          <div className="flex w-[543px] gap-1.5 border-r border-white-100 justify-center items-center">
            <img src='assets/pencil-icon.png' alt='icon' />
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#services">Services</a>
          </div>
          <div className="flex w-[543px] gap-1.5 justify-center items-center">
            <img src="assets/calender-icon.png" alt='icon' />
            <a onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} href="#CTA">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;