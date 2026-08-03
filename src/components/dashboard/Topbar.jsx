import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 h-16 px-6 flex items-center justify-between">

      <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-lg w-80">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white w-full"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="text-white cursor-pointer" />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <p className="text-white font-semibold">
              Shreeni
            </p>

            <p className="text-slate-400 text-sm">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Topbar;