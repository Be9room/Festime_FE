import AdBlock from "../AdBlock";
import Footer from "../Footer";
import ScrollToTop from "./scrollToTop";
import useFadeOnScroll from "./useFadeOnScroll";

const Layout = ({ activeFooter = true, className, children }) => {
  ScrollToTop();
  useFadeOnScroll();

  return (
    <>
      <main className={`mx-auto mt-20 flex min-w-80 max-w-md animate-fadeIn flex-col px-6 pb-[30vh] ${className}`}>
        {children}
      </main>
      {activeFooter && (
        <>
          <AdBlock />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
