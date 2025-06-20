const Text = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto my-30">
      <h2 className="max-w-3xl text-4xl">
        We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients' expectations.
      </h2>

      <div className="flex flex-col justify-between h-[200px]">
        <img className='h-10' src="assets/krate-logo.png" alt="krate-logo" />
        <img className='h-10' src="assets/massui-logo.png" alt="massui-logo" />
        <img className='h-10' src="assets/altall-logo.png" alt="altall-logo" />
      </div>

      <div className="flex flex-col justify-between h-[200px]">
        <img className='h-10' src="assets/kato-logo.png" alt="kato-logo" />
        <img className='h-10' src="assets/kinua-logo.png" alt="kinua-logo" />
        <img className='h-10' src="assets/tano-logo.png" alt="tano-logo" />
      </div>
    </div>
  )
}

export default Text;
