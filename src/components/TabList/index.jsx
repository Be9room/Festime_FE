import { useState, useEffect } from "react";

const TabList = ({ lists, listComponent: ListComponent }) => {
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    setCurrentTab(Object.keys(lists)[0]);
  }, [lists, setCurrentTab]);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-row gap-2">
        {lists &&
          Object.keys(lists).map((key) => (
            <button
              key={key}
              onClick={() => setCurrentTab(key)}
              className={`bold-14 flex-1 break-keep px-4 py-2 ${currentTab === key ? "grayblock" : "darkgrayblock darkgrayblock-button-hover"}`}
            >
              {key}
            </button>
          ))}
      </div>
      <ListComponent currentTab={currentTab} selectedList={lists[currentTab]} />
    </div>
  );
};

export default TabList;
