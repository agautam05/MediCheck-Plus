import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Navbar */}
            <header className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    <h1 className="text-2xl font-bold text-blue-600">
                        MediCheck+
                    </h1>

                    <nav className="flex items-center gap-6">
                        <Link to="/">Home</Link>

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>

                        <Link to="/faq">
                            FAQ
                        </Link>

                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Login
                        </Link>
                    </nav>

                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center">

                    <h1 className="text-6xl font-bold text-slate-900">
                        MediCheck+
                    </h1>

                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                        AI-Powered Medicine Safety Platform helping users
                        understand medicines, avoid dangerous drug
                        interactions, detect counterfeit medicines,
                        assess symptom urgency and securely manage
                        medical records.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">

                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/about"
                            className="border px-8 py-4 rounded-xl"
                        >
                            Learn More
                        </Link>

                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Core Features
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="bg-white border rounded-xl p-6">
                        <h3 className="font-bold text-lg">
                            📷 Medicine Scanner
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Scan medicine strips and understand
                            dosage, usage and warnings.
                        </p>
                    </div>

                    <div className="bg-white border rounded-xl p-6">
                        <h3 className="font-bold text-lg">
                            💊 Drug Interaction Checker
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Detect potentially dangerous medicine
                            combinations.
                        </p>
                    </div>

                    <div className="bg-white border rounded-xl p-6">
                        <h3 className="font-bold text-lg">
                            🩺 Symptom Assessment
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Identify symptom urgency and healthcare
                            recommendations.
                        </p>
                    </div>

                    <div className="bg-white border rounded-xl p-6">
                        <h3 className="font-bold text-lg">
                            📁 Health Vault
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Securely store medical records and
                            prescriptions.
                        </p>
                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="bg-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-4 gap-6">

                        <div className="text-center">
                            <h3 className="text-4xl font-bold">
                                10K+
                            </h3>
                            <p>Medicine Scans</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-4xl font-bold">
                                5K+
                            </h3>
                            <p>Interaction Checks</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-4xl font-bold">
                                2K+
                            </h3>
                            <p>Risk Alerts</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-4xl font-bold">
                                8K+
                            </h3>
                            <p>Health Records</p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Impact Section */}

            <section className="py-20 bg-blue-600 text-white text-center">

                <h2 className="text-4xl font-bold">
                    Healthcare Made Safer
                </h2>

                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Helping citizens make informed medicine decisions,
                    avoid dangerous interactions and access healthcare
                    services quickly.
                </p>

            </section>

            {/* CTA */}

            <section className="py-20 text-center">

                <h2 className="text-4xl font-bold">
                    Start Your Health Journey
                </h2>

                <p className="mt-4 text-gray-500">
                    Safer medicines. Smarter healthcare.
                </p>

                <Link
                    to="/dashboard"
                    className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl"
                >
                    Open Dashboard
                </Link>

            </section>

            {/* Footer */}

            <footer className="bg-slate-900 text-white py-12">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                    <div>
                        <h3 className="font-bold text-xl">
                            MediCheck+
                        </h3>

                        <p className="text-slate-400 mt-3">
                            Medicine Safety & Healthcare
                            Accessibility Platform.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">
                            Platform
                        </h4>

                        <div className="space-y-2">

                            <Link
                                to="/dashboard"
                                className="block text-slate-400"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/scanner"
                                className="block text-slate-400"
                            >
                                Scanner
                            </Link>

                            <Link
                                to="/interaction"
                                className="block text-slate-400"
                            >
                                Interaction Checker
                            </Link>

                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">
                            Company
                        </h4>

                        <div className="space-y-2">

                            <Link
                                to="/about"
                                className="block text-slate-400"
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                className="block text-slate-400"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/faq"
                                className="block text-slate-400"
                            >
                                FAQ
                            </Link>

                        </div>
                    </div>

                </div>

            </footer>

        </div>
    );
}