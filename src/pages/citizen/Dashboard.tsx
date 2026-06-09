import DashboardLayout from "@/layouts/DashboardLayout";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome Banner */}

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-blue-100">
            Monitor medicines, interactions, symptoms and
            health records from one dashboard.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Health Score
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              92%
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Medicine Scans
            </p>

            <h2 className="text-4xl font-bold mt-2">
              128
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Active Reminders
            </p>

            <h2 className="text-4xl font-bold mt-2">
              4
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Stored Records
            </p>

            <h2 className="text-4xl font-bold mt-2">
              45
            </h2>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

            <Link
              to="/scanner"
              className="border rounded-xl p-5 hover:border-blue-500"
            >
              📷 Medicine Scanner
            </Link>

            <Link
              to="/interaction"
              className="border rounded-xl p-5 hover:border-blue-500"
            >
              💊 Interaction Checker
            </Link>

            <Link
              to="/symptoms"
              className="border rounded-xl p-5 hover:border-blue-500"
            >
              🩺 Symptom Assessment
            </Link>

            <Link
              to="/vault"
              className="border rounded-xl p-5 hover:border-blue-500"
            >
              📁 Health Vault
            </Link>

          </div>

        </div>

        {/* Dashboard Widgets */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Upcoming Reminders */}

          <div className="bg-white border rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Upcoming Reminders
            </h2>

            <div className="space-y-3">

              <div className="border rounded-lg p-4">
                💊 Paracetamol - 08:00 AM
              </div>

              <div className="border rounded-lg p-4">
                💊 Vitamin D - 01:00 PM
              </div>

              <div className="border rounded-lg p-4">
                💊 Antibiotic - 08:00 PM
              </div>

            </div>

          </div>

          {/* Risk Alerts */}

          <div className="bg-white border rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Risk Alerts
            </h2>

            <div className="space-y-3">

              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                ⚠ Aspirin + Warfarin interaction detected.
              </div>

              <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                ⚠ Medicine reminder missed yesterday.
              </div>

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div>
              📷 Paracetamol scanned successfully
            </div>

            <div>
              💊 Interaction analysis completed
            </div>

            <div>
              🩺 Symptom assessment generated
            </div>

            <div>
              📁 Medical report uploaded
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

