import AdminLayout from "@/layouts/AdminLayout";

const reports = [
  {
    id: "MR-1001",
    medicine: "Paracetamol",
    scans: 12543,
    category: "Pain Relief",
    status: "Active",
  },
  {
    id: "MR-1002",
    medicine: "Ibuprofen",
    scans: 9872,
    category: "Anti-inflammatory",
    status: "Active",
  },
  {
    id: "MR-1003",
    medicine: "Aspirin",
    scans: 6532,
    category: "Blood Thinner",
    status: "Monitored",
  },
  {
    id: "MR-1004",
    medicine: "Warfarin",
    scans: 2150,
    category: "Anticoagulant",
    status: "High Risk",
  },
];

export default function MedicineReports() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Medicine Reports
          </h1>

          <p className="text-gray-500">
            Monitor medicine usage, scan trends and risk indicators.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Total Medicines
            </p>

            <h2 className="text-3xl font-bold mt-2">
              2,458
            </h2>
          </div>

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
              High Risk Drugs
            </p>

            <h2 className="text-3xl font-bold mt-2 text-red-600">
              42
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Active Database
            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-600">
              Online
            </h2>
          </div>

        </div>

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Medicine Usage Reports
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    ID
                  </th>

                  <th className="text-left py-3">
                    Medicine
                  </th>

                  <th className="text-left py-3">
                    Category
                  </th>

                  <th className="text-left py-3">
                    Total Scans
                  </th>

                  <th className="text-left py-3">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                {reports.map((report) => (
                  <tr
                    key={report.id}
                    className="border-b"
                  >
                    <td className="py-4">
                      {report.id}
                    </td>

                    <td>
                      {report.medicine}
                    </td>

                    <td>
                      {report.category}
                    </td>

                    <td>
                      {report.scans.toLocaleString()}
                    </td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          report.status === "High Risk"
                            ? "bg-red-100 text-red-700"
                            : report.status === "Monitored"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}