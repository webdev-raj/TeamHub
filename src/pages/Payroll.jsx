import React, { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  FileText, 
  Download,
  CreditCard,
  Percent,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { mockEmployees, mockPayrollTrend, mockStats } from "../utils/mockData";

export default function Payroll() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadName, setDownloadName] = useState("");

  // Calculations
  const calculatedPayrollList = mockEmployees.map((emp) => {
    const basic = emp.payroll.basic;
    
    // Sum allowances
    const allowancesSum = Object.values(emp.payroll.allowances).reduce((a, b) => a + b, 0);
    
    // Sum benefits
    const benefitsSum = Object.values(emp.payroll.benefits).reduce((a, b) => a + b, 0);
    
    // Sum deductions
    const deductionsSum = Object.values(emp.payroll.deductions).reduce((a, b) => a + b, 0);
    
    // Net pay = Basic + Allowances - Deductions (Benefits are employer contributions, generally added to compensation package but not directly added to cash pay, or we can treat them as non-cash. We'll compute cash net pay = basic + allowances - deductions)
    const netSalary = basic + allowancesSum - deductionsSum;

    return {
      id: emp.id,
      name: emp.name,
      avatar: emp.avatar,
      role: emp.role,
      basic,
      allowancesSum,
      benefitsSum,
      deductionsSum,
      netSalary,
      status: emp.payroll.status,
      paymentDate: emp.payroll.paymentDate || "N/A"
    };
  });

  const totalPayrollVal = calculatedPayrollList.reduce((sum, item) => sum + item.netSalary, 0);
  const totalAllowancesVal = calculatedPayrollList.reduce((sum, item) => sum + item.allowancesSum, 0);
  const totalDeductionsVal = calculatedPayrollList.reduce((sum, item) => sum + item.deductionsSum, 0);
  const pendingPaymentsCount = calculatedPayrollList.filter(e => e.status !== "Paid").length;

  const stats = [
    {
      title: "Total Net Payroll",
      value: `$${totalPayrollVal.toLocaleString()}`,
      desc: "For the current pay cycle",
      icon: DollarSign,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Active Allowances",
      value: `$${totalAllowancesVal.toLocaleString()}`,
      desc: "Transportation & internet subsidies",
      icon: CreditCard,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Withholding Deductions",
      value: `$${totalDeductionsVal.toLocaleString()}`,
      desc: "Taxes & insurance withholdings",
      icon: Percent,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Pending Approvals",
      value: pendingPaymentsCount,
      desc: "Requires disbursement approval",
      icon: HelpCircle,
      color: "text-purple-650 bg-purple-50"
    }
  ];

  const handleDownload = (name) => {
    setDownloadName(name);
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadName("");
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {downloadSuccess && (
        <div className="fixed top-4 right-4 bg-slate-800 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 z-50 animate-[slideDown_0.2s_ease-out]">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold">Pay slip downloaded for <span className="text-emerald-300 font-bold">{downloadName}</span></span>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Payroll Trend */}
      <div data-tourkit="payroll-trend" className="bg-white border border-emerald-50/60 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Payroll Expenditure Trend</h3>
            <p className="text-xs text-slate-400 mt-0.5">Total monthly salary expenditures (USD)</p>
          </div>
          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Stability Target Met
          </span>
        </div>

        <div className="h-64 w-full text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockPayrollTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPayroll" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                labelStyle={{ fontWeight: "bold", color: "#334155" }}
              />
              <Area 
                type="monotone" 
                dataKey="payroll" 
                stroke="#10b981" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorPayroll)" 
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white border border-emerald-50/60 rounded-3xl shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Payroll Directory</h3>
          <p className="text-xs text-slate-400 mt-0.5">Disbursement ledger for current month</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-bold text-slate-450 uppercase tracking-wider">
                <th className="pb-3 pl-2">Employee</th>
                <th className="pb-3">Basic Salary</th>
                <th className="pb-3">Allowances</th>
                <th className="pb-3">Deductions</th>
                <th className="pb-3">Net Salary</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {calculatedPayrollList.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/40 transition-colors">
                  {/* Profile */}
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

                  {/* Basic */}
                  <td className="py-3.5 font-semibold text-slate-700">
                    ${emp.basic.toLocaleString()}
                  </td>

                  {/* Allowances */}
                  <td className="py-3.5 text-slate-500">
                    +${emp.allowancesSum.toLocaleString()}
                  </td>

                  {/* Deductions */}
                  <td className="py-3.5 text-rose-500">
                    -${emp.deductionsSum.toLocaleString()}
                  </td>

                  {/* Net Salary */}
                  <td className="py-3.5 font-bold text-slate-850">
                    ${emp.netSalary.toLocaleString()}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      emp.status === "Paid" 
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                        : emp.status === "Pending"
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-blue-50 text-blue-700 border border-blue-100"
                    }`}>
                      {emp.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3.5 text-right pr-2">
                    <button 
                      onClick={() => handleDownload(emp.name)}
                      className="inline-flex items-center gap-1 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-100 transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Slip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
