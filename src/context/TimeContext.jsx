import { createContext, useState, useEffect } from "react";

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [dateObj, setDateObj] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setDateObj(new Date());
      setTimeout(updateTime, 1000 - (new Date().getTime() % 1000));
    };

    updateTime();

    return () => {
      clearTimeout(updateTime);
    };
  }, []);

  return <TimeContext.Provider value={dateObj}>{children}</TimeContext.Provider>;
};

export { TimeProvider, TimeContext };
