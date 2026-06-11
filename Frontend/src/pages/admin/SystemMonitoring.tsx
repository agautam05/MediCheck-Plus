import AdminLayout from "@/layouts/AdminLayout";

export default function SystemMonitoring() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            System Monitoring
          </h1>

          <p className="text-gray-500">
            Monitor platform health, API performance and system uptime.
          </p>
        </div>

        {/* System Status */}

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              System Status
            </p>

            <h2 className="text-2xl font-bold text-green-600 mt-2">
              Operational
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Uptime
            </p>

            <h2 className="text-2xl font-bold mt-2">
              99.98%
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Active APIs
            </p>

            <h2 className="text-2xl font-bold mt-2">
              12
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Database Status
            </p>

            <h2 className="text-2xl font-bold text-green-600 mt-2">
              Connected
            </h2>
          </div>

        </div>

        {/* Services */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Services Health
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border rounded-lg p-4">
              <span>Authentication Service</span>

              <span className="text-green-600 font-semibold">
                Healthy
              </span>
            </div>

            <div className="flex justify-between border rounded-lg p-4">
              <span>Medicine Scanner API</span>

              <span className="text-green-600 font-semibold">
                Healthy
              </span>
            </div>

            <div className="flex justify-between border rounded-lg p-4">
              <span>Counterfeit Detection</span>

              <span className="text-green-600 font-semibold">
                Healthy
              </span>
            </div>

            <div className="flex justify-between border rounded-lg p-4">
              <span>Voice Assistant</span>

              <span className="text-yellow-600 font-semibold">
                Warning
              </span>
            </div>

            <div className="flex justify-between border rounded-lg p-4">
              <span>Analytics Service</span>

              <span className="text-green-600 font-semibold">
                Healthy
              </span>
            </div>

          </div>

        </div>

        {/* Recent Logs */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Recent System Events
          </h2>

          <div className="space-y-3">

            <div className="border rounded-lg p-4">
              ✅ Database backup completed successfully
            </div>

            <div className="border rounded-lg p-4">
              ✅ New medicine records synchronized
            </div>

            <div className="border rounded-lg p-4">
              ⚠ Voice assistant latency increased
            </div>

            <div className="border rounded-lg p-4">
              ✅ Security scan completed
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}