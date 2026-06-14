import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import apiClient from "@/lib/axios";
import type { TriageResponse, ApiResponse } from "@/types/api";

export default function SymptomAssessmentPage() {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TriageResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await apiClient.post<ApiResponse<TriageResponse>>(
        "/triage",
        {
          symptoms: symptoms,
          age: age,
          lang: "hi",
        }
      );

      setResult(response.data.data);
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message || "Failed to analyze symptoms. Please try again.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const getLevelColor = (level: string) => {
    const upper = level?.toUpperCase() || "";
    if (upper.includes("HIGH") || upper.includes("EMERGENCY")) {
      return {
        bg: "bg-red-50",
        border: "border-red-300",
        color: "text-red-600",
        badge: "bg-red-100 text-red-700",
        label: "🚨 High Risk",
      };
    }
    if (upper.includes("MEDIUM") || upper.includes("MODERATE")) {
      return {
        bg: "bg-yellow-50",
        border: "border-yellow-300",
        color: "text-yellow-600",
        badge: "bg-yellow-100 text-yellow-700",
        label: "⚠️ Medium Risk",
      };
    }
    return {
      bg: "bg-green-50",
      border: "border-green-300",
      color: "text-green-600",
      badge: "bg-green-100 text-green-700",
      label: "✅ Low Risk",
    };
  };

  const resetAssessment = () => {
    setResult(null);
    setError(null);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Symptom Assessment</h1>
          <p className="text-gray-500">
            Describe your symptoms for AI-powered health risk assessment.
          </p>
        </div>

        {/* Input Section */}
        {!result && (
          <div className="bg-white border rounded-xl p-6">
            <textarea
              rows={6}
              placeholder="Example: I have chest pain, shortness of breath, and dizziness..."
              className="w-full border rounded-lg p-4"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />

            <div className="mt-4">
              <label className="block text-sm text-gray-500 mb-1">
                Age (optional)
              </label>
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full max-w-xs border rounded-lg p-3"
                value={age ?? ""}
                onChange={(e) => setAge(e.target.value ? Number(e.target.value) : undefined)}
              />
            </div>

            <button
              onClick={analyzeSymptoms}
              disabled={!symptoms.trim() || loading}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50 transition"
            >
              {loading ? "Analyzing..." : "Analyze Symptoms"}
            </button>
          </div>
        )}

        {/* Loading State */}
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

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-300 rounded-xl p-6">
            <p className="text-red-700 mb-4">{error}</p>
            <button
              onClick={resetAssessment}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Result Section */}
        {result && !loading && (
          <div
            className={`rounded-xl border p-6 ${getLevelColor(result.level).bg} ${getLevelColor(result.level).border}`}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Assessment Result</h2>
              <button
                onClick={resetAssessment}
                className="px-4 py-2 border rounded-lg hover:bg-slate-50 transition text-sm bg-white"
              >
                New Assessment
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className={`px-4 py-2 rounded-lg font-medium ${getLevelColor(result.level).badge}`}
              >
                {getLevelColor(result.level).label}
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
                Triage Level: {result.level}
              </span>
            </div>

            <div className="bg-white rounded-lg p-4 mb-6">
              <p className="font-semibold mb-1">Summary</p>
              <p className="text-gray-700">{result.summary || "Assessment complete."}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {result.homeAdvice && result.homeAdvice.length > 0 && (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-green-700">
                    🏠 Home Care Advice
                  </h3>
                  <ul className="list-disc ml-5 space-y-1">
                    {result.homeAdvice.map((advice, i) => (
                      <li key={i}>{advice}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.emergencySigns && result.emergencySigns.length > 0 && (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-red-600">
                    🚨 Emergency Signs
                  </h3>
                  <ul className="list-disc ml-5 space-y-1">
                    {result.emergencySigns.map((sign, i) => (
                      <li key={i}>{sign}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.clinicReason && (
                <div className="bg-white rounded-lg p-4 md:col-span-2">
                  <h3 className="font-semibold mb-2">
                    🏥 When to Visit a Clinic
                  </h3>
                  <p className="text-gray-700">{result.clinicReason}</p>
                </div>
              )}
            </div>

            {result.followUpQuestion && (
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-blue-700 mb-1">Follow-up Question</p>
                <p className="text-blue-800">{result.followUpQuestion}</p>
              </div>
            )}

            <div className="mt-8 border-t pt-6">
              <h3 className="font-semibold mb-2">AI Summary</h3>
              <p className="text-gray-600">
                This assessment is based on the symptoms provided. It is intended for
                preliminary guidance only and should not replace professional medical
                advice. Please consult a healthcare provider for proper diagnosis.
              </p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}