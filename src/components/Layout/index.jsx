import useFadeOnScroll from "./useFadeOnScroll";

const Layout = ({ children }) => {
  useFadeOnScroll();

  return (
    <main className="animate-fadeIn mx-auto mt-20 flex min-w-80 max-w-md flex-col px-6 pb-[30vh]">{children}</main>
  );
};

export default Layout;
