import { useState, useEffect } from "react";
import timerBackground from "../../../assets/images/timerBackground.webp";
import LiveTimeTable from "../../../components/liveTimeTable";
import LinkBlock from "./../../../components/LinkBlock/index";

const CurrentTimetable = () => {
  const [dateObj, setDateObj] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => setDateObj(new Date()), 1000);

    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <>
      <p className="bold-16 mt-8 w-full text-center text-text-primary">
        NOW {dateObj.toLocaleDateString("en-ZA").replaceAll(`/`, ".")}
      </p>
      <div className="relative mb-4 w-full">
        <img className="h-36 w-full object-contain" src={timerBackground} />
        <p className="bold-64 absolute top-0 mt-4 w-full text-center tracking-tighter text-text-primary">
          {dateObj.toLocaleTimeString("en-ZA")}
        </p>
      </div>
      <LiveTimeTable />
      <LinkBlock text="타임 테이블 확인하기" className="mt-3" />
    </>
  );
};

export default CurrentTimetable;
