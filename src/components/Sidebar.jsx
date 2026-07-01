import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  DollarSign,
  Mail,
  Calendar,
  FileSpreadsheet,
  UserPlus,
  Sparkles
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Employees", path: "/dashboard/employees", icon: Users },
    { name: "Performance", path: "/dashboard/performance", icon: BarChart3 },
    { name: "Payroll", path: "/dashboard/payroll", icon: DollarSign },
  ];

  const secondaryItems = [
    { name: "Inbox", icon: Mail, badge: "4" },
    { name: "Calendar", icon: Calendar },
    { name: "Leave Management", icon: FileSpreadsheet },
    { name: "Recruitment", icon: UserPlus },
  ];

  return (
    <aside data-tourkit="sidebar-navigation" className="w-64 bg-white border-r border-emerald-100 flex flex-col h-screen sticky top-0 shrink-0">
      {/* Brand Logo */}
      <div className="h-16 flex items-center px-6 border-b border-emerald-50 gap-2">
        <div className="bg-emerald-500 text-white p-1.5 rounded-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-bold text-xl text-slate-800 tracking-tight">
          Team<span className="text-emerald-500">Hub</span>
        </span>
      </div>

      {/* Navigation Menus */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-3">
            Core Modules
          </p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10"
                    : "text-slate-600 hover:``bg-emerald-50/50 hover:text-emerald-600"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-3">
            System Tools
          </p>
          <div className="space-y-1">
            {secondaryItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-emerald-600 hover:bg-emerald-50/20 cursor-not-allowed group transition-all duration-200"
                title="Available in TeamHub Pro"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-slate-350 group-hover:text-emerald-500" />
                  <span>{item.name}</span>
                </div>
                {item.badge ? (
                  <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                ) : (
                  <span className="text-[9px] border border-slate-200 px-1 py-0.2 rounded text-slate-300 group-hover:border-emerald-200 group-hover:text-emerald-500">
                    Pro
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Level Up Banner */}
      <div className="p-4 border-t border-emerald-50">
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 text-center">
          <h4 className="font-semibold text-sm text-slate-800 mb-1">
            Level Up Your HR
          </h4>
          <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
            Get TeamHub Pro for advanced leave analysis, applicant tracking, and report exports.
          </p>
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold py-2 px-3 rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-250">
            Get TeamHub Pro
          </button>
        </div>
      </div>
    </aside>
  );
}
