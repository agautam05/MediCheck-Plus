import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function MedicineScannerPage() {
const [image, setImage] = useState<string | null>(null);
const [loading, setLoading] = useState(false);
const [showResult, setShowResult] = useState(false);

const handleImage = (
event: React.ChangeEvent<HTMLInputElement>
) => {
const file = event.target.files?.[0];

if (file) {
  setImage(URL.createObjectURL(file));
  setShowResult(false);
}

};

const analyzeMedicine = () => {
setLoading(true);

setTimeout(() => {
  setLoading(false);
  setShowResult(true);
}, 2500);

};

return ( <DashboardLayout> <div className="max-w-5xl mx-auto space-y-6"> <div> <h1 className="text-4xl font-bold mb-2">
Medicine Scanner </h1>

      <p className="text-gray-500">
        Upload a medicine image for instant analysis.
      </p>
    </div>

    <div className="bg-white border rounded-xl p-6">
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />
    </div>

    {image && (
      <div className="bg-white border rounded-xl p-6">
        <h2 className="font-semibold mb-4">
          Uploaded Medicine Image
        </h2>

        <img
          src={image}
          alt="Medicine"
          className="w-72 rounded-xl border shadow-sm"
        />
      </div>
    )}

    {image && !loading && !showResult && (
      <button
        onClick={analyzeMedicine}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Analyze Medicine
      </button>
    )}

    {loading && (
      <div className="bg-white border rounded-xl p-6">
        <h2 className="font-semibold text-lg mb-4">
          AI Analysis Running...
        </h2>

        <div className="space-y-3 text-gray-600">
          <p>✓ Uploading Image</p>
          <p>✓ Extracting Medicine Information</p>
          <p>✓ Checking Drug Database</p>
          <p>✓ Generating Safety Report</p>
        </div>
      </div>
    )}

    {showResult && (
      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-5">
          Analysis Result
        </h2>

        <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          ✓ Analysis Completed Successfully
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
            AI Confidence: 98.7%
          </div>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            Verified Database Match
          </div>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">
            Safety Score
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: "92%" }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-2">
            92 / 100 Safe Usage Rating
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">
              Medicine Name
            </p>
            <p>Paracetamol 500mg</p>
          </div>

          <div>
            <p className="font-semibold">
              Category
            </p>
            <p>Pain Relief & Fever</p>
          </div>

          <div>
            <p className="font-semibold">
              Uses
            </p>

            <ul className="list-disc ml-5">
              <li>Fever</li>
              <li>Headache</li>
              <li>Body Pain</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">
              Dosage
            </p>

            <p>
              1 tablet every 6 hours after food
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Common Side Effects
            </p>

            <ul className="list-disc ml-5">
              <li>Nausea</li>
              <li>Dizziness</li>
              <li>Allergic reaction (rare)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-red-600">
              Warning
            </p>

            <p>
              Do not exceed recommended dosage.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="font-semibold mb-2">
            AI Summary
          </h3>

          <p className="text-gray-600">
            This medicine is commonly used for
            fever, headache and mild pain relief.
            Follow the recommended dosage and
            avoid exceeding daily limits.
          </p>
        </div>
      </div>
    )}
  </div>
</DashboardLayout>

);
}
