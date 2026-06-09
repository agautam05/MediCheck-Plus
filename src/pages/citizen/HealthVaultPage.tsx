import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function HealthVaultPage() {
const [files, setFiles] = useState<File[]>([]);

const handleUpload = (
event: React.ChangeEvent<HTMLInputElement>
) => {
const uploadedFiles = Array.from(
event.target.files || []
);

setFiles((prev) => [...prev, ...uploadedFiles]);

};

return ( <DashboardLayout> <div className="max-w-5xl mx-auto space-y-6"> <div> <h1 className="text-4xl font-bold mb-2">
Health Vault </h1>

      <p className="text-gray-500">
        Securely store prescriptions, reports and
        medical records.
      </p>
    </div>

    <div className="bg-white border rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Upload Medical Records
      </h2>

      <input
        type="file"
        multiple
        onChange={handleUpload}
      />

      <div className="mt-4 text-sm text-gray-500">
        Supported: PDF, JPG, PNG, Medical Reports,
        Prescriptions
      </div>
    </div>

    <div className="grid md:grid-cols-4 gap-4">
      <div className="bg-white border rounded-xl p-5">
        <p className="text-gray-500 text-sm">
          Total Records
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {files.length}
        </h2>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-gray-500 text-sm">
          Prescriptions
        </p>

        <h2 className="text-3xl font-bold mt-2">
          12
        </h2>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-gray-500 text-sm">
          Reports
        </p>

        <h2 className="text-3xl font-bold mt-2">
          8
        </h2>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-gray-500 text-sm">
          Storage Status
        </p>

        <h2 className="text-xl font-bold text-green-600 mt-2">
          Secure
        </h2>
      </div>
    </div>

    <div className="bg-white border rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Stored Records
        </h2>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          Encrypted Storage
        </span>
      </div>

      {files.length === 0 ? (
        <div className="text-center py-10">
          <div className="text-5xl mb-3">
            📁
          </div>

          <p className="font-medium">
            No medical records found
          </p>

          <p className="text-gray-500 mt-2">
            Upload your first prescription or
            medical report.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div>
                <p className="font-medium">
                  {file.name}
                </p>

                <p className="text-sm text-gray-500">
                  Medical Document
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Stored
              </span>
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="bg-white border rounded-xl p-6">
      <h2 className="text-lg font-bold mb-3">
        AI Health Vault Summary
      </h2>

      <p className="text-gray-600">
        Health Vault securely stores prescriptions,
        reports and medical documents for quick
        access during consultations and emergencies.
      </p>
    </div>
  </div>
</DashboardLayout>

);
}
