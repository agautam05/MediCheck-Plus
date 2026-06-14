import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "@/lib/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    // Admin Login (local - bypasses backend session for admin)
    if (
      email === "admin@medicheck.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          name: "Administrator",
          email: "admin@medicheck.com",
          role: "admin",
        })
      );

      // Initialize backend session for admin too
      try {
        const response = await apiClient.post("/auth/session", {
          language: "hi",
        });
        const { sessionToken } = response.data.data;
        localStorage.setItem("authToken", sessionToken);
      } catch (err) {
        console.warn("Backend not available, proceeding with local auth");
      }

      setIsLoading(false);
      toast.success("Admin Login Successful");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
      return;
    }

    try {
      // Initialize backend session
      const sessionRes = await apiClient.post("/auth/session", {
        language: "hi",
      });
      const { sessionToken } = sessionRes.data.data;
      localStorage.setItem("authToken", sessionToken);

      // User Login (local storage based)
      const savedUser = localStorage.getItem("medicheckUser");

      if (!savedUser) {
        toast.error("No account found. Please register first.");
        setIsLoading(false);
        return;
      }

      const user = JSON.parse(savedUser);

      if (user.email !== email || user.password !== password) {
        toast.error("Invalid email or password");
        setIsLoading(false);
        return;
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          ...user,
          role: "user",
        })
      );

      setIsLoading(false);
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to connect to server. Please ensure the backend is running.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Login
        </h1>

        <p className="text-gray-500 mb-6">
          Admin Credentials:
          <br />
          admin@medicheck.com / admin123
        </p>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? "Connecting..." : "Login"}
          </button>

        </div>

        <div className="mt-6 text-center">

          <Link
            to="/forgot-password"
            className="text-blue-600"
          >
            Forgot Password?
          </Link>

          <p className="mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600"
            >
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}