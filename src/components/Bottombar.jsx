import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Settings,
  Menu,
  LayoutDashboard,
  ClipboardList,
  HelpCircle,
  Phone,
  Users,
  MessageCircleMore,
  Info,
  Medal,
  X
} from "lucide-react";

const Bottombar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-50 border-t border-gray-700">
        {/* Main Bottom Navigation */}
        <div className="flex justify-around items-center p-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${isActive ? 'text-blue-500' : 'hover:text-sky-600 '
              }`
            }>
            <LayoutDashboard size={24} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/resources" className={({ isActive }) =>
              `flex flex-col items-center text-xs ${isActive ? 'text-blue-500' : 'hover:text-sky-600 '
              }`
            }>
            <ClipboardList size={24} />
            <span>Notes</span>
          </NavLink>

          <NavLink to="/leaderboard" className={({ isActive }) =>
              `flex flex-col items-center text-xs ${isActive ? 'text-blue-500' : 'hover:text-sky-600 '
              }`
            }>
            <Medal size={24} />
            <span>Leaderboard</span>
          </NavLink>

          <NavLink to="/societies" className={({ isActive }) =>
              `flex flex-col items-center text-xs ${isActive ? ' text-blue-500' : 'hover:text-sky-600 '
              }`
            }>
            <Users size={24} />
            <span>Societies</span>
          </NavLink>

          {/* Menu Toggle */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex flex-col items-center text-xs focus:outline-none hover:text-sky-600"
          >
            {showMore ? <X size={24} /> : <Menu size={24} />}
            <span>Menu</span>
          </button>
        </div>

        {/* Drop-Up Menu */}
        {showMore && (
          <div className="absolute bottom-14 left-0 right-0 bg-gray-900 text-white shadow-lg border-t border-gray-700 rounded-t-xl p-4">
            <div className="flex justify-around">
              <NavLink to="/chat" className="flex flex-col items-center text-xs">
                <MessageCircleMore size={24} />
                <span>Chats</span>
              </NavLink>
              <NavLink to="/support" className="flex flex-col items-center text-xs">
                <HelpCircle size={24} />
                <span>Support</span>
              </NavLink>
              <NavLink to="/sidebar_contact" className="flex flex-col items-center text-xs">
                <Phone size={24} />
                <span>Contact</span>
              </NavLink>
              <NavLink to="/about" className="flex flex-col items-center text-xs">
                <Info size={24} />
                <span>About</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Bottombar;
