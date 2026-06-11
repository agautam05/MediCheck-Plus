import AdminLayout from "@/layouts/AdminLayout";

const users = [
  {
    id: "U001",
    name: "Aman Gautam",
    email: "aman@gmail.com",
    role: "Citizen",
    status: "Active",
  },
  {
    id: "U002",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Citizen",
    status: "Active",
  },
  {
    id: "U003",
    name: "Dr. Mehta",
    email: "doctor@gmail.com",
    role: "Healthcare Professional",
    status: "Active",
  },
  {
    id: "U004",
    name: "Admin User",
    email: "admin@medicheck.com",
    role: "Administrator",
    status: "Active",
  },
];

export default function UsersManagement() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Users Management
          </h1>

          <p className="text-gray-500">
            Manage platform users and roles.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Total Users
            </p>

            <h2 className="text-3xl font-bold mt-2">
              12,458
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Citizens
            </p>

            <h2 className="text-3xl font-bold mt-2">
              11,820
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Healthcare Staff
            </p>

            <h2 className="text-3xl font-bold mt-2">
              602
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Administrators
            </p>

            <h2 className="text-3xl font-bold mt-2">
              36
            </h2>
          </div>

        </div>

        <div className="bg-white border rounded-xl p-6">

          <div className="flex justify-between mb-4">

            <h2 className="text-xl font-bold">
              Registered Users
            </h2>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Add User
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    ID
                  </th>

                  <th className="text-left py-3">
                    Name
                  </th>

                  <th className="text-left py-3">
                    Email
                  </th>

                  <th className="text-left py-3">
                    Role
                  </th>

                  <th className="text-left py-3">
                    Status
                  </th>

                  <th className="text-left py-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b"
                  >
                    <td className="py-4">
                      {user.id}
                    </td>

                    <td>
                      {user.name}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.role}
                    </td>

                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {user.status}
                      </span>
                    </td>

                    <td>
                      <button className="text-blue-600">
                        View
                      </button>
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