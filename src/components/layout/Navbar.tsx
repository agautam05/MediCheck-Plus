import { Bell, UserCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("role");

    navigate("/login");
  };
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">

      <div>
        <h1 className="text-xl font-bold text-slate-800">
          MediCheck+
        </h1>

        <p className="text-xs text-gray-500">
          Medicine Safety Platform
        </p>
      </div>

      <div className="flex items-center gap-5">

        {/* Notification */}

        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User Info */}

        <div className="flex items-center gap-2">

          <UserCircle size={32} />

          <div>
            <p className="text-sm font-medium">
              {user.name || "Guest User"}
            </p>

            <p className="text-xs text-gray-500">
              {user.role === "admin"
                ? "Administrator"
                : "Citizen User"}
            </p>
          </div>

        </div>
        <button
  onClick={() => setDarkMode(!darkMode)}
  className="border rounded-lg p-2"
>
  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
</button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}