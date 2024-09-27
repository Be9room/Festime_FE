import TextBlock from "../../../components/TextBlock";
import BoothZoneInformation from "./BoothZoneInformation";

const BoothTableBlock = ({ currentTab, selectedList }) => {
  return (
    <>
      <BoothZoneInformation currentTab={currentTab} />
      <TextBlock title="부스 목록" />
      <div className="flex w-full flex-col gap-3">
        {selectedList &&
          selectedList.map(({ number, name, detail }) => (
            <div
              key={name + number}
              className="darkgrayblock darkgrayblock-block-hover medium-14 relative flex max-h-14 w-full flex-col gap-2 overflow-hidden p-4 duration-500 hover:max-h-32"
            >
              <div className="bold-14 mb-2 flex w-full pr-14">
                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
              </div>
              <span className="absolute right-3 top-3 rounded-lg bg-success-green-10 px-2 py-1 text-success-green">
                {number}
              </span>
              {detail.map((text) => (
                <span key={text}>{text}</span>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default BoothTableBlock;
