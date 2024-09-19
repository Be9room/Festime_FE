import Header from "../../components/Header";
import MeshGradient from "../../components/MeshGradient";
import main from "../../assets/images/main.png";

const Home = () => {
  return (
    <>
      <MeshGradient amount={5} lifetime={8000} primaryColor={"#065147"} secondaryColor={"#0a3962"} />
      <Header />
      <img className="w-screen z-[100] p-8" src={main} />
    </>
  );
};

export default Home;

/*
<MeshGradient amount={5} lifetime={8000} primaryColor={"#3d1053"} secondaryColor={"#0a213f"} />
*/
