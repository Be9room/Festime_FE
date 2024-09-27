import { useState, useEffect, useContext } from "react";
import TIME_TABLE from "../../constants/timeTable";
import { TimeContext } from "../../context/TimeContext";

const CurrentLiveBlock = () => {
  const [liveShow, setLiveShow] = useState(null);
  const [nextShow, setNextShow] = useState(null);
  const dateObj = useContext(TimeContext);

  useEffect(() => {
    const today = `${String(dateObj.getMonth() + 1).padStart(2, "0")}/${String(dateObj.getDate()).padStart(2, "0")}`;
    const todaySchedule = TIME_TABLE[today] || [];
    console.log(today, todaySchedule);

    const ongoingShows = todaySchedule.filter((show) => dateObj >= show.startTime && dateObj <= show.endTime);

    const upcomingShows = todaySchedule.filter((show) => dateObj < show.startTime);

    setLiveShow(ongoingShows.length > 0 ? ongoingShows[0] : null);
    setNextShow(upcomingShows.length > 0 ? upcomingShows[0] : null);
  }, [dateObj]);

  return (
    <div className="darkgrayblock darkgrayblock-block-hover flex w-full flex-col gap-3 p-4">
      <div className="medium-14 flex w-full flex-row items-center gap-3">
        <span className="text-live-red">LIVE</span>
        <hr className="h-0.5 flex-1 border-none bg-gradient-to-r from-[#FF3B3B] via-[#BBBBBB80] to-[#BBBBBB00]" />
        <span>{liveShow ? liveShow.schedule : "진행 중인 공연 없음"}</span>
      </div>
      <div className="medium-14 flex w-full flex-row items-center gap-3">
        <span>NEXT</span>
        <hr className="h-0.5 flex-1 border-none bg-gradient-to-r from-[#BBBBBB00] to-[#BBBBBB]" />
        <span>{nextShow ? nextShow.schedule : "다음 공연 없음"}</span>
      </div>
    </div>
  );
};

export default CurrentLiveBlock;
