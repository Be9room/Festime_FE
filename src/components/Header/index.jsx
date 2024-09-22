import MenuSVG from "../../assets/svgs/menu.svg?react";
import MenuBar from "./components/MenuBar";
import ArrowUpSVG from "../../assets/svgs/arrowDown.svg?react";
import Dimmer from "./components/Dimmer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MENU_LINK_ARRAY = [
  { text: "축제 타임 테이블", to: "/timetable" },
  { text: "부스, F&B 위치 및 정보", to: "/" },
  { text: "축제 안내사항", to: "/" },
  { text: "축제 방명록", to: "/" },
  { text: "총학생회 인스타그램", to: "/" },
  { text: "공유하기", to: "/" }
];
Object.freeze(MENU_LINK_ARRAY);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed left-1/2 top-0 z-50 flex w-screen min-w-80 -translate-x-1/2 transform justify-center bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1aB3] to-[#1a1a1a00]">
        <div className="bold-14 animate-fadeIn mx-auto flex min-w-80 max-w-md flex-1 flex-row justify-between p-5">
          <button
            onClick={() => navigate("/")}
            className="grayblock grayblock-button-hover flex h-10 flex-row items-center gap-3 p-3 backdrop-blur-2xl"
          >
            <span>飛 龍 祭</span>
            <div className="h-6 w-[0.0625rem] bg-grayscale-gray-30" />
            <span className="rounded-lg bg-grayscale-gray-20 px-2 py-0.5">Home</span>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="grayblock grayblock-button-hover flex h-10 flex-row items-center gap-3 p-3 backdrop-blur-2xl"
          >
            {isMenuOpen ? <ArrowUpSVG className="size-4 rotate-180" /> : <MenuSVG />}
          </button>
        </div>
      </header>
      {isMenuOpen && <Dimmer closeDimmer={() => setIsMenuOpen(false)} />}
      <MenuBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} menuLinkArray={MENU_LINK_ARRAY} />
    </>
  );
};

export default Header;
