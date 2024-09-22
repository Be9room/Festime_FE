import Layout from "../../components/Layout";
import mainWebp from "../../assets/images/main.webp";
import ArrowDown from "../../assets/svgs/arrowDown.svg?react";
import MainTimetable from "./components/MainTimeTable";
import QuickLink from "./components/QuickLink";

const LINK_ARRAY = [
  { text: "예시 텍스트", to: "/" },
  { text: "예시 텍스트", to: "/" },
  { text: "예시 텍스트", to: "/" }
];
Object.freeze(LINK_ARRAY);

const Home = () => {
  return (
    <Layout>
      <img className="h-[80vh] w-full object-contain px-2 pb-8" src={mainWebp} />
      <ArrowDown className="my-8 w-full" />
      <MainTimetable />
      <QuickLink linkArray={LINK_ARRAY} />
    </Layout>
  );
};

export default Home;
