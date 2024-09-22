import CircleIcon from "../../assets/svgs/circle.svg?react";
import { useNavigate } from "react-router-dom";

const LinkBlock = ({ text, className, to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`flex w-full flex-row justify-between gap-3 rounded-[14px] border border-solid border-grayscale-darkgray-20 bg-grayscale-darkgray-20 p-4 ${className} items-center`}
    >
      <span className="medium-14 flex-1 text-left">{text}</span>
      <CircleIcon />
    </button>
  );
};

export default LinkBlock;
