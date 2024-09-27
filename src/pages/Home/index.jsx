import Layout from "../../components/Layout";
import mainWebp from "../../assets/images/main.webp";
import ArrowDown from "../../assets/svgs/arrowDown.svg?react";
import MainTimetable from "./components/MainTimeTable";
import QuickLink from "./components/QuickLink";
import MAIN_LINK_ARRAY from "../../constants/mainLinkArray";

const Home = () => {
  return (
    <Layout>
      <img className="h-[80vh] w-full object-contain px-2 pb-8" loading="lazy" alt="main image" src={mainWebp} />
      <ArrowDown className="my-8 w-full" />
      <MainTimetable />
      <QuickLink linkArray={MAIN_LINK_ARRAY} />
    </Layout>
  );
};

export default Home;
