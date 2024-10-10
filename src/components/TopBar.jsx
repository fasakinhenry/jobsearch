import React from "react";
import avatar from "../assets/images/avatars/avatar10.png";
import { Buildings, Home, Logout, SearchNormal, User } from "iconsax-react";
import { GridBackground } from "../pages/App/LandingPage";
import { NavLink } from "react-router-dom";
import {
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const TopBar = () => {
  const active = (isActive) => {
    isActive ? "flex gap-2 items-center rounded-full bg-green-500 text-white px-3 py-2" : "flex gap-2 items-center rounded-full bg-gray-500 text-black px-3 py-2";
  };
  return (
    <div className=" py-5 w-full">
      <GridBackground />
      <div className="container z-20 px-20 relative grid gap-4">
        <div className="flex items-center gap-20">
          <h2 className="text-3xl font-bold">Joblier</h2>
          <div className="bg-white border-2 px-4 w-2/4 mx-auto py-3 rounded-full flex items-center gap-3">
            <SearchNormal className="text-slate-500 h-6 w-6" />
            <input
              type="text"
              className="w-full"
              placeholder="Search for jobs"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="text-white flex items-center gap-2 bg-red-500 rounded-full px-3 py-2">
              <Logout />
              <p>Logout</p>
            </button>
            <img src={avatar} className="h-8 w-8 rounded-full" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <NavLink to="/home"
            className={active}
          >
            
            <Home className="h-6 w-6" />
            <p>Home</p>
          </NavLink>
          <NavLink
            className={() =>active}
          >
            <Buildings className="h-6 w-6" />
            <p>Companies</p>
          </NavLink>
          <NavLink
            className={active}
          >
            <User className="h-6 w-6" />
            <p>Profile</p>
          </NavLink>
          <NavLink to="/notifications"
            className={active}
          >
            <BellIcon className="h-6 w-6" />
            <p>Notifications</p>
          </NavLink>
          <NavLink
            className={active}
          >
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
            <p>Messages</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
