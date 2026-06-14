import { useState, useRef } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import apiClient from "@/lib/axios";
import type { ScanResponse, ApiResponse } from "@/types/api";

export default function MedicineScannerPage() {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ScanResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
      setShowResult(false);
      setResult(null);
      setError(null);
    }
  };

  const analyzeMedicine = async () => {
    if (!imageFile) return;

    setLoading(true);
    setError(null);

    try {
      // Convert image to base64
      const base64 = await fileToBase64(imageFile);

      const response = await apiClient.post<ApiResponse<ScanResponse>>(
        "/medicine/scan",
        {
          image: base64,
          lang: "hi",
        }
      );

      const scanResult = response.data.data;
      setResult(scanResult);
      setShowResult(true);
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.data?.error ||
        "Failed to analyze medicine. Please try again.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          // Remove the data:image/...;base64, prefix
          const base64 = reader.result.split(",")[1];
          resolve(base64);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = reject;
    });
  };

  const resetScanner = () => {
    setImage(null);
    setImageFile(null);
    setShowResult(false);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Medicine Scanner</h1>
          <p className="text-gray-500">
            Upload a medicine image for instant AI-powered analysis.
          </p>
        </div>

        {/* Upload Section */}
        {!showResult && (
          <div className="bg-white border rounded-xl p-6">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full"
            />

            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  alt="Medicine"
                  className="w-72 rounded-xl border shadow-sm"
                />
              </div>
            )}

            {image && !loading && (
              <button
                onClick={analyzeMedicine}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Analyze Medicine
              </button>
            )}
          </div>
        )}

        {/* Loading State */}
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

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-300 rounded-xl p-6">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              ✗ Analysis Failed
            </div>
            <p className="text-red-700 mb-4">{error}</p>
            <button
              onClick={resetScanner}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Result Section */}
        {showResult && result && (
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Analysis Result</h2>
              <button
                onClick={resetScanner}
                className="px-4 py-2 border rounded-lg hover:bg-slate-50 transition text-sm"
              >
                Scan Another
              </button>
            </div>

            <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              ✓ Analysis Completed Successfully
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
                AI Confidence: {(result.confidence * 100).toFixed(1)}%
              </div>
              {result.error && (
                <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg">
                  {result.error}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold">Brand Name</p>
                <p>{result.brandName || "N/A"}</p>
              </div>
              <div>
                <p className="font-semibold">Generic Name</p>
                <p>{result.genericName || "N/A"}</p>
              </div>
              <div>
                <p className="font-semibold">Category</p>
                <p>{result.category || "N/A"}</p>
              </div>
              <div>
                <p className="font-semibold">Prescription Required</p>
                <p>{result.prescriptionRequired ? "Yes" : "No"}</p>
              </div>
              <div>
                <p className="font-semibold">Indication / Uses</p>
                <p>{result.indication || "N/A"}</p>
              </div>
              <div>
                <p className="font-semibold">Dosage (Adult)</p>
                <p>{result.dosage?.adult || "N/A"}</p>
              </div>
              <div>
                <p className="font-semibold">Dosage (Child)</p>
                <p>{result.dosage?.child || "N/A"}</p>
              </div>
            </div>

            {result.sideEffects && result.sideEffects.length > 0 && (
              <div className="mt-6">
                <p className="font-semibold mb-2">Side Effects</p>
                <ul className="list-disc ml-5">
                  {result.sideEffects.map((effect, i) => (
                    <li key={i}>{effect}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.warnings && result.warnings.length > 0 && (
              <div className="mt-6">
                <p className="font-semibold text-red-600 mb-2">Warnings</p>
                <ul className="list-disc ml-5">
                  {result.warnings.map((warning, i) => (
                    <li key={i}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 border-t pt-6">
              <h3 className="font-semibold mb-2">AI Summary</h3>
              <p className="text-gray-600">
                {result.brandName
                  ? `${result.brandName} (${result.genericName || ""}) is classified as ${result.category || "a medicine"}. ${result.indication ? `Used for: ${result.indication}.` : ""} Always follow recommended dosage and consult a healthcare professional if symptoms persist.`
                  : "Analysis completed. Please verify the results with a pharmacist or doctor."}
              </p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}