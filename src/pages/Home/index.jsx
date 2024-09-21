import Header from "../../components/Header";
import MeshGradient from "../../components/MeshGradient";
import mainWebp from "../../assets/images/main.webp";

const Home = () => {
  return (
    <>
      <MeshGradient amount={5} lifetime={8000} primaryColor={"#065147"} secondaryColor={"#0a3962"} />
      <Header />
      <img className="z-[100] w-screen p-8" src={mainWebp} />
    </>
  );
};

export default Home;
