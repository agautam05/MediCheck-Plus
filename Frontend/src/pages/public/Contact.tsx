import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-bold mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Reach out to the MediCheck+ team for support,
        partnerships, healthcare initiatives or
        technical assistance.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail />
              <div>
                <p className="font-semibold">
                  Email
                </p>
                <p className="text-gray-500">
                  support@medicheckplus.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone />
              <div>
                <p className="font-semibold">
                  Phone
                </p>
                <p className="text-gray-500">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin />
              <div>
                <p className="font-semibold">
                  Location
                </p>
                <p className="text-gray-500">
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Send Message
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border rounded-lg p-3"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Send Message
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}