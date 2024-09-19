const Header = () => {
  return (
    <header className="flex flex-row justify-between max-w-2xl bold-14 text-text-primary p-5">
      <button className="flex flex-row gap-3 z-50 bg-grayscale-gray-20 rounded-[14px] p-3 border border-solid border-grayscale-gray-30 h-10 items-center backdrop-blur-2xl">
        <span>飛 龍 祭</span>
        <div className="w-[0.0625rem] h-6 bg-grayscale-gray-30" />
        <span className="bg-grayscale-gray-20 px-2 py-0.5 rounded-lg">Home</span>
      </button>
      <button className="flex flex-row gap-3 z-50 bg-grayscale-gray-20 rounded-[14px] p-3 border border-solid border-grayscale-gray-30 h-10 items-center backdrop-blur-2xl">
        <span>menu</span>
      </button>
    </header>
  );
};

export default Header;
