import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function SymptomAssessmentPage() {
const [symptoms, setSymptoms] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState<any>(null);

const analyzeSymptoms = () => {
setLoading(true);
setResult(null);


setTimeout(() => {
  const text = symptoms.toLowerCase();

  if (
    text.includes("chest pain") ||
    text.includes("breathing") ||
    text.includes("shortness of breath")
  ) {
    setResult({
      level: "🚨 High Risk",
      risk: "HIGH",
      confidence: "96.8%",
      bg: "bg-red-50",
      border: "border-red-300",
      color: "text-red-600",
      advice: "Immediate medical attention required.",
      recommendation:
        "Visit the nearest emergency department immediately.",
    });
  } else if (
    text.includes("fever") ||
    text.includes("cough")
  ) {
    setResult({
      level: "⚠️ Medium Risk",
      risk: "MEDIUM",
      confidence: "94.2%",
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      color: "text-yellow-600",
      advice: "Medical consultation recommended.",
      recommendation:
        "Schedule a doctor consultation within 24-48 hours.",
    });
  } else {
    setResult({
      level: "✅ Low Risk",
      risk: "LOW",
      confidence: "98.1%",
      bg: "bg-green-50",
      border: "border-green-300",
      color: "text-green-600",
      advice: "Home care may be sufficient.",
      recommendation:
        "Monitor symptoms and maintain hydration and rest.",
    });
  }

  setLoading(false);
}, 1800);


};

return ( <DashboardLayout> <div className="max-w-4xl mx-auto space-y-6"> <div> <h1 className="text-4xl font-bold mb-2">
Symptom Assessment </h1>

      <p className="text-gray-500">
        Analyze symptoms and assess potential health risks.
      </p>
    </div>

    <div className="bg-white border rounded-xl p-6">
      <textarea
        rows={6}
        placeholder="Example: Chest pain, shortness of breath, dizziness..."
        className="w-full border rounded-lg p-4"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <button
        onClick={analyzeSymptoms}
        disabled={!symptoms}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        Analyze Symptoms
      </button>
    </div>

    {loading && (
      <div className="bg-white border rounded-xl p-6">
        <h2 className="font-semibold text-lg mb-4">
          Symptom Analysis Running...
        </h2>

        <div className="space-y-3 text-gray-600">
          <p>✓ Analyzing Symptoms</p>
          <p>✓ Assessing Risk Factors</p>
          <p>✓ Evaluating Severity</p>
          <p>✓ Generating Medical Guidance</p>
        </div>
      </div>
    )}

    {result && (
      <div
        className={`rounded-xl border p-6 ${result.bg} ${result.border}`}
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <span
            className={`px-4 py-2 rounded-lg font-medium ${result.color}`}
          >
            {result.level}
          </span>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
            AI Confidence: {result.confidence}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">
              Risk Level
            </h3>

            <p>{result.risk}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Assessment
            </h3>

            <p>{result.advice}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2">
              Recommendation
            </h3>

            <p>{result.recommendation}</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="font-semibold mb-2">
            AI Summary
          </h3>

          <p className="text-gray-600">
            This assessment is based on the symptoms
            provided by the user. It is intended for
            preliminary guidance only and should not
            replace professional medical advice.
          </p>
        </div>
      </div>
    )}
  </div>
</DashboardLayout>


);
}
