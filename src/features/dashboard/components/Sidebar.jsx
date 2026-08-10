import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  Bookmark,
  BookOpen,
  FileQuestion,
  FileText,
  StickyNote,
  Settings,
} from "lucide-react";

const menus = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Questions", icon: FileQuestion, path: "/questions" },
  { name: "Bookmarks", icon: Bookmark, path: "/bookmarks" },
  { name: "Quiz", icon: BookOpen, path: "/quiz" },
  { name: "AI Interview", icon: Bot, path: "/ai-interview" },
  { name: "Resume", icon: FileText, path: "/resume" },
  { name: "Notes", icon: StickyNote, path: "/notes" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold text-cyan-400 mb-8">
        InterviewAce
      </h1>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.name}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {menu.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

