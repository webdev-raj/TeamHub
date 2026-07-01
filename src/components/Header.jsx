import React from "react";
import { useLocation } from "react-router-dom";
import { Search, Bell, Settings, MessageSquare, ChevronDown } from "lucide-react";
import { currentUser } from "../utils/mockData";

export default function Header() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Overview";
      case "/dashboard/employees":
        return "Employee Directory";
      case "/dashboard/performance":
        return "Performance Analytics";
      case "/dashboard/payroll":
        return "Payroll Summary";
      default:
        return "TeamHub Dashboard";
    }
  };

  return (
    <header className="h-16 bg-white border-b border-emerald-50 px-8 flex items-center justify-between sticky top-0 z-10 shrink-0">
      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          {getPageTitle()}
        </h1>
        <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
          Welcome back, {currentUser.name}
        </p>
      </div>

      {/* Center/Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-64 md:w-80 hidden md:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-[#f6fbf8] border border-emerald-50 focus:border-emerald-300 focus:bg-white text-sm rounded-xl pl-10 pr-4 py-2 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-300 transition-all duration-200"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 border-r border-slate-100 pr-4">
          <button className="p-2 text-slate-500 hover:text-emerald-500 hover:bg-emerald-50/50 rounded-xl transition-colors duration-200 relative">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          </button>
          <button className="p-2 text-slate-500 hover:text-emerald-500 hover:bg-emerald-50/50 rounded-xl transition-colors duration-200 relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          </button>
          <button className="p-2 text-slate-500 hover:text-emerald-500 hover:bg-emerald-50/50 rounded-xl transition-colors duration-200">
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Card */}
        <div data-tourkit="user-profile" className="flex items-center gap-3 cursor-pointer group">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-9 h-9 rounded-full object-cover border-2 border-emerald-100 group-hover:border-emerald-300 transition-colors duration-200"
          />
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-200">
              {currentUser.name}
            </p>
            <p className="text-[10px] text-slate-400 font-medium">
              {currentUser.role}
            </p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors duration-200 hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
