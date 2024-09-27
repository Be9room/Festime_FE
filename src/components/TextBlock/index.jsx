import CircleIcon from "../../assets/svgs/circle.svg?react";

const TextBlock = ({ title, innerComponent, className }) => {
  return (
    <div className={`flex w-full flex-col gap-2 p-4 ${className} medium-14 break-keep`}>
      <div className="mb-1 flex w-full flex-row items-center gap-2">
        <CircleIcon />
        <h3 className="bold-16 break-keep">{title}</h3>
      </div>
      {innerComponent &&
        innerComponent.map(({ type, detail }, index) => {
          switch (type) {
            case "text-red":
              return (
                <span key={detail} className="text-live-red">
                  {detail}
                </span>
              );
            case "text-green":
              return (
                <span key={detail} className="text-success-green">
                  {detail}
                </span>
              );
            case "text-pink":
              return (
                <span key={detail} className="text-map-pink">
                  {detail}
                </span>
              );
            case "text":
              return (
                <span key={detail} className="medium-14">
                  {detail}
                </span>
              );
            case "text-title":
              return (
                <span key={detail} className="bold-14">
                  • {detail}
                </span>
              );
            case "br":
              return <br key={index} />;
            case "image":
              return (
                <img
                  key={detail}
                  className="darkgrayblock darkgrayblock-block-hover my-4 w-full scale-105 overflow-hidden"
                  loading="lazy"
                  src={detail}
                  alt={detail}
                />
              );
          }
        })}
    </div>
  );
};

export default TextBlock;
