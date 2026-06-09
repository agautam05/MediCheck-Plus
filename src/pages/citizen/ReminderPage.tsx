import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function ReminderPage() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");

  const [reminders, setReminders] = useState([
    {
      medicine: "Paracetamol",
      time: "08:00 AM",
      status: "Pending",
    },
  ]);

  const addReminder = () => {
    if (!medicine || !time) return;

    setReminders([
      ...reminders,
      {
        medicine,
        time,
        status: "Pending",
      },
    ]);

    setMedicine("");
    setTime("");
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold mb-2">
            Medicine Reminders
          </h1>

          <p className="text-gray-500">
            Never miss your medication schedule.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Add Reminder
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Medicine Name"
              value={medicine}
              onChange={(e) =>
                setMedicine(e.target.value)
              }
              className="border rounded-lg p-3"
            />

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
              className="border rounded-lg p-3"
            />

            <button
              onClick={addReminder}
              className="bg-blue-600 text-white rounded-lg"
            >
              Add Reminder
            </button>

          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Active Reminders
          </h2>

          <div className="space-y-3">

            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex justify-between"
              >
                <div>
                  <p className="font-semibold">
                    {reminder.medicine}
                  </p>

                  <p className="text-sm text-gray-500">
                    {reminder.time}
                  </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  {reminder.status}
                </span>
              </div>
            ))}

          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Adherence Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">
                Today's Doses
              </p>

              <h3 className="text-3xl font-bold">
                4
              </h3>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">
                Taken
              </p>

              <h3 className="text-3xl font-bold text-green-600">
                3
              </h3>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">
                Missed
              </p>

              <h3 className="text-3xl font-bold text-red-600">
                1
              </h3>
            </div>

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}