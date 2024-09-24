import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MeshGradient from "./components/MeshGradient/index";
import TimeTable from "./pages/TimeTable";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <MeshGradient amount={5} lifetime={8000} primaryColor={"#065147"} secondaryColor={"#0a3962"} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
