const TimeTableBlock = ({ scheduleList }) => {
  return (
    <div className="darkgrayblock darkgrayblock-block-hover flex w-full flex-col gap-3 p-4">
      {scheduleList &&
        scheduleList.map(({ time, schedule }) => (
          <div key={schedule} className="medium-14 flex w-full flex-row items-center gap-3">
            <span className="w-11 text-center">{time}</span>
            <hr className="h-0.5 flex-1 border-none bg-gradient-to-r from-[#BBBBBB00] via-[#BBBBBB] to-[#BBBBBB00]" />
            <span>{schedule}</span>
          </div>
        ))}
    </div>
  );
};

export default TimeTableBlock;
