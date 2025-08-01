const MemberCard = ({ id }) => {
  return (
    <div className="w-full max-w-[296px] mx-auto sm:mx-0">
      <img 
        className="w-full h-auto rounded-t-3xl object-cover"
        src={`assets/team-${id}.png`} 
        alt="team member" 
      />
      <div className="border-white-100 border-b border-x rounded-b-3xl py-4 sm:py-5 px-3 sm:px-4">
        <p className="text-sm font-bold mb-1">Jocelyn Schleifer</p>
        <p className="text-xs">Managing Director</p>
      </div>
    </div>
  )
}

export default MemberCard;