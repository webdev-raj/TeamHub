import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  FileText, 
  Download, 
  X, 
  Briefcase, 
  Globe, 
  ChevronRight,
  TrendingUp,
  FileSignature
} from "lucide-react";
import { mockEmployees } from "../utils/mockData";

export default function Employees() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedEmp, setSelectedEmp] = useState(null);

  // Filter logic
  const filteredEmployees = mockEmployees.filter((emp) => {
    const matchesSearch = 
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());
    
    const matchesDept = deptFilter === "All" || emp.department === deptFilter;
    const matchesType = typeFilter === "All" || emp.employmentType === typeFilter;
    const matchesStatus = statusFilter === "All" || emp.status === statusFilter;

    return matchesSearch && matchesDept && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6 relative">
      {/* Search and Filters Header */}
      <div data-tourkit="employee-filters" className="bg-white border border-emerald-50/60 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Team Roster</h3>
            <p className="text-xs text-slate-400 mt-0.5">Search and filter through all employees</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search by name, role, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#f6fbf8] border border-emerald-50 focus:border-emerald-300 focus:bg-white text-sm rounded-xl pl-10 pr-4 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-300 transition-all duration-200"
            />
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-50">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-450 uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5 text-emerald-500" />
            <span>Filters</span>
          </div>

          {/* Department Filter */}
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="bg-white border border-slate-200 hover:border-emerald-200 text-xs font-semibold rounded-xl px-3 py-2 text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-300 cursor-pointer transition-all"
          >
            <option value="All">All Departments</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Product">Product</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>

          {/* Employment Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white border border-slate-200 hover:border-emerald-200 text-xs font-semibold rounded-xl px-3 py-2 text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-300 cursor-pointer transition-all"
          >
            <option value="All">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Contract">Contract</option>
            <option value="Part-Time">Part-Time</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-slate-200 hover:border-emerald-200 text-xs font-semibold rounded-xl px-3 py-2 text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-300 cursor-pointer transition-all"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* Clear Filter Indicator */}
          {(search !== "" || deptFilter !== "All" || typeFilter !== "All" || statusFilter !== "All") && (
            <button 
              onClick={() => {
                setSearch("");
                setDeptFilter("All");
                setTypeFilter("All");
                setStatusFilter("All");
              }}
              className="text-xs text-emerald-500 hover:text-emerald-600 font-semibold underline ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Employees Grid */}
      {filteredEmployees.length === 0 ? (
        <div className="bg-white rounded-3xl border border-emerald-55/40 p-12 text-center text-slate-500 shadow-sm">
          <p className="font-semibold text-lg">No team members match your criteria.</p>
          <p className="text-sm text-slate-400 mt-1">Try resetting the filters or modifying your search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((emp) => (
            <div 
              key={emp.id}
              className="bg-white border border-emerald-50/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group"
            >
              {/* Status Badge */}
              <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                emp.status === "Active" 
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                  : "bg-amber-50 text-amber-700 border border-amber-100"
              }`}>
                {emp.status}
              </span>

              {/* Profile Pic */}
              <div className="relative mt-2">
                <img 
                  src={emp.avatar} 
                  alt={emp.name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-emerald-50 group-hover:border-emerald-100 transition-colors" 
                />
              </div>

              {/* Name & Role */}
              <h4 className="font-bold text-slate-800 mt-4 leading-tight group-hover:text-emerald-650 transition-colors">
                {emp.name}
              </h4>
              <p className="text-xs text-slate-400 font-medium mt-1">
                {emp.role}
              </p>

              {/* Dept Pill */}
              <span className="bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-0.5 rounded-lg mt-3 block">
                {emp.department}
              </span>

              {/* Contact / Join Date */}
              <div className="w-full border-t border-slate-50 mt-5 pt-4 text-xs text-slate-500 space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{emp.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Joined {emp.joinDate}</span>
                </div>
              </div>

              {/* CTA Link */}
              <button 
                onClick={() => setSelectedEmp(emp)}
                className="w-full mt-5 bg-emerald-50 hover:bg-emerald-500 group-hover:bg-emerald-500 text-emerald-600 group-hover:text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-all duration-300 shadow-sm shadow-emerald-500/0 group-hover:shadow-emerald-500/10"
              >
                View Details
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Slide-out Employee Detail Drawer Overlay */}
      {selectedEmp && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
          {/* Backdrop click close */}
          <div className="flex-1" onClick={() => setSelectedEmp(null)} />

          {/* Drawer Body */}
          <div className="w-full max-w-2xl bg-white h-screen flex flex-col shadow-2xl relative animate-[slideLeft_0.3s_ease-out]">
            {/* Header */}
            <div className="h-16 border-b border-slate-100 px-6 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setSelectedEmp(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Employee Details
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {selectedEmp.id}
                  </span>
                </div>
              </div>

              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                selectedEmp.status === "Active" 
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                  : "bg-amber-50 text-amber-700 border border-amber-100"
              }`}>
                {selectedEmp.status}
              </span>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Avatar Summary Header */}
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/20 border border-emerald-50/50 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-5">
                <img 
                  src={selectedEmp.avatar} 
                  alt={selectedEmp.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md shadow-emerald-500/5" 
                />
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-bold text-slate-800">{selectedEmp.name}</h3>
                  <p className="text-xs text-emerald-600 font-bold">{selectedEmp.role}</p>
                  <p className="text-[11px] text-slate-450">{selectedEmp.department}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                    <span className="bg-white border border-slate-100 text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded">
                      Type: <span className="text-slate-800 font-bold">{selectedEmp.employmentType}</span>
                    </span>
                    <span className="bg-white border border-slate-100 text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded">
                      Model: <span className="text-slate-800 font-bold">{selectedEmp.workModel}</span>
                    </span>
                    <span className="bg-white border border-slate-100 text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded">
                      Since: <span className="text-slate-800 font-bold">{selectedEmp.joinDate}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid 2-Col */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-sm">
                  <h4 className="font-bold text-sm text-slate-850 border-b border-slate-50 pb-2">
                    Personal Info
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Gender</span>
                      <span className="text-slate-800 font-bold">{selectedEmp.gender}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Birth Date</span>
                      <span className="text-slate-800 font-bold">{selectedEmp.dob}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email Address</span>
                      <span className="text-slate-800 font-bold truncate max-w-[150px]">{selectedEmp.email}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Mobile Phone</span>
                      <span className="text-slate-800 font-bold">{selectedEmp.phone}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Address</span>
                      <span className="text-slate-800 font-bold truncate max-w-[150px]">{selectedEmp.address}</span>
                    </div>
                  </div>
                </div>

                {/* Leaves Tracker Grid */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-sm">
                  <h4 className="font-bold text-sm text-slate-850 border-b border-slate-50 pb-2">
                    Leaves Breakdown
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-emerald-50/30 border border-emerald-50 rounded-xl p-3">
                      <span className="text-[20px] font-extrabold text-emerald-600">
                        {selectedEmp.leaves.available}
                        <span className="text-xs text-slate-400 font-normal">/{selectedEmp.leaves.total}</span>
                      </span>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-1">Available</p>
                    </div>
                    <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-3">
                      <span className="text-[20px] font-extrabold text-slate-700">
                        {selectedEmp.leaves.used}
                      </span>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-1">Used</p>
                    </div>
                    <div className="bg-blue-50/30 border border-blue-50 rounded-xl p-3">
                      <span className="text-[16px] font-extrabold text-blue-600">
                        {selectedEmp.leaves.breakdown.annual}
                      </span>
                      <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wide mt-1">Annual</p>
                    </div>
                    <div className="bg-amber-50/30 border border-amber-50 rounded-xl p-3">
                      <span className="text-[16px] font-extrabold text-amber-600">
                        {selectedEmp.leaves.breakdown.sick}
                      </span>
                      <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wide mt-1">Sick</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Summary & Hours chart */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Performance overview */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-850 border-b border-slate-50 pb-2 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-500" /> Performance overview
                    </h4>
                    
                    <div className="flex items-baseline gap-2 mt-4">
                      <span className="text-3xl font-black text-slate-800">{selectedEmp.performance.rating}</span>
                      <span className="text-xs text-slate-400 font-medium">/ 5.0 Rating</span>
                    </div>

                    <span className="inline-block bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded mt-2">
                      {selectedEmp.performance.status}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed italic mt-3 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                      "{selectedEmp.performance.feedback}"
                    </p>
                  </div>
                  
                  <div className="pt-3 text-xs text-slate-500 flex justify-between items-center border-t border-slate-50">
                    <span>Goals Accomplished</span>
                    <span className="font-bold text-slate-850">
                      {selectedEmp.performance.goalsCompleted}/{selectedEmp.performance.totalGoals}
                    </span>
                  </div>
                </div>

                {/* Hours Logged simulated chart */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-sm">
                  <h4 className="font-bold text-sm text-slate-850 border-b border-slate-50 pb-2">
                    Hours Logged (This Week)
                  </h4>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-medium">Average weekly output</p>
                    <p className="text-xl font-extrabold text-slate-850">
                      {selectedEmp.hoursLogged.reduce((a, b) => a + b, 0)} hours total
                    </p>
                  </div>

                  {/* Tailwind-based Bar Chart */}
                  <div className="flex items-end justify-between h-28 pt-4 px-2">
                    {selectedEmp.hoursLogged.map((hours, i) => {
                      const weekdays = ["M", "T", "W", "T", "F"];
                      const maxHours = 50;
                      // Height percentage
                      const heightPercent = hours > 0 ? (hours / maxHours) * 100 : 8;
                      return (
                        <div key={i} className="flex flex-col items-center flex-1 gap-2 group">
                          {/* Tooltip value */}
                          <span className="opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded absolute translate-y-[-24px] pointer-events-none transition-opacity">
                            {hours}h
                          </span>
                          <div 
                            style={{ height: `${heightPercent}%` }}
                            className={`w-5 rounded-md transition-all duration-300 ${
                              hours === 0 ? "bg-slate-100 border border-dashed border-slate-200" : "bg-emerald-500 group-hover:bg-emerald-600"
                            }`} 
                          />
                          <span className="text-[10px] font-bold text-slate-400">{weekdays[i]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Documents and Notes */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-sm">
                <h4 className="font-bold text-sm text-slate-850 border-b border-slate-50 pb-2 flex items-center gap-1.5">
                  <FileSignature className="w-4 h-4 text-emerald-500" /> Documents
                </h4>
                <div className="space-y-2">
                  {selectedEmp.documents.map((doc, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-emerald-100 bg-[#fbfdfc] transition-all"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-4 h-4 text-slate-450 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-700 truncate">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{doc.size} • Uploaded {doc.date}</p>
                        </div>
                      </div>
                      <button className="p-1.5 text-slate-450 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-amber-50/20 border border-amber-100/50 rounded-2xl p-5 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Internal HR Notes
                </h4>
                <p className="text-xs text-slate-650 leading-relaxed pl-0.5">
                  {selectedEmp.internalNotes || "No internal notes logged."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
