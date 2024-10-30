import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const navItems = [
    {
      icon: "mingcute:dashboard-2-line",
      text: "Dashboard",
      path: "/community/home",
    },
    {
      icon: "mingcute:mail-send-line",
      text: "Posts",
      path: "/community/posts",
    },
    {
      icon: "mingcute:message-3-line",
      text: "Forums",
      path: "/community/forums",
    },
    {
      icon: "mingcute:trophy-line",
      text: "Startups",
      path: "/community/startups",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-xl"/>,
      text: "Collaborations",
      path: "/community/collaborations",
    },
    {
      icon: "mingcute:calendar-line",
      text: "Events",
      path: "/community/events",
    },
    { icon: "mingcute:book-2-line", text: "Blogs", path: "/community/blogs" },
    {
      icon: "mingcute:shopping-bag-2-line",
      text: "Marketplace",
      path: "/community/marketplace",
    },
    {
      icon: "mingcute:chart-bar-line",
      text: "Polls",
      path: "/community/polls",
    },
  ];

  return (
    <div className="w-64 bg-white text-slate-800 flex flex-col h-full">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-3 transition-colors ${
              isActive ? "bg-green-800 text-white" : "hover:bg-green-100"
            }`
          }
        >
          {item.text === "Collaborations" ? (
            item.icon
          ) : (
            <Icon icon={item.icon} className="text-xl" />
          )}
          <span>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
