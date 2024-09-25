import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MeshGradient from "./components/MeshGradient/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import Home from "./pages/Home";
import Entry from "./pages/Entry/index";
import Ticketing from "./pages/Ticketing";
import TimeTable from "./pages/TimeTable";
import Booths from "./pages/Booths/index";
import Food from "./pages/Food/index";
import Event from "./pages/Event/index";
import Support from "./pages/Support/index";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <MeshGradient amount={5} lifetime={8000} primaryColor={"#065147"} secondaryColor={"#0a3962"} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/booths" element={<Booths />} />
          <Route path="/food" element={<Food />} />
          <Route path="/event" element={<Event />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
