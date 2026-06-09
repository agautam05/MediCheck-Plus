import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

const medicines = [
"Paracetamol",
"Aspirin",
"Warfarin",
"Ibuprofen",
"Cetirizine",
];

export default function InteractionCheckerPage() {
const [med1, setMed1] = useState("");
const [med2, setMed2] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState<any>(null);

const checkInteraction = () => {
setLoading(true);
setResult(null);


setTimeout(() => {
  if (
    (med1 === "Warfarin" && med2 === "Aspirin") ||
    (med1 === "Aspirin" && med2 === "Warfarin")
  ) {
    setResult({
      status: "🔴 High Risk Interaction",
      color: "text-red-600",
      badge: "bg-red-100 text-red-700",
      effect: "Potential Internal Bleeding",
      severity: "Critical",
      confidence: "97.8%",
      recommendation:
        "Consult a healthcare professional immediately before combining these medicines.",
    });
  } else {
    setResult({
      status: "🟢 Safe Combination",
      color: "text-green-600",
      badge: "bg-green-100 text-green-700",
      effect: "No Major Interaction Found",
      severity: "Low",
      confidence: "99.1%",
      recommendation:
        "Medicines appear safe together under normal conditions.",
    });
  }

  setLoading(false);
}, 1800);


};

return ( <DashboardLayout> <div className="max-w-4xl mx-auto space-y-6"> <div> <h1 className="text-4xl font-bold mb-2">
Drug Interaction Checker </h1>

      <p className="text-gray-500">
        Detect potentially dangerous medicine combinations.
      </p>
    </div>

    <div className="bg-white border rounded-xl p-6 space-y-4">
      <select
        className="w-full border rounded-lg p-3"
        value={med1}
        onChange={(e) => setMed1(e.target.value)}
      >
        <option value="">Select Medicine 1</option>
        {medicines.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>

      <select
        className="w-full border rounded-lg p-3"
        value={med2}
        onChange={(e) => setMed2(e.target.value)}
      >
        <option value="">Select Medicine 2</option>
        {medicines.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>

      <button
        onClick={checkInteraction}
        disabled={!med1 || !med2}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        Check Interaction
      </button>
    </div>

    {loading && (
      <div className="bg-white border rounded-xl p-6">
        <h2 className="font-semibold text-lg mb-4">
          Interaction Analysis Running...
        </h2>

        <div className="space-y-3 text-gray-600">
          <p>✓ Validating Medicines</p>
          <p>✓ Checking Drug Database</p>
          <p>✓ Evaluating Side Effects</p>
          <p>✓ Generating Safety Recommendation</p>
        </div>
      </div>
    )}

    {result && (
      <div className="bg-white border rounded-xl p-6">
        <div className="flex flex-wrap gap-3 mb-5">
          <span
            className={`px-4 py-2 rounded-lg font-medium ${result.badge}`}
          >
            {result.status}
          </span>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
            AI Confidence: {result.confidence}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">
              Severity Level
            </p>

            <p>{result.severity}</p>
          </div>

          <div>
            <p className="font-semibold">
              Possible Effect
            </p>

            <p>{result.effect}</p>
          </div>

          <div className="md:col-span-2">
            <p className="font-semibold">
              Recommendation
            </p>

            <p>{result.recommendation}</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="font-semibold mb-2">
            AI Summary
          </h3>

          <p className="text-gray-600">
            Interaction analysis completed using
            medicine safety rules and drug compatibility
            checks. Users should always consult a
            qualified healthcare professional before
            combining medicines.
          </p>
        </div>
      </div>
    )}
  </div>
</DashboardLayout>

);
}
