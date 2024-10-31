import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bell, MessageCircle, Menu } from "lucide-react";
import { Icon } from "@iconify/react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const activeClassName = "text-green-600 flex items-center";
  const inactiveClassName =
    "text-gray-600 flex items-center hover:text-green-600";
  
  const { user, logoutUser } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center  space-x-4">
          <button
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center">
            <Icon
              icon="mingcute:group-line"
              className="w-8 h-8 text-green-600"
            />
            <NavLink
              to="/"
              className="text-xl md:text-2xl font-bold ml-2 text-green-600"
            >
              {user ? user.name : 'Joblier'}
            </NavLink>
          </div>
        </div>
        <nav className={`${isNavOpen ? "block" : "hidden"} md:block `}>
          <ul className="flex space-x-6 text-[1.1rem]">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                <Icon icon="mingcute:home-4-fill" className="mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-work"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                <Icon icon="mingcute:search-3-line" className="mr-2" />
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/companies"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                <Icon icon="mingcute:building-1-fill" className="mr-2" />
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community/home"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                <Icon icon="mingcute:comment-2-line" className="mr-2" />
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="text-2xl flex items-center space-x-4">
          <Icon
            icon="mingcute:notification-newdot-line"
            className="text-gray-600"
          />
          <Icon icon="mingcute:message-3-line" className="text-gray-600" />
          <div className="w-8 h-8 bg-gray-200 p-[0.3rem] rounded-full flex items-center justify-center">
            <Icon icon="mingcute:user-2-line" className="text-gray-600" />
          </div>
          <button onClick={logoutUser} className="p-2 rounded-md text-sm text-white hover:bg-red-400 bg-green-400">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
