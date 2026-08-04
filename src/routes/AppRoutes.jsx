import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ProgressChart from "../components/dashboard/ProgressChart";
import Questions from "../pages/questions/Questions";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/ProgressChart" element={<ProgressChart />} />
        <Route path="/questions" element={<Questions />} />
      
      </Route>
    </Routes>
  );
}

export default AppRoutes;
