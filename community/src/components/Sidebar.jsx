import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  ClipboardList,
  HelpCircle,
  Phone,
  Users,
  MessageCircleMore,
  Info,
  Medal,
  LogOut,
} from "lucide-react";

const sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`min-h-screen text-white p-5 transition-all ease-in-out ${isCollapsed ? "md:w-24 w-21" : "md:w-64 w-44"}  rounded-[50px] ml-3 mr-3`}>
      <div className={`fixed top-0 left-3 min-h-screen bg-gray-900 text-white p-5 transition-all ease-in-out ${isCollapsed ? "md:w-24 w-21" : "md:w-64 w-44"} border-2 rounded-[50px]  mr-3`}>
        <div className="flex items-center gap-2 mb-2 mr-2">
          <div className={`${isCollapsed ? "flex justify-center items-center w-11 h-11 bg-blue-600 rounded-lg ml-2 mt-4" : "hidden "}`}>
            <h1>X</h1>
          </div>
          <img className={`${isCollapsed ? "hidden" : "block"} mt-4 `} src="src/assets/images/logo.svg" alt="Xyphora" />
        </div>
        {/* Sidebar Toggle Button */}
        <button onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 w-full space-x-3 mb-2 mt-5 rounded-lg transition-colors  text-white hover:bg-gray-50 hover:text-black">
          <span className="font-medium"><Menu size={22} /></span>
        </button>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <LayoutDashboard size={22} />
            {!isCollapsed && <span className="font-medium">Dashboard</span>}

          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <ClipboardList size={22} />
            {!isCollapsed && <span className="font-medium">Notes & Resources</span>}

          </NavLink>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Medal size={22} />
            {!isCollapsed && <span className="font-medium">Leaderboard</span>}
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <MessageCircleMore size={22} />
            {!isCollapsed && <span className="font-medium">Chats</span>}

          </NavLink>

          <NavLink
            to="/societies"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Users size={22} />
            {!isCollapsed && <span className="font-medium">My Societies</span>}

          </NavLink>

          <hr />

          {/* <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Settings size={22} /> {!isCollapsed && <span>Settings</span>}
          </NavLink> */}

          <NavLink
            to="/support"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <HelpCircle size={22} /> {!isCollapsed &&
              <span className="font-medium">Support</span>}
          </NavLink>

          <NavLink
            to="/sidebar_contact"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Phone size={22} /> {!isCollapsed &&
              <span className="font-medium">Contact Us</span>}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Info size={22} /> {!isCollapsed &&
              <span className="font-medium">About Us</span>}
          </NavLink>

          <NavLink
            to="/Logout"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <LogOut size={22} /> {!isCollapsed && <span>Logout</span>}
          </NavLink>

        </nav>
      </div>

    </div>
  );
};

export default sidebar;
