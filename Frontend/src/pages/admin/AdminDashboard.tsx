import AdminLayout from "@/layouts/AdminLayout";


const stats = [
  {
    title: "Registered Users",
    value: "12,458",
  },
  {
    title: "Medicine Scans",
    value: "48,321",
  },
  {
    title: "Counterfeit Alerts",
    value: "126",
  },
  {
    title: "High Risk Interactions",
    value: "845",
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Admin Dashboard
          </h1>

          <p className="text-gray-500">
            Monitor platform activity and public health insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white border rounded-xl p-5"
            >
              <p className="text-gray-500">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Recent Platform Activity
          </h2>

          <div className="space-y-3">
            <div>
              🔍 23 counterfeit alerts reported today
            </div>

            <div>
              💊 412 medicine scans performed
            </div>

            <div>
              🩺 175 symptom assessments completed
            </div>

            <div>
              🚑 68 emergency profile accesses
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Public Health Insights
          </h2>

          <div className="space-y-4">

            <div className="border rounded-lg p-4">
              Fever-related symptom reports increased by 18%
            </div>

            <div className="border rounded-lg p-4">
              Counterfeit reports concentrated in 2 districts
            </div>

            <div className="border rounded-lg p-4">
              Paracetamol is currently the most scanned medicine
            </div>

          </div>
        </div>

      </div>
    </AdminLayout>
  );
}