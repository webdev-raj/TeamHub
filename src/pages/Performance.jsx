import React from "react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from "recharts";
import { 
  Star, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { 
  mockEmployees, 
  mockPerformanceCategory, 
  mockMonthlyPerformanceTrend 
} from "../utils/mockData";

export default function Performance() {
  // Stats calculation
  const totalEmployees = mockEmployees.length;
  const activeEmployees = mockEmployees.filter(e => e.status === "Active");
  const avgRating = (activeEmployees.reduce((sum, e) => sum + e.performance.rating, 0) / activeEmployees.length).toFixed(2);
  const totalGoals = activeEmployees.reduce((sum, e) => sum + e.performance.totalGoals, 0);
  const goalsCompleted = activeEmployees.reduce((sum, e) => sum + e.performance.goalsCompleted, 0);
  const goalSuccessRate = ((goalsCompleted / totalGoals) * 100).toFixed(1);

  const stats = [
    {
      title: "Average Team Rating",
      value: `${avgRating} / 5.0`,
      desc: "Top standard benchmark",
      icon: Star,
      color: "text-amber-500 bg-amber-50"
    },
    {
      title: "Goal Completion Rate",
      value: `${goalSuccessRate}%`,
      desc: `${goalsCompleted} of ${totalGoals} objectives met`,
      icon: Target,
      color: "text-emerald-500 bg-emerald-50"
    },
    {
      title: "Top Rated Employees",
      value: mockEmployees.filter(e => e.performance.rating >= 4.7).length,
      desc: "Rating above 4.7",
      icon: CheckCircle2,
      color: "text-blue-550 bg-blue-50"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-emerald-50/60 rounded-3xl p-5 shadow-sm flex items-center justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {stat.title}
              </span>
              <span className="text-2xl font-extrabold text-slate-800 block">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-medium block">
                {stat.desc}
              </span>
            </div>
            <div className={`p-4 rounded-2xl ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Trend Chart */}
        <div className="bg-white border border-emerald-50/60 rounded-3xl p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Team Performance Over Time</h3>
              <p className="text-xs text-slate-400 mt-0.5">Average team output indices by month</p>
            </div>
            <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> High Productivity
            </span>
          </div>

          <div className="h-72 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockMonthlyPerformanceTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis domain={[70, 100]} stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                  labelStyle={{ fontWeight: "bold", color: "#334155" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  activeDot={{ r: 6 }} 
                  dot={{ stroke: "#10b981", strokeWidth: 2, r: 4, fill: "#ffffff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rating Breakdown Pie Chart */}
        <div className="bg-white border border-emerald-50/60 rounded-3xl p-6 shadow-sm flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Rating Breakdown</h3>
              <p className="text-xs text-slate-400 mt-0.5">Employee segmentations</p>
            </div>
          </div>

          <div className="h-56 w-full relative flex items-center justify-center flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockPerformanceCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {mockPerformanceCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Donut Center Count */}
            <div className="absolute text-center">
              <span className="text-2xl font-black text-slate-800">{totalEmployees}</span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Rated</p>
            </div>
          </div>

          {/* Legends */}
          <div className="space-y-2 mt-4">
            {mockPerformanceCategory.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-500 font-medium">{item.category}</span>
                </div>
                <span className="font-bold text-slate-800">{item.count} Employees</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employee Performance Table */}
      <div className="bg-white border border-emerald-50/60 rounded-3xl shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Performance Assessment</h3>
          <p className="text-xs text-slate-400 mt-0.5">Summary of goals, ratings, and internal feedback</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-bold text-slate-450 uppercase tracking-wider">
                <th className="pb-3 pl-2">Employee</th>
                <th className="pb-3">Overall Rating</th>
                <th className="pb-3">Objectives Progress</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 max-w-xs truncate hidden md:table-cell">Recent Feedback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {mockEmployees.map((emp) => {
                const completionPercentage = (emp.performance.goalsCompleted / emp.performance.totalGoals) * 100;
                return (
                  <tr key={emp.id} className="hover:bg-slate-50/40 transition-colors">
                    {/* Employee Profile */}
                    <td className="py-3.5 pl-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={emp.avatar} 
                          alt={emp.name} 
                          className="w-9 h-9 rounded-full object-cover border border-emerald-50" 
                        />
                        <div>
                          <p className="font-bold text-slate-800 leading-tight">{emp.name}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{emp.role}</p>
                        </div>
                      </div>
                    </td>

                    {/* Overall Rating */}
                    <td className="py-3.5">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="font-bold text-slate-800">{emp.performance.rating}</span>
                        <span className="text-[11px] text-slate-400">/5.0</span>
                      </div>
                    </td>

                    {/* Progress Bar */}
                    <td className="py-3.5">
                      <div className="space-y-1.5 max-w-[150px]">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                          <span>{completionPercentage.toFixed(0)}%</span>
                          <span>{emp.performance.goalsCompleted}/{emp.performance.totalGoals}</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div 
                            style={{ width: `${completionPercentage}%` }} 
                            className={`h-full rounded-full transition-all duration-500 ${
                              completionPercentage >= 80 
                                ? "bg-emerald-500" 
                                : completionPercentage >= 50 
                                  ? "bg-amber-400" 
                                  : "bg-rose-500"
                            }`} 
                          />
                        </div>
                      </div>
                    </td>

                    {/* Performance Status Badge */}
                    <td className="py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        emp.performance.status === "Exceeds Expectations" 
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                          : emp.performance.status === "Meets Expectations"
                            ? "bg-blue-50 text-blue-700 border border-blue-100"
                            : "bg-rose-50 text-rose-700 border border-rose-100"
                      }`}>
                        {emp.performance.status}
                      </span>
                    </td>

                    {/* Feedback */}
                    <td className="py-3.5 text-xs text-slate-500 max-w-xs truncate hidden md:table-cell italic">
                      "{emp.performance.feedback}"
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
