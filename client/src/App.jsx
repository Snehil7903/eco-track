import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./context/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import NewComplaint from "./pages/complaints/NewComplaint";
import MyComplaints from "./pages/complaints/MyComplaints";
import AdminComplaints from "./pages/admin/AdminComplaints";
import RoleRoute from "./components/RoleRoute";
import AdminAnalytics from "./pages/admin/AdminAnalytics";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Auth */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

        {/* Protected (later) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/complaints"
          element={
            <ProtectedRoute>
              <RoleRoute allow={["citizen"]}>
                <DashboardLayout>
                  <MyComplaints />
                </DashboardLayout>
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/complaints/new"
          element={
            <ProtectedRoute>
              <RoleRoute allow={["citizen"]}>
                <DashboardLayout>
                  <NewComplaint />
                </DashboardLayout>
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/complaints"
          element={
            <ProtectedRoute>
              <RoleRoute allow={["admin"]}>
                <DashboardLayout>
                  <AdminComplaints />
                </DashboardLayout>
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <RoleRoute allow={["admin"]}>
                <DashboardLayout>
                  <AdminAnalytics />
                </DashboardLayout>
              </RoleRoute>
            </ProtectedRoute>
          }
        />





      </Routes>
    </BrowserRouter>
  );
}
