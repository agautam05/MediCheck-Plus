const faqs = [
  {
    question:
      "Does MediCheck+ diagnose diseases?",
    answer:
      "No. MediCheck+ only provides symptom risk assessment and healthcare guidance.",
  },
  {
    question:
      "Can I check medicine interactions?",
    answer:
      "Yes. The platform helps identify potentially harmful medicine combinations.",
  },
  {
    question:
      "Can I store medical records?",
    answer:
      "Yes. Health Vault securely stores prescriptions, reports and health information.",
  },
  {
    question:
      "Does MediCheck+ support regional languages?",
    answer:
      "Yes. The voice assistant is designed for multilingual healthcare accessibility.",
  },
  {
    question:
      "Can hospitals access my records?",
    answer:
      "Only through emergency profile access and with appropriate permissions.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-bold mb-6">
        Frequently Asked Questions
      </h1>

      <p className="text-gray-500 mb-10">
        Common questions about MediCheck+.
      </p>

      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-6"
          >
            <h2 className="font-bold text-lg mb-2">
              {faq.question}
            </h2>

            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}