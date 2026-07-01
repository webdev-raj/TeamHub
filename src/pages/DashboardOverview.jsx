import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  UserCheck, 
  Clock, 
  DollarSign, 
  ArrowUpRight, 
  CalendarDays, 
  Check, 
  X,
  FileText
} from "lucide-react";
import { mockEmployees, mockLeaveRequests, mockStats } from "../utils/mockData";

export default function DashboardOverview() {
  const stats = [
    {
      title: "Total Employees",
      value: mockStats.totalEmployees,
      change: "+1 this month",
      trend: "positive",
      icon: Users,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Active Now",
      value: mockStats.activeCount,
      change: "1 on leave / inactive",
      trend: "neutral",
      icon: UserCheck,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Avg Attendance",
      value: mockStats.attendanceRate,
      change: "+0.4% from last month",
      trend: "positive",
      icon: Clock,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Monthly Expense",
      value: mockStats.monthlyPayroll,
      change: "Due on 28th",
      trend: "neutral",
      icon: DollarSign,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  // Get active/recent employees (excluding inactive, limit to 5)
  const recentEmployees = mockEmployees.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-6 md:p-8 text-white shadow-lg shadow-emerald-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">Enhance Your Workspace Management</h2>
          <p className="text-emerald-50 text-sm max-w-xl leading-relaxed">
            TeamHub provides custom modules to trace performance, approve leave applications, monitor payroll expenditures, and evaluate team competencies efficiently.
          </p>
        </div>
        <Link 
          to="/dashboard/employees" 
          className="bg-white text-emerald-600 hover:bg-emerald-50 transition-all font-semibold text-sm px-5 py-3 rounded-2xl shrink-0 self-start md:self-auto flex items-center gap-1.5 shadow-sm"
        >
          Manage Team
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Cards */}
      <div data-tourkit="stats-overview" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-emerald-50/60 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                {stat.title}
              </span>
              <span className="text-2xl font-extrabold text-slate-800 block">
                {stat.value}
              </span>
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span className={stat.trend === "positive" ? "text-emerald-500 font-bold" : "text-slate-500"}>
                  {stat.change}
                </span>
              </span>
            </div>
            <div className={`p-4 rounded-2xl ${stat.color} group-hover:scale-110 transition-transform duration-350`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Employees Table */}
        <div data-tourkit="team-directory" className="bg-white border border-emerald-50/60 rounded-3xl shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Team Directory Snapshot</h3>
              <p className="text-xs text-slate-400 mt-0.5">List of active team members</p>
            </div>
            <Link 
              to="/dashboard/employees" 
              className="text-xs font-bold text-emerald-500 hover:text-emerald-600 hover:underline flex items-center gap-0.5"
            >
              See Full List
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-bold text-slate-450 uppercase tracking-wider">
                  <th className="pb-3 pl-2">Employee</th>
                  <th className="pb-3">Department</th>
                  <th className="pb-3">Join Date</th>
                  <th className="pb-3 text-right pr-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {recentEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-3.5 pl-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={emp.avatar} 
                          alt={emp.name} 
                          className="w-9 h-9 rounded-full object-cover border border-emerald-100" 
                        />
                        <div>
                          <p className="font-bold text-slate-800 leading-tight">{emp.name}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 text-slate-600 font-medium">
                      {emp.department}
                    </td>
                    <td className="py-3.5 text-slate-500 text-xs">
                      {emp.joinDate}
                    </td>
                    <td className="py-3.5 text-right pr-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        emp.status === "Active" 
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leave Requests Overview */}
        <div data-tourkit="leave-applications" className="bg-white border border-emerald-50/60 rounded-3xl shadow-sm p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Leave Applications</h3>
              <p className="text-xs text-slate-400 mt-0.5">Recent filings from employees</p>
            </div>
            <CalendarDays className="w-5 h-5 text-emerald-500" />
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto max-h-[350px] pr-1">
            {mockLeaveRequests.map((request) => (
              <div 
                key={request.id} 
                className="p-4 rounded-2xl border border-emerald-50 bg-[#fafdfb] space-y-3 shadow-sm hover:border-emerald-100 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={request.avatar} 
                      alt={request.employeeName} 
                      className="w-8 h-8 rounded-full object-cover" 
                    />
                    <div>
                      <p className="font-bold text-xs text-slate-800">{request.employeeName}</p>
                      <p className="text-[10px] text-slate-400">{request.type}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    request.status === "Pending" 
                      ? "bg-amber-100 text-amber-800" 
                      : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {request.status}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 space-y-1 pl-0.5">
                  <p><span className="font-semibold text-slate-600">Duration:</span> {request.duration}</p>
                  <p className="italic">"{request.reason}"</p>
                </div>

                {request.status === "Pending" && (
                  <div className="flex gap-2 pt-1.5 border-t border-emerald-50/40">
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[10px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 shadow-sm transition-all">
                      <Check className="w-3 h-3" /> Approve
                    </button>
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-[10px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-all">
                      <X className="w-3 h-3" /> Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
