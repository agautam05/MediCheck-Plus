
import DashboardLayout from "@/layouts/DashboardLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            My Profile
          </h1>

          <p className="text-gray-500">
            Personal health information and emergency details.
          </p>
        </div>

        {/* Profile Card */}

        <div className="bg-white border rounded-xl p-6">

          <div className="flex items-center gap-6">

            <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
              AG
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Aman Gautam
              </h2>

              <p className="text-gray-500">
                Citizen User
              </p>

              <p className="text-gray-500">
                aman@example.com
              </p>

            </div>

          </div>

        </div>

        {/* Health Summary */}

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Blood Group
            </p>

            <h2 className="text-3xl font-bold mt-2">
              B+
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Allergies
            </p>

            <h2 className="text-2xl font-bold mt-2">
              1
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Active Medicines
            </p>

            <h2 className="text-2xl font-bold mt-2">
              3
            </h2>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-gray-500">
              Records Stored
            </p>

            <h2 className="text-2xl font-bold mt-2">
              45
            </h2>
          </div>

        </div>

        {/* Medical Information */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Medical Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="font-semibold">
                Blood Group
              </p>

              <p>B+</p>
            </div>

            <div>
              <p className="font-semibold">
                Age
              </p>

              <p>22 Years</p>
            </div>

            <div>
              <p className="font-semibold">
                Allergies
              </p>

              <p>Penicillin</p>
            </div>

            <div>
              <p className="font-semibold">
                Chronic Conditions
              </p>

              <p>None</p>
            </div>

          </div>

        </div>

        {/* Emergency Contact */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Emergency Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="font-semibold">
                Contact Name
              </p>

              <p>Family Member</p>
            </div>

            <div>
              <p className="font-semibold">
                Phone Number
              </p>

              <p>+91 9876543210</p>
            </div>

          </div>

        </div>

        {/* Current Medications */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Current Medications
          </h2>

          <div className="space-y-3">

            <div className="border rounded-lg p-4">
              💊 Paracetamol 500mg
            </div>

            <div className="border rounded-lg p-4">
              💊 Vitamin D Supplement
            </div>

            <div className="border rounded-lg p-4">
              💊 Antibiotic Course
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
