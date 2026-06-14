import { NavLink } from "react-router-dom";
import {
LayoutDashboard,
ScanLine,
Pill,
Stethoscope,
FolderHeart,
MapPin,
ShieldAlert,
Mic,
QrCode,
Bell,
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

export default function Sidebar() {
return ( <aside className="w-72 border-r bg-white h-screen p-5"> <div className="mb-10"> <h1 className="text-2xl font-bold text-blue-600">
MediCheck+ </h1>

    <p className="text-sm text-gray-500">
      Medicine Safety Platform
    </p>
  </div>

  <nav className="flex flex-col gap-2">
    <NavLink
      to="/dashboard"
      className={navClass}
    >
      <LayoutDashboard size={20} />
      Dashboard
    </NavLink>

    <NavLink
      to="/scanner"
      className={navClass}
    >
      <ScanLine size={20} />
      Medicine Scanner
    </NavLink>

    <NavLink
      to="/interaction"
      className={navClass}
    >
      <Pill size={20} />
      Drug Interaction
    </NavLink>

    <NavLink
      to="/symptoms"
      className={navClass}
    >
      <Stethoscope size={20} />
      Symptom Assessment
    </NavLink>

    <NavLink
      to="/vault"
      className={navClass}
    >
      <FolderHeart size={20} />
      Health Vault
    </NavLink>
    <NavLink
  to="/reminders"
  className={navClass}
>
  <Bell size={20} />
  Reminders
</NavLink>

    <hr className="my-4" />

    <div className="text-xs uppercase text-gray-400 px-3">
      Upcoming Modules
    </div>

    <NavLink
  to="/services"
  className={navClass}
>
  <MapPin size={20} />
  Nearby Services
</NavLink>

    <NavLink
  to="/counterfeit"
  className={navClass}
>
  <ShieldAlert size={20} />
  Counterfeit Detection
</NavLink>

   <NavLink
  to="/voice"
  className={navClass}
>
  <Mic size={20} />
  Voice Assistant
</NavLink>
    
    <NavLink
  to="/profile"
  className={navClass}
>
  <QrCode size={20} />
  Profile
</NavLink>

    <NavLink
  to="/emergency-profile"
  className={navClass}
>
  <ShieldAlert size={20} />
  Emergency Profile
</NavLink>
  </nav>
</aside>


);
}
