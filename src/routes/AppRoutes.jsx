import { Routes, Route } from "react-router-dom";

import Home from "../components/common/Home";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../features/dashboard/pages/Dashboard";
import ProgressChart from "../features/dashboard/components/ProgressChart";
import Questions from "../features/questions/pages/Questions";
import Bookmarks from "../features/questions/pages/Bookmarks";
import Quiz from "../pages/quiz/Quiz";
import AIInterview from "../pages/aiInterview/AIInterview";

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
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/ai-interview" element={<AIInterview />} />
      
      </Route>
    </Routes>
  );
}

export default AppRoutes;
