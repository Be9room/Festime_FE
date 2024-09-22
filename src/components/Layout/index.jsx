import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-20 flex max-w-md flex-col px-6">{children}</main>
    </>
  );
};

export default Layout;
