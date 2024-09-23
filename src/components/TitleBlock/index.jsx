import CircleIcon from "../../assets/svgs/circle.svg?react";

const TitleBlock = ({ title, subtitle, className }) => {
  return (
    <div className={`flex w-full flex-col gap-2 p-4 ${className}`}>
      <div className="mb-1 flex w-full flex-row items-center gap-2">
        <CircleIcon />
        <h3 className="bold-16">{title}</h3>
      </div>
      {subtitle &&
        subtitle.map((text) => (
          <p key={text} className="medium-14 w-full">
            {text}
          </p>
        ))}
    </div>
  );
};

export default TitleBlock;
