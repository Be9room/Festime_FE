import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-16 max-w-md">{children}</main>
    </>
  );
};

export default Layout;
