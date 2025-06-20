const MemberCard = ({id}) => {
  return (
    <div className="w-[296px]">
      <img 
        className="rounded-t-3xl"
        src={`assets/team-${id}.png`} 
        alt="member" 
      />
      <div className="border-white-100 border-b-1 border-x-1 rounded-b-3xl text-2xl py-5 pl-3">
        <p className="text-sm font-bold mb-1">Jocelyn Schleifer</p>
        <p className="text-xs">Managing Director</p>
      </div>
    </div>
  )
}

export default MemberCard;
