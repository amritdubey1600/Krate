const Text = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start max-w-7xl mx-auto my-20 lg:my-30 px-4 sm:px-6 lg:px-8 gap-12 lg:gap-8">
      {/* Main text content */}
      <h2 className="max-w-full lg:max-w-3xl text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left order-1 lg:order-1">
        We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients' expectations.
      </h2>

      {/* Logo columns - stacked on mobile, side by side on desktop */}
      <div className="flex flex-row lg:flex-col justify-center lg:justify-between items-center gap-8 lg:gap-0 lg:h-[200px] order-2 lg:order-2">
        <div className="flex flex-col items-center gap-4 lg:gap-8">
          <img className='h-8 sm:h-10' src="assets/krate-logo.png" alt="krate-logo" />
          <img className='h-8 sm:h-10' src="assets/massui-logo.png" alt="massui-logo" />
          <img className='h-8 sm:h-10' src="assets/altall-logo.png" alt="altall-logo" />
        </div>

        <div className="flex flex-col items-center gap-4 lg:gap-8">
          <img className='h-8 sm:h-10' src="assets/kato-logo.png" alt="kato-logo" />
          <img className='h-8 sm:h-10' src="assets/kinua-logo.png" alt="kinua-logo" />
          <img className='h-8 sm:h-10' src="assets/tano-logo.png" alt="tano-logo" />
        </div>
      </div>
    </div>
  )
}

export default Text;