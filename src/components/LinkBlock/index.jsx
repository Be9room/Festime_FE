import CircleIcon from "../../assets/svgs/circle.svg?react";
import { useNavigate } from "react-router-dom";

const TEL_REGEXP = /^tel:\+82\d{1,2}\d{3,4}\d{4}$/;
const MAIL_REGEXP = /^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const SHARE_REGEXP = /^share$/;

const LinkBlock = ({ text, className, to = "/" }) => {
  const navigate = useNavigate();

  const handleButtonClicked = (to) => {
    if (TEL_REGEXP.test(to) || MAIL_REGEXP.test(to)) {
      window.location.href = to;
    } else if (SHARE_REGEXP.test(to)) {
      if (navigator.share) {
        navigator
          .share({
            title: "2024 인하대학교 비룡제",
            url: window.location.href
          })
          .catch((error) => {
            console.error("Error sharing:", error);
          });
      } else alert("Sharing is not supported in this browser.");
    } else navigate(to);
  };

  return (
    <button
      onClick={() => handleButtonClicked(to)}
      className={`darkgrayblock darkgrayblock-button-hover flex w-full flex-row justify-between gap-3 p-4 ${className} items-center`}
    >
      <span className="medium-14 flex-1 text-left">{text}</span>
      <CircleIcon />
    </button>
  );
};

export default LinkBlock;
