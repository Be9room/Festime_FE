const CurrentLiveBlock = () => {
  return (
    <div className="darkgrayblock darkgrayblock-block-hover flex w-full flex-col gap-3 p-4">
      <div className="medium-14 flex w-full flex-row items-center gap-3">
        <span className="text-live-red">LIVE</span>
        <hr className="h-0.5 flex-1 border-none bg-gradient-to-r from-[#FF3B3B] via-[#BBBBBB80] to-[#BBBBBB00]" />
        <span>다비치</span>
      </div>
      <div className="medium-14 flex w-full flex-row items-center gap-3">
        <span>NEXT</span>
        <hr className="h-0.5 flex-1 border-none bg-gradient-to-r from-[#BBBBBB00] to-[#BBBBBB]" />
        <span>XXXXX</span>
      </div>
    </div>
  );
};

export default CurrentLiveBlock;
