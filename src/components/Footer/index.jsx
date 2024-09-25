import LogoWebp from "../../assets/images/9roomUnivLogo.webp";
import GithubIcon from "../../assets/svgs/github.svg?react";
import handleNavigation from "../../utils/handleMovePage";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mx-auto flex w-full min-w-80 max-w-md flex-row items-center justify-between px-4 py-8">
      <img className="mx-4 w-32" alt="logo image" src={LogoWebp} />
      <button
        className="p-3"
        onClick={() => handleNavigation("https://github.com/Be9room", navigate)}
        aria-label="github"
      >
        <GithubIcon />
      </button>
    </footer>
  );
};

export default Footer;
