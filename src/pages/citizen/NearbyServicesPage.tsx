
import DashboardLayout from "@/layouts/DashboardLayout";
import {
  MapPin,
  Phone,
  Navigation,
  Ambulance,
} from "lucide-react";

const hospitals = [
  {
    name: "District Hospital",
    type: "Hospital",
    distance: "2.1 km",
    phone: "+91 9876543210",
  },
  {
    name: "City Medical Center",
    type: "Clinic",
    distance: "3.4 km",
    phone: "+91 9876543211",
  },
  {
    name: "Apollo Pharmacy",
    type: "Pharmacy",
    distance: "0.8 km",
    phone: "+91 9876543212",
  },
  {
    name: "Red Cross Blood Bank",
    type: "Blood Bank",
    distance: "4.2 km",
    phone: "+91 9876543213",
  },
];

export default function NearbyServicesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Nearby Healthcare Services
          </h1>

          <p className="text-gray-500">
            Find hospitals, clinics, pharmacies and emergency services nearby.
          </p>
        </div>

        {/* Emergency Section */}

        <div className="bg-red-50 border border-red-300 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Ambulance className="text-red-600" />
            <h2 className="text-2xl font-bold text-red-600">
              Emergency Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">

            <button className="bg-red-600 text-white py-3 rounded-lg">
              Call Ambulance
            </button>

            <button className="bg-red-600 text-white py-3 rounded-lg">
              Emergency Hospital
            </button>

            <button className="bg-red-600 text-white py-3 rounded-lg">
              Blood Bank
            </button>

          </div>

        </div>

        {/* Map Placeholder */}

        <div className="bg-white border rounded-xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Location Map
          </h2>

          <div className="h-72 rounded-xl bg-slate-100 flex items-center justify-center">
            🗺️ Google Maps Integration Placeholder
          </div>

        </div>

        {/* Services */}

        <div className="grid md:grid-cols-2 gap-5">

          {hospitals.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">
                {service.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {service.type}
              </p>

              <div className="mt-4 space-y-2">

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {service.distance}
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  {service.phone}
                </div>

              </div>

              <div className="mt-5 flex gap-3">

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Call
                </button>

                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <Navigation size={16} />
                  Directions
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}

