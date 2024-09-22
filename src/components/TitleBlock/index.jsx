import CircleIcon from "../../assets/svgs/circle.svg?react";

const TitleBlock = ({ title, subtitle }) => {
  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <div className="flex w-full flex-row items-center gap-2">
        <CircleIcon />
        <h3 className="bold-16">{title}</h3>
      </div>
      <p className="medium-14">{subtitle}</p>
    </div>
  );
};

export default TitleBlock;
