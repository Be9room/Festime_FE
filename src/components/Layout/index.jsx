import AdBlock from "../AdBlock";
import ScrollToTop from "./scrollToTop";
import useFadeOnScroll from "./useFadeOnScroll";

const Layout = ({ children }) => {
  ScrollToTop();
  useFadeOnScroll();

  return (
    <>
      <main className="mx-auto mt-20 flex min-w-80 max-w-md animate-fadeIn flex-col px-6 pb-[30vh]">{children}</main>
      <AdBlock />
    </>
  );
};

export default Layout;
