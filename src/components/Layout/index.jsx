import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-20 flex min-w-80 max-w-md flex-col px-6 pb-[30vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
