import DashboardLayout from "@/layouts/DashboardLayout";

export default function EmergencyProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Emergency Health Profile
          </h1>

          <p className="text-gray-500">
            Critical medical information accessible
            during emergencies.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Emergency Information
          </h2>

          <p>
            This information can help healthcare
            professionals provide immediate care.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-500">
                Full Name
              </p>

              <p className="font-semibold">
                Aman Gautam
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Blood Group
              </p>

              <p className="font-semibold">
                B+
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Emergency Contact
              </p>

              <p className="font-semibold">
                +91 9999999999
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Allergies
              </p>

              <p className="font-semibold">
                Penicillin
              </p>
            </div>

          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Medical Information
          </h2>

          <div className="space-y-3">

            <div className="border rounded-lg p-4">
              Chronic Condition: None
            </div>

            <div className="border rounded-lg p-4">
              Current Medication: Paracetamol
            </div>

            <div className="border rounded-lg p-4">
              Last Health Record Updated:
              09 June 2026
            </div>

          </div>

        </div>

        <div className="bg-white border rounded-xl p-6 text-center">

          <h2 className="text-xl font-bold mb-4">
            Emergency QR Access
          </h2>

          <div className="h-48 w-48 border-4 border-dashed rounded-xl mx-auto flex items-center justify-center">
            QR CODE
          </div>

          <p className="mt-4 text-gray-500">
            Emergency responders can scan this QR
            code to access critical health
            information.
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}