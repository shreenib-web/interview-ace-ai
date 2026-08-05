import { Outlet } from "react-router-dom";
import Sidebar from "../features/dashboard/components/Sidebar";
import Topbar from "../features/dashboard/components/Topbar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
