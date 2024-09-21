import Layout from "../../components/Layout";
import mainWebp from "../../assets/images/main.webp";

const Home = () => {
  return (
    <Layout>
      <img className="z-[100] w-screen p-8" src={mainWebp} />
    </Layout>
  );
};

export default Home;
