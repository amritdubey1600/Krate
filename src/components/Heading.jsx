const Heading = ({Text}) => {
  return (
    <div className="my-6">
        <div className="flex items-center gap-1">
            <img className='h-5' src="assets/arrow-icon.png" alt='icon' />
            <p>{Text}</p>
        </div>
    </div>
  )
}

export default Heading;
