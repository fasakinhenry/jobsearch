import avatar from "../assets/images/avatars/avatar10.png";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import {
  Building3,
  Home,
  Logout,
  Menu,
  SearchNormal,
  User,
} from "iconsax-react";
import { GridBackground } from "../pages/App/LandingPage";
import {
  Bars2Icon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const linkClass = ({ isActive }) =>
  isActive
    ? "flex gap-2 items-center rounded-full bg-green-500 text-white px-3 py-2"
    : "flex gap-2 items-center rounded-full bg-gray-200 text-black px-3 py-2";
const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" py-5 w-full">
      {menuOpen && (
        <div className="top-0 h-[100vh] w-[100vw] z-30 bg-green-500  fixed">
          <div className="min-h-screen flex flex-col flex-grow justify-center items-center text-center gap-3 ">
            <div
              onClick={() => setMenuOpen(false)}
              className="absolute right-10 top-10 text-white cursor-pointer hover:text-black"
            >
              <XMarkIcon className="h-6 w-6" />
            </div>
            <p className="text-xl hover:text-black cursor-pointer text-white">
              Logout
            </p>
            <p className="text-xl hover:text-black cursor-pointer text-white">
              Search
            </p>
          </div>
        </div>
      )}
      <GridBackground />
      <div className="container z-20 px-6 md:px-20 relative grid gap-4">
        <div className="flex items-center justify-between md:justify-normal gap-20">
          <Link to="/" className="text-3xl font-bold">
            Joblier
          </Link>
          <div className="hidden md:flex bg-white border-2 px-4 w-2/4 mx-auto py-3 rounded-full items-center gap-3">
            <SearchNormal className="text-slate-500 h-6 w-6" />
            <input
              type="text"
              className="w-full"
              placeholder="Search for jobs"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="block md:hidden " onClick={() => setMenuOpen(true)}>
              <Bars3BottomLeftIcon className="h-6 w-6" />
            </div>
            <Button bgColor="bg-red-500 hidden md:flex">
              <Logout />
              <p>Logout</p>
            </Button>
            <img src={avatar} className="h-8 w-8 rounded-full" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-5 overflow-scroll">
          <NavLink to="/home" className={linkClass}>
            <Home className="h-6 w-6" />
            <p>Home</p>
          </NavLink>
          <NavLink to="/companies" className={linkClass}>
            <Building3 className="h-6 w-6" />
            <p>Companies</p>
          </NavLink>
          <NavLink to="/notifications" className={linkClass}>
            <BellIcon className="h-6 w-6" />
            <p>Notifications</p>
          </NavLink>
          <NavLink to="/messages" className={linkClass}>
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
            <p>Messages</p>
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            <User className="h-6 w-6" />
            <p>Profile</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
