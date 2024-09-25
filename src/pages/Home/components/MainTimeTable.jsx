import { useState, useEffect } from "react";
import timerBackground from "../../../assets/images/timerBackground.webp";
import LinkBlock from "../../../components/LinkBlock/index";
import CurrentLiveBlock from "../../../components/CurrentLiveBlock";

const MainTimetable = () => {
  const [dateObj, setDateObj] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => setDateObj(new Date()), 1000);

    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <div className="mb-32 mt-8 flex w-full flex-col">
      <p className="bold-16 w-full text-center text-text-primary">
        NOW {dateObj.toLocaleDateString("en-ZA").replaceAll(`/`, ".")}
      </p>
      <div className="relative mb-4 w-full">
        <img className="h-36 w-full object-contain" alt="clock backbround image" src={timerBackground} />
        <p className="bold-64 absolute top-0 mt-4 w-full text-center tracking-tighter text-text-primary">
          {dateObj.toLocaleTimeString("en-ZA")}
        </p>
      </div>
      <CurrentLiveBlock />
      <LinkBlock text="타임 테이블 확인하기" to="/timetable" className="mt-3" />
    </div>
  );
};

export default MainTimetable;
