import AdminLayout from "@/layouts/AdminLayout";

const reports = [
  {
    id: "CR-1001",
    medicine: "Paracetamol 500mg",
    batch: "PARA2025A001",
    location: "Mathura",
    status: "Verified",
  },
  {
    id: "CR-1002",
    medicine: "Ibuprofen",
    batch: "IBU2025X221",
    location: "Agra",
    status: "Under Review",
  },
  {
    id: "CR-1003",
    medicine: "Aspirin",
    batch: "ASP2025Z999",
    location: "Delhi",
    status: "Counterfeit Alert",
  },
];

export default function CounterfeitReports() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Counterfeit Medicine Reports
          </h1>

          <p className="text-gray-500">
            Monitor suspicious medicine reports and verification status.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Total Reports
            </p>

            <h2 className="text-3xl font-bold mt-2">
              126
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Under Investigation
            </p>

            <h2 className="text-3xl font-bold mt-2 text-yellow-600">
              23
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Confirmed Counterfeit
            </p>

            <h2 className="text-3xl font-bold mt-2 text-red-600">
              8
            </h2>
          </div>

        </div>

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Recent Reports
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    Report ID
                  </th>

                  <th className="text-left py-3">
                    Medicine
                  </th>

                  <th className="text-left py-3">
                    Batch
                  </th>

                  <th className="text-left py-3">
                    Location
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
                      {report.batch}
                    </td>

                    <td>
                      {report.location}
                    </td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          report.status ===
                          "Counterfeit Alert"
                            ? "bg-red-100 text-red-700"
                            : report.status ===
                              "Under Review"
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