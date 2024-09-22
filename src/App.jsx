import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MeshGradient from "./components/MeshGradient/index";
import TimeTable from "./pages/TimeTable";

const App = () => {
  return (
    <>
      <MeshGradient amount={5} lifetime={8000} primaryColor={"#065147"} secondaryColor={"#0a3962"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<TimeTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
