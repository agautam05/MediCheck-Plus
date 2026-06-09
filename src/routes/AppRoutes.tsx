import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import FAQ from "@/pages/public/FAQ";

// Auth Pages
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";

// Citizen Pages
import Dashboard from "@/pages/citizen/Dashboard";
import MedicineScannerPage from "@/pages/citizen/MedicineScannerPage";
import InteractionCheckerPage from "@/pages/citizen/InteractionCheckerPage";
import SymptomAssessmentPage from "@/pages/citizen/SymptomAssessmentPage";
import HealthVaultPage from "@/pages/citizen/HealthVaultPage";
import CounterfeitDetectionPage from "@/pages/citizen/CounterfeitDetectionPage";
import NearbyServicesPage from "@/pages/citizen/NearbyServicesPage";
import ProfilePage from "@/pages/citizen/ProfilePage";
import ReminderPage from "@/pages/citizen/ReminderPage";
import VoiceAssistantPage from "@/pages/citizen/VoiceAssistantPage";
import EmergencyProfilePage from "@/pages/citizen/EmergencyProfilePage";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import HealthAnalytics from "@/pages/admin/HealthAnalytics";
import CounterfeitReports from "@/pages/admin/CounterfeitReports";
import UsersManagement from "@/pages/admin/UsersManagement";
import MedicineReports from "@/pages/admin/MedicineReports";
import SystemMonitoring from "@/pages/admin/SystemMonitoring";

// Route Protection
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          404
        </h1>

        <p className="text-gray-500">
          Page not found
        </p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Citizen Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/scanner"
          element={
            <ProtectedRoute>
              <MedicineScannerPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/interaction"
          element={
            <ProtectedRoute>
              <InteractionCheckerPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/counterfeit"
          element={
            <ProtectedRoute>
              <CounterfeitDetectionPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/symptoms"
          element={
            <ProtectedRoute>
              <SymptomAssessmentPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vault"
          element={
            <ProtectedRoute>
              <HealthVaultPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <NearbyServicesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/emergency-profile"
          element={
            <ProtectedRoute>
              <EmergencyProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reminders"
          element={
            <ProtectedRoute>
              <ReminderPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/voice"
          element={
            <ProtectedRoute>
              <VoiceAssistantPage />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <AdminRoute>
              <HealthAnalytics />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/counterfeit-reports"
          element={
            <AdminRoute>
              <CounterfeitReports />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <UsersManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/medicine-reports"
          element={
            <AdminRoute>
              <MedicineReports />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/system-monitoring"
          element={
            <AdminRoute>
              <SystemMonitoring />
            </AdminRoute>
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}