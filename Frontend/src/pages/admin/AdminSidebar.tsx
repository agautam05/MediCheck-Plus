import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  ShieldAlert,
  Users,
  Pill,
  Server,
} from "lucide-react";

const navClass = ({
  isActive,
}: {
  isActive: boolean;
}) =>
  `flex items-center gap-3 rounded-lg p-3 transition ${
    isActive
      ? "bg-blue-100 text-blue-600 font-semibold"
      : "hover:bg-slate-100"
  }`;

export default function AdminSidebar() {
  return (
    <aside className="w-72 border-r bg-white h-screen p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-600">
          MediCheck+
        </h1>

        <p className="text-sm text-gray-500">
          Admin Portal
        </p>
      </div>

      <nav className="flex flex-col gap-2">

        <NavLink
          to="/admin"
          className={navClass}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className={navClass}
        >
          <BarChart3 size={20} />
          Health Analytics
        </NavLink>

        <NavLink
          to="/admin/counterfeit-reports"
          className={navClass}
        >
          <ShieldAlert size={20} />
          Counterfeit Reports
        </NavLink>

        <NavLink
          to="/admin/users"
          className={navClass}
        >
          <Users size={20} />
          Users Management
        </NavLink>

        <NavLink
          to="/admin/medicine-reports"
          className={navClass}
        >
          <Pill size={20} />
          Medicine Reports
        </NavLink>

        <NavLink
          to="/admin/system-monitoring"
          className={navClass}
        >
          <Server size={20} />
          System Monitoring
        </NavLink>

      </nav>
    </aside>
  );
}