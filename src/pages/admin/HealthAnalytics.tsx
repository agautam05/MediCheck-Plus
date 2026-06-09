import AdminLayout from "@/layouts/AdminLayout";

export default function HealthAnalytics() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Health Analytics
          </h1>

          <p className="text-gray-500">
            Public health trends and medicine usage insights.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Total Scans
            </p>

            <h2 className="text-3xl font-bold mt-2">
              48,321
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Symptom Reports
            </p>

            <h2 className="text-3xl font-bold mt-2">
              12,845
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Counterfeit Alerts
            </p>

            <h2 className="text-3xl font-bold mt-2">
              126
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Active Users
            </p>

            <h2 className="text-3xl font-bold mt-2">
              8,412
            </h2>
          </div>

        </div>

        {/* Medicine Trends */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Top Medicines Scanned
          </h2>

          <div className="space-y-4">

            <div>
              <div className="flex justify-between">
                <span>Paracetamol</span>
                <span>85%</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full mt-2">
                <div className="h-3 bg-blue-600 rounded-full w-[85%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Ibuprofen</span>
                <span>70%</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full mt-2">
                <div className="h-3 bg-green-600 rounded-full w-[70%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Aspirin</span>
                <span>55%</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full mt-2">
                <div className="h-3 bg-yellow-500 rounded-full w-[55%]" />
              </div>
            </div>

          </div>

        </div>

        {/* Health Trends */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Regional Health Trends
          </h2>

          <div className="space-y-3">

            <div className="border rounded-lg p-4">
              🔥 Fever complaints increased by 18%
            </div>

            <div className="border rounded-lg p-4">
              🤧 Respiratory symptoms increased by 12%
            </div>

            <div className="border rounded-lg p-4">
              💊 Painkiller usage increased by 8%
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}