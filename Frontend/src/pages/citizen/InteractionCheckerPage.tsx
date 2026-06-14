import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import apiClient from "@/lib/axios";
import type { InteractionResponse, ApiResponse } from "@/types/api";

const commonMedicines = [
  "Paracetamol",
  "Aspirin",
  "Warfarin",
  "Ibuprofen",
  "Cetirizine",
  "Amoxicillin",
  "Metformin",
  "Omeprazole",
  "Losartan",
  "Atorvastatin",
  "Diclofenac",
  "Ciprofloxacin",
];

export default function InteractionCheckerPage() {
  const [medicines, setMedicines] = useState<string[]>(["", ""]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InteractionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMedicineChange = (index: number, value: string) => {
    const updated = [...medicines];
    updated[index] = value;
    setMedicines(updated);
  };

  const addMedicineField = () => {
    setMedicines([...medicines, ""]);
  };

  const removeMedicineField = (index: number) => {
    if (medicines.length <= 2) return;
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const checkInteraction = async () => {
    const validMedicines = medicines.filter((m) => m.trim() !== "");
    if (validMedicines.length < 2) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await apiClient.post<ApiResponse<InteractionResponse>>(
        "/interaction/check",
        {
          medicineNames: validMedicines,
          lang: "hi",
        }
      );

      setResult(response.data.data);
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message || "Failed to check interactions. Please try again.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    const upper = severity?.toUpperCase() || "";
    if (upper.includes("HIGH") || upper.includes("SEVERE") || upper.includes("CRITICAL")) {
      return {
        badge: "bg-red-100 text-red-700",
        border: "border-red-200",
        bg: "bg-red-50",
      };
    }
    if (upper.includes("MEDIUM") || upper.includes("MODERATE")) {
      return {
        badge: "bg-yellow-100 text-yellow-700",
        border: "border-yellow-200",
        bg: "bg-yellow-50",
      };
    }
    return {
      badge: "bg-green-100 text-green-700",
      border: "border-green-200",
      bg: "bg-green-50",
    };
  };

  const resetChecker = () => {
    setResult(null);
    setError(null);
  };

  const validMedicinesCount = medicines.filter((m) => m.trim() !== "").length;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Drug Interaction Checker</h1>
          <p className="text-gray-500">
            Detect potentially dangerous medicine combinations using AI.
          </p>
        </div>

        {/* Input Section */}
        {!result && (
          <div className="bg-white border rounded-xl p-6 space-y-4">
            {medicines.map((med, index) => (
              <div key={index} className="flex gap-2 items-center">
                <select
                  className="flex-1 border rounded-lg p-3"
                  value={med}
                  onChange={(e) => handleMedicineChange(index, e.target.value)}
                >
                  <option value="">Select Medicine {index + 1}</option>
                  {commonMedicines.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                {medicines.length > 2 && (
                  <button
                    onClick={() => removeMedicineField(index)}
                    className="text-red-500 hover:text-red-700 px-2"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}

            <div className="flex gap-3">
              <button
                onClick={addMedicineField}
                className="px-4 py-2 border rounded-lg hover:bg-slate-50 transition text-sm"
              >
                + Add Medicine
              </button>

              <button
                onClick={checkInteraction}
                disabled={validMedicinesCount < 2 || loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50 transition"
              >
                {loading ? "Checking..." : "Check Interaction"}
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
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

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-300 rounded-xl p-6">
            <p className="text-red-700 mb-4">{error}</p>
            <button
              onClick={resetChecker}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Result Section */}
        {result && !loading && (
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Interaction Results</h2>
              <button
                onClick={resetChecker}
                className="px-4 py-2 border rounded-lg hover:bg-slate-50 transition text-sm"
              >
                New Check
              </button>
            </div>

            <div className="mb-6">
              <span
                className={`px-4 py-2 rounded-lg font-medium inline-block ${
                  result.overallSafety?.toUpperCase().includes("SAFE")
                    ? "bg-green-100 text-green-700"
                    : result.overallSafety?.toUpperCase().includes("CAUTION")
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                Overall Safety: {result.overallSafety || "Unknown"}
              </span>
            </div>

            {result.interactions && result.interactions.length > 0 ? (
              <div className="space-y-4">
                {result.interactions.map((interaction, index) => {
                  const colors = getSeverityColor(interaction.severity);
                  return (
                    <div
                      key={index}
                      className={`rounded-lg border p-4 ${colors.bg} ${colors.border}`}
                    >
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}>
                          {interaction.severity}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {interaction.drugs?.join(" + ") || "Unknown interaction"}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-2">
                        {interaction.description || "No description available."}
                      </p>

                      {interaction.recommendation && (
                        <p className="font-medium text-sm">
                          Recommendation:{" "}
                          <span className="font-normal">
                            {interaction.recommendation}
                          </span>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  No significant drug interactions found between the selected medicines.
                </p>
              </div>
            )}

            <div className="mt-8 border-t pt-6">
              <h3 className="font-semibold mb-2">AI Summary</h3>
              <p className="text-gray-600">
                Interaction analysis completed using medicine safety rules and drug
                compatibility checks. {result.interactions?.length > 0
                  ? `${result.interactions.length} potential interaction(s) identified.`
                  : "No interactions detected."}{" "}
                Users should always consult a qualified healthcare professional before
                combining medicines.
              </p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}