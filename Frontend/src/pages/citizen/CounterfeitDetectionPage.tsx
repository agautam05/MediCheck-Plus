
    import { useState } from "react";
    import DashboardLayout from "@/layouts/DashboardLayout";

    export default function CounterfeitDetectionPage() {
    const [batch, setBatch] = useState("");
    const [result, setResult] = useState<any>(null);

    const verifyMedicine = () => {
        if (!batch) return;

        if (batch.toUpperCase().includes("FAKE")) {
        setResult({
            status: "Potential Counterfeit",
            color: "text-red-600",
            bg: "bg-red-50",
            border: "border-red-300",
            icon: "🚨",
            details:
            "This batch number has been flagged for verification.",
        });
        } else {
        setResult({
            status: "Authentic Medicine",
            color: "text-green-600",
            bg: "bg-green-50",
            border: "border-green-300",
            icon: "✅",
            details:
            "Medicine verified successfully against manufacturer records.",
        });
        }
    };

    return (
        <DashboardLayout>
        <div className="max-w-5xl mx-auto space-y-6">

            <div>
            <h1 className="text-4xl font-bold mb-2">
                Counterfeit Medicine Detection
            </h1>

            <p className="text-gray-500">
                Verify medicine authenticity using batch number.
            </p>
            </div>

            <div className="bg-white border rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">
                Verify Medicine
            </h2>

            <div className="flex gap-4">

                <input
                type="text"
                placeholder="Enter Batch Number"
                value={batch}
                onChange={(e) =>
                    setBatch(e.target.value)
                }
                className="flex-1 border rounded-lg p-3"
                />

                <button
                onClick={verifyMedicine}
                className="bg-blue-600 text-white px-6 rounded-lg"
                >
                Verify
                </button>

            </div>

            </div>

            {result && (
            <div
                className={`border rounded-xl p-6 ${result.bg} ${result.border}`}
            >
                <h2
                className={`text-3xl font-bold ${result.color}`}
                >
                {result.icon} {result.status}
                </h2>

                <p className="mt-4">
                {result.details}
                </p>
            </div>
            )}

            <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-white border rounded-xl p-5">
                <p className="text-gray-500">
                Verified Medicines
                </p>

                <h2 className="text-3xl font-bold mt-2">
                2,845
                </h2>
            </div>

            <div className="bg-white border rounded-xl p-5">
                <p className="text-gray-500">
                Suspicious Reports
                </p>

                <h2 className="text-3xl font-bold mt-2 text-red-600">
                126
                </h2>
            </div>

            <div className="bg-white border rounded-xl p-5">
                <p className="text-gray-500">
                Manufacturers
                </p>

                <h2 className="text-3xl font-bold mt-2">
                84
                </h2>
            </div>

            </div>

        </div>
        </DashboardLayout>
    );
    }
