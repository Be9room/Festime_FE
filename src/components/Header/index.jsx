import MenuSVG from "../../assets/svgs/menu.svg?react";

const Header = () => {
  return (
    <header className="bold-14 fixed left-1/2 top-0 flex w-full max-w-2xl -translate-x-1/2 transform flex-row justify-between p-5 text-text-primary">
      <button className="z-50 flex h-10 flex-row items-center gap-3 rounded-[14px] border border-solid border-grayscale-gray-30 bg-grayscale-gray-20 p-3 backdrop-blur-2xl">
        <span>飛 龍 祭</span>
        <div className="h-6 w-[0.0625rem] bg-grayscale-gray-30" />
        <span className="rounded-lg bg-grayscale-gray-20 px-2 py-0.5">Home</span>
      </button>
      <button className="z-50 flex h-10 flex-row items-center gap-3 rounded-[14px] border border-solid border-grayscale-gray-30 bg-grayscale-gray-20 p-3 backdrop-blur-2xl">
        <MenuSVG />
      </button>
    </header>
  );
};

export default Header;
