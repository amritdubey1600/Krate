import { useCursorHover } from "../hooks/useCursorHover";

const Logos = () => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <div 
      onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} 
      className="relative wrapper my-9 overflow-hidden px-12 flex flex-wrap w-full justify-between h-25 items-center"
    >
      <img className='h-11 item item1' src="assets/krate-logo.png" alt="krate-logo" />
      <img className='h-11 item item2' src="assets/massui-logo.png" alt="massui-logo" />
      <img className='h-11 item item3' src="assets/altall-logo.png" alt="altall-logo" />
      <img className='h-11 item item4' src="assets/kato-logo.png" alt="kato-logo" />
      <img className='h-11 item item5' src="assets/kinua-logo.png" alt="kinua-logo" />
      <img className='h-11 item item6' src="assets/tano-logo.png" alt="tano-logo" />
    </div>
  )
}

export default Logos;
