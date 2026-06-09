export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold mb-6">
        About MediCheck+
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        MediCheck+ is a medicine safety and healthcare
        accessibility platform designed to help users
        understand medicines, avoid dangerous drug
        interactions, identify counterfeit medicines,
        assess symptom urgency, and securely manage
        health records.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">
            Medicine Safety
          </h2>
          <p>
            Scan medicines and receive understandable
            safety information.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">
            Rural Accessibility
          </h2>
          <p>
            Designed for multilingual healthcare access.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">
            Public Health
          </h2>
          <p>
            Generate health insights from anonymous data.
          </p>
        </div>

      </div>
    </div>
  );
}