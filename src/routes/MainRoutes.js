import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
// import Dashboard from "../pages/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default MainRoutes;
