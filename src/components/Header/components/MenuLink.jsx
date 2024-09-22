import { useNavigate } from "react-router-dom";
import CircleIcon from "../../../assets/svgs/circle.svg?react";

const MenuLink = ({ text, to = "/" }) => {
  const navigate = useNavigate();

  return (
    <li className="w-full">
      <button
        className="flex w-full flex-row items-center justify-between gap-3 rounded-lg px-4 py-2 duration-200 hover:bg-grayscale-gray-20"
        onClick={() => navigate(to)}
      >
        <span className="bold-14">{text}</span>
        <CircleIcon />
      </button>
    </li>
  );
};

export default MenuLink;
