import { useCursorHover } from '../hooks/useCursorHover';

const Button = ({btnText}) => {
  const { addCursorHover, removeCursorHover } = useCursorHover();

  return (
    <button onMouseEnter={addCursorHover} onMouseLeave={removeCursorHover} className='outline-1 w-full rounded-4xl py-4'>
        <div className='flex items-center gap-1 justify-center'>
          <p>{btnText}</p>
          <img className='h-6' src='assets/arrow-up-right.png' alt='icon' />
        </div>
    </button>
  )
}

export default Button;
