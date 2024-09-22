import LogoWebp from "../../assets/images/9roomUnivLogo.webp";
import GithubIcon from "../../assets/svgs/github.svg?react";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full min-w-80 max-w-md flex-row items-center justify-between px-4 py-8">
      <img className="mx-4 w-32" src={LogoWebp} />
      <a className="p-3" href="https://github.com/Be9room" target="_blank">
        <GithubIcon />
      </a>
    </footer>
  );
};

export default Footer;
