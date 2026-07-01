// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import MainLayout from "./components/MainLayout";
// import DashboardOverview from "./pages/DashboardOverview";
// import Employees from "./pages/Employees";
// import Performance from "./pages/Performance";
// import Payroll from "./pages/Payroll";
// import TourKitProvider from "./components/TourKitProvider";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <TourKitProvider />
//       <Routes>
//         {/* Root Redirect to /dashboard */}
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
//         {/* Main Dashboard Layout and Pages */}
//         <Route path="/dashboard" element={<MainLayout />}>
//           <Route index element={<DashboardOverview />} />
//           <Route path="employees" element={<Employees />} />
//           <Route path="performance" element={<Performance />} />
//           <Route path="payroll" element={<Payroll />} />
//         </Route>

//         {/* Catch-all Redirect */}
//         <Route path="*" element={<Navigate to="/dashboard" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashboardOverview from "./pages/DashboardOverview";
import Employees from "./pages/Employees";
import Performance from "./pages/Performance";
import Payroll from "./pages/Payroll";
import TourKitProvider from "./components/TourKitProvider";

export default function App() {
  return (
    <BrowserRouter>
      <TourKitProvider />
      <Routes>
        {/* Changed: redirect directly, no / route */}
        <Route 
          path="/" 
          element={<Navigate to="/dashboard" replace />} 
        />
        
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="employees" element={<Employees />} />
          <Route path="performance" element={<Performance />} />
          <Route path="payroll" element={<Payroll />} />
        </Route>

        <Route 
          path="*" 
          element={<Navigate to="/dashboard" replace />} 
        />
      </Routes>
    </BrowserRouter>
  )
}