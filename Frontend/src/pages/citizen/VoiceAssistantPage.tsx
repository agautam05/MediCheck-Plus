import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Mic, Volume2 } from "lucide-react";

export default function VoiceAssistantPage() {
  const [recording, setRecording] = useState(false);
  const [response, setResponse] = useState("");

  const startVoiceAssistant = () => {
    setRecording(true);

    setTimeout(() => {
      setRecording(false);

      setResponse(
        "Paracetamol is commonly used for fever and mild pain relief. Follow recommended dosage instructions."
      );
    }, 2500);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Voice Assistant
          </h1>

          <p className="text-gray-500">
            Healthcare guidance in your preferred language.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6">

          <label className="block font-medium mb-2">
            Select Language
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
            <option>Marathi</option>
            <option>Tamil</option>
            <option>Telugu</option>
          </select>

        </div>

        <div className="bg-white border rounded-xl p-10 text-center">

          <button
            onClick={startVoiceAssistant}
            className="bg-blue-600 text-white h-24 w-24 rounded-full flex items-center justify-center mx-auto"
          >
            <Mic size={40} />
          </button>

          <p className="mt-4 font-medium">
            Tap microphone to ask a question
          </p>

          {recording && (
            <div className="mt-6">
              <p className="text-blue-600 font-semibold">
                Listening...
              </p>
            </div>
          )}

        </div>

        {response && (
          <div className="bg-white border rounded-xl p-6">

            <div className="flex items-center gap-2 mb-4">
              <Volume2 size={20} />
              <h2 className="font-bold">
                Assistant Response
              </h2>
            </div>

            <p>{response}</p>

          </div>
        )}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Example Questions
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>
              • What is Paracetamol used for?
            </li>

            <li>
              • Can I take Aspirin with Warfarin?
            </li>

            <li>
              • What should I do for fever?
            </li>

            <li>
              • Where is the nearest hospital?
            </li>
          </ul>

        </div>

      </div>
    </DashboardLayout>
  );
}