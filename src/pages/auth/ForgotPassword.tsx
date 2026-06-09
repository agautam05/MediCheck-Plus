
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Password reset link sent successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="w-full max-w-md bg-white border rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Reset Password
        </h1>

        <p className="text-gray-500 mb-6">
          Enter your registered email address to receive a password reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={handleReset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Send Reset Link
        </button>

        <div className="text-center mt-5">

          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}
