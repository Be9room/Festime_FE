import MenuLink from "./MenuLink";

const MenuBar = ({ isMenuOpen, setIsMenuOpen, menuLinkArray }) => {
  return (
    <nav
      className={`fixed left-1/2 top-20 w-full max-w-md -translate-x-1/2 overflow-hidden px-5 duration-200 ${
        isMenuOpen ? "z-50" : "-z-10"
      }`}
    >
      <ul
        className={`grayblock grayblock-block-hover will-change-opacity flex flex-col p-3 backdrop-blur-2xl transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {menuLinkArray &&
          menuLinkArray.map(({ text, to }) => (
            <MenuLink key={text} text={text} to={to} setIsMenuOpen={setIsMenuOpen} />
          ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
