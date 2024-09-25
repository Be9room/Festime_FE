import CircleIcon from "../../assets/svgs/circle.svg?react";
import { useNavigate } from "react-router-dom";
import handleNavigation from "../../utils/handleMovePage";

const LinkBlock = ({ text, className, to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => handleNavigation(to, navigate)}
      className={`darkgrayblock darkgrayblock-button-hover flex w-full flex-row justify-between gap-3 p-4 ${className} items-center`}
    >
      <span className="medium-14 flex-1 text-left">{text}</span>
      <CircleIcon />
    </button>
  );
};

export default LinkBlock;
