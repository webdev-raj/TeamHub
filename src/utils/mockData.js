// Rich dummy data for TeamHub HR Dashboard

export const currentUser = {
  name: "Davis Levin",
  role: "HR Director",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  email: "davis.levin@teamhub.com"
};

export const mockEmployees = [
  {
    id: "EMP-2201",
    name: "Mia Torres",
    role: "HR Officer",
    department: "Human Resources",
    email: "mia.torres@teamhub.com",
    phone: "+1 (555) 345-7890",
    joinDate: "12 Feb 2022",
    status: "Active",
    employmentType: "Full-Time",
    workModel: "Hybrid",
    gender: "Female",
    dob: "28 March 1992",
    address: "24 Forest Hills Dr, Boston, MA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 20,
      used: 12,
      pending: 2,
      available: 6,
      breakdown: { annual: 10, sick: 4, casual: 6 }
    },
    performance: {
      rating: 4.8,
      goalsCompleted: 9,
      totalGoals: 10,
      status: "Exceeds Expectations",
      feedback: "Mia has shown exceptional leadership in onboarding new hires and organizing remote employee engagement programs.",
      trend: [80, 82, 85, 87, 88, 92, 90, 93, 95, 96]
    },
    payroll: {
      basic: 5800,
      allowances: { transport: 200, meal: 150, internet: 100 },
      benefits: { health: 250, life: 50, pension: 200 },
      deductions: { tax: 650, insurance: 80 },
      status: "Paid",
      paymentDate: "18 Jun 2026"
    },
    documents: [
      { name: "Performance_Evaluation_2025.pdf", size: "1.2 MB", date: "15 Dec 2025" },
      { name: "Employment_Agreement.pdf", size: "850 KB", date: "12 Feb 2022" },
      { name: "Resume_Mia_Torres.pdf", size: "1.1 MB", date: "05 Feb 2022" }
    ],
    hoursLogged: [38, 40, 42, 39, 41],
    internalNotes: "Promoted from HR Assistant to HR Officer on Jan 2024. Active member of employee welfare committee."
  },
  {
    id: "EMP-2202",
    name: "Alva Torres",
    role: "Senior Software Engineer",
    department: "Engineering",
    email: "alva.torres@teamhub.com",
    phone: "+1 (555) 789-0123",
    joinDate: "05 Apr 2021",
    status: "Active",
    employmentType: "Full-Time",
    workModel: "Remote",
    gender: "Male",
    dob: "14 Aug 1989",
    address: "128 Oak Ave, San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 25,
      used: 15,
      pending: 1,
      available: 9,
      breakdown: { annual: 14, sick: 6, casual: 5 }
    },
    performance: {
      rating: 4.9,
      goalsCompleted: 10,
      totalGoals: 10,
      status: "Exceeds Expectations",
      feedback: "Alva led the technical migration to React 19 and Vite successfully, meeting all performance benchmarks.",
      trend: [85, 87, 86, 89, 92, 95, 94, 96, 97, 98]
    },
    payroll: {
      basic: 8200,
      allowances: { transport: 0, meal: 150, internet: 150 },
      benefits: { health: 300, life: 60, pension: 300 },
      deductions: { tax: 950, insurance: 100 },
      status: "Paid",
      paymentDate: "18 Jun 2026"
    },
    documents: [
      { name: "Contract_Amendment_2024.pdf", size: "400 KB", date: "01 Jan 2024" },
      { name: "Offer_Letter_Alva.pdf", size: "1.4 MB", date: "15 Mar 2021" }
    ],
    hoursLogged: [40, 42, 45, 40, 40],
    internalNotes: "Nominated for technical mentor of the quarter. Consistently high code quality."
  },
  {
    id: "EMP-2203",
    name: "Chris Evans",
    role: "Lead UI Designer",
    department: "Design",
    email: "chris.evans@teamhub.com",
    phone: "+1 (555) 901-2345",
    joinDate: "10 Oct 2022",
    status: "Active",
    employmentType: "Full-Time",
    workModel: "Hybrid",
    gender: "Male",
    dob: "13 Jun 1991",
    address: "74 Birch Rd, Brooklyn, NY",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 20,
      used: 8,
      pending: 0,
      available: 12,
      breakdown: { annual: 8, sick: 2, casual: 10 }
    },
    performance: {
      rating: 4.5,
      goalsCompleted: 7,
      totalGoals: 8,
      status: "Meets Expectations",
      feedback: "Chris delivers exceptionally polished visual designs. We need him to focus more on documentation and handoff files.",
      trend: [78, 80, 82, 82, 85, 84, 87, 88, 89, 90]
    },
    payroll: {
      basic: 6800,
      allowances: { transport: 150, meal: 150, internet: 100 },
      benefits: { health: 250, life: 50, pension: 220 },
      deductions: { tax: 780, insurance: 90 },
      status: "Paid",
      paymentDate: "18 Jun 2026"
    },
    documents: [
      { name: "Design_Guidelines_Signoff.pdf", size: "3.2 MB", date: "10 Jan 2025" }
    ],
    hoursLogged: [38, 38, 39, 40, 37],
    internalNotes: "Creative lead on TeamHub rebranding project."
  },
  {
    id: "EMP-2204",
    name: "Sophia Rodriguez",
    role: "Product Manager",
    department: "Product",
    email: "sophia.rod@teamhub.com",
    phone: "+1 (555) 123-4567",
    joinDate: "18 Jan 2023",
    status: "Active",
    employmentType: "Full-Time",
    workModel: "Hybrid",
    gender: "Female",
    dob: "22 Sep 1988",
    address: "99 Maple Dr, Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 22,
      used: 14,
      pending: 3,
      available: 5,
      breakdown: { annual: 10, sick: 4, casual: 8 }
    },
    performance: {
      rating: 4.7,
      goalsCompleted: 8,
      totalGoals: 9,
      status: "Exceeds Expectations",
      feedback: "Sophia is excellent at coordinating between Dev, QA, and Design. Product roadmap updates are always clear.",
      trend: [82, 83, 85, 88, 89, 91, 93, 92, 94, 94]
    },
    payroll: {
      basic: 7500,
      allowances: { transport: 200, meal: 150, internet: 100 },
      benefits: { health: 280, life: 60, pension: 250 },
      deductions: { tax: 880, insurance: 90 },
      status: "Pending",
      paymentDate: null
    },
    documents: [
      { name: "Product_Strategy_Q1_2026.pdf", size: "1.9 MB", date: "15 Dec 2025" }
    ],
    hoursLogged: [40, 41, 40, 42, 40],
    internalNotes: "Spearheaded the integration of customer feedback loops into the sprint cycle."
  },
  {
    id: "EMP-2205",
    name: "Arya Stark",
    role: "QA Engineer",
    department: "Engineering",
    email: "arya.stark@teamhub.com",
    phone: "+1 (555) 234-5678",
    joinDate: "01 Mar 2024",
    status: "Active",
    employmentType: "Contract",
    workModel: "Remote",
    gender: "Female",
    dob: "05 May 1999",
    address: "Winterfell Manor, Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 12,
      used: 4,
      pending: 0,
      available: 8,
      breakdown: { annual: 6, sick: 2, casual: 4 }
    },
    performance: {
      rating: 4.2,
      goalsCompleted: 6,
      totalGoals: 7,
      status: "Meets Expectations",
      feedback: "Arya is fast and thorough at testing. She is encouraged to participate more in sprint retrospectives.",
      trend: [70, 72, 75, 78, 80, 82, 82, 84, 83, 85]
    },
    payroll: {
      basic: 4800,
      allowances: { transport: 0, meal: 100, internet: 150 },
      benefits: { health: 150, life: 30, pension: 150 },
      deductions: { tax: 450, insurance: 60 },
      status: "Paid",
      paymentDate: "18 Jun 2026"
    },
    documents: [
      { name: "Contract_QA_Stark.pdf", size: "620 KB", date: "25 Feb 2024" }
    ],
    hoursLogged: [38, 40, 39, 41, 38],
    internalNotes: "Contract renewed for another 6 months in March 2026."
  },
  {
    id: "EMP-2206",
    name: "Lionel Messi",
    role: "Regional Sales Manager",
    department: "Sales",
    email: "lionel.messi@teamhub.com",
    phone: "+1 (555) 876-5432",
    joinDate: "15 Sep 2023",
    status: "Active",
    employmentType: "Full-Time",
    workModel: "Hybrid",
    gender: "Male",
    dob: "24 Jun 1987",
    address: "10 Golden Ball Rd, Miami, FL",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 20,
      used: 18,
      pending: 1,
      available: 1,
      breakdown: { annual: 12, sick: 4, casual: 2 }
    },
    performance: {
      rating: 5.0,
      goalsCompleted: 12,
      totalGoals: 12,
      status: "Exceeds Expectations",
      feedback: "Lionel crushed the regional sales target by 140% this quarter. Outstanding relationship builder.",
      trend: [90, 92, 95, 96, 98, 99, 99, 100, 100, 100]
    },
    payroll: {
      basic: 6500,
      allowances: { transport: 300, meal: 150, internet: 100 },
      benefits: { health: 250, life: 70, pension: 200 },
      deductions: { tax: 750, insurance: 80 },
      status: "Paid",
      paymentDate: "18 Jun 2026"
    },
    documents: [
      { name: "Sales_Targets_Q2_Report.pdf", size: "2.1 MB", date: "10 Jun 2026" }
    ],
    hoursLogged: [42, 45, 44, 46, 43],
    internalNotes: "Consistently top performer. Excels in client negotiations."
  },
  {
    id: "EMP-2207",
    name: "Selena Gomez",
    role: "Marketing Coordinator",
    department: "Marketing",
    email: "selena.gomez@teamhub.com",
    phone: "+1 (555) 987-6543",
    joinDate: "01 Nov 2024",
    status: "Active",
    employmentType: "Part-Time",
    workModel: "Remote",
    gender: "Female",
    dob: "22 Jul 1992",
    address: "305 Sunset Blvd, Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 10,
      used: 5,
      pending: 0,
      available: 5,
      breakdown: { annual: 6, sick: 2, casual: 2 }
    },
    performance: {
      rating: 4.4,
      goalsCompleted: 7,
      totalGoals: 8,
      status: "Meets Expectations",
      feedback: "Selena handles our social media campaign successfully. Good collaboration with the design team.",
      trend: [75, 78, 80, 81, 84, 82, 85, 86, 85, 87]
    },
    payroll: {
      basic: 3200,
      allowances: { transport: 0, meal: 100, internet: 100 },
      benefits: { health: 100, life: 20, pension: 100 },
      deductions: { tax: 300, insurance: 40 },
      status: "Processing",
      paymentDate: null
    },
    documents: [
      { name: "Marketing_Campaign_Wrap.pdf", size: "4.5 MB", date: "02 Jun 2026" }
    ],
    hoursLogged: [20, 22, 21, 20, 20],
    internalNotes: "Excellent content design. Needs to streamline analytics reporting."
  },
  {
    id: "EMP-2208",
    name: "Cristiano Ronaldo",
    role: "Senior Sales Representative",
    department: "Sales",
    email: "cristiano.ron@teamhub.com",
    phone: "+1 (555) 654-3210",
    joinDate: "14 May 2023",
    status: "Inactive",
    employmentType: "Full-Time",
    workModel: "Hybrid",
    gender: "Male",
    dob: "05 Feb 1985",
    address: "7 Pestana Rd, Austin, TX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    leaves: {
      total: 20,
      used: 20,
      pending: 0,
      available: 0,
      breakdown: { annual: 12, sick: 5, casual: 3 }
    },
    performance: {
      rating: 3.5,
      goalsCompleted: 4,
      totalGoals: 8,
      status: "Needs Improvement",
      feedback: "Cristiano was a high-drive salesman but struggled to work with the operations and support teams.",
      trend: [85, 80, 75, 70, 68, 62, 60, 58, 55, 50]
    },
    payroll: {
      basic: 6200,
      allowances: { transport: 250, meal: 150, internet: 100 },
      benefits: { health: 250, life: 60, pension: 200 },
      deductions: { tax: 720, insurance: 80 },
      status: "Paid",
      paymentDate: "30 May 2026"
    },
    documents: [
      { name: "Exit_Interview_Summary.pdf", size: "320 KB", date: "08 Jun 2026" }
    ],
    hoursLogged: [0, 0, 0, 0, 0],
    internalNotes: "Resigned in June 2026. Left for a personal venture."
  }
];

export const mockLeaveRequests = [
  {
    id: "LR-101",
    employeeName: "Sophia Rodriguez",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    type: "Annual Leave",
    duration: "3 days (22 Jun - 24 Jun)",
    status: "Pending",
    reason: "Family gathering"
  },
  {
    id: "LR-102",
    employeeName: "Mia Torres",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    type: "Casual Leave",
    duration: "1 day (26 Jun)",
    status: "Pending",
    reason: "Personal errand"
  },
  {
    id: "LR-103",
    employeeName: "Arya Stark",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    type: "Sick Leave",
    duration: "2 days (18 Jun - 19 Jun)",
    status: "Approved",
    reason: "Dental procedure"
  },
  {
    id: "LR-104",
    employeeName: "Alva Torres",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    type: "Annual Leave",
    duration: "5 days (1 Jul - 5 Jul)",
    status: "Approved",
    reason: "Summer vacation"
  }
];

export const mockStats = {
  totalEmployees: 8,
  activeCount: 7,
  inactiveCount: 1,
  attendanceRate: "96.4%",
  monthlyPayroll: "$49,000",
  payrollBreakdown: {
    baseSalary: 42200,
    allowances: 3400,
    benefits: 3400
  }
};

export const mockPayrollTrend = [
  { month: "Jan", payroll: 45000 },
  { month: "Feb", payroll: 46200 },
  { month: "Mar", payroll: 47000 },
  { month: "Apr", payroll: 47500 },
  { month: "May", payroll: 48000 },
  { month: "Jun", payroll: 49000 }
];

export const mockPerformanceCategory = [
  { category: "Excellent (4.5+)", count: 4, color: "#10b981" },
  { category: "Good (4.0-4.4)", count: 2, color: "#34d399" },
  { category: "Satisfactory (3.5-3.9)", count: 2, color: "#a7f3d0" }
];

export const mockMonthlyPerformanceTrend = [
  { month: "Jan", performance: 83.2 },
  { month: "Feb", performance: 84.5 },
  { month: "Mar", performance: 85.1 },
  { month: "Apr", performance: 86.3 },
  { month: "May", performance: 86.8 },
  { month: "Jun", performance: 88.5 }
];
