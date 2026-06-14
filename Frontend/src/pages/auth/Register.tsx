
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "@/lib/axios";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        setIsLoading(true);

        const user = {
            name,
            email,
            password,
        };

        localStorage.setItem(
            "medicheckUser",
            JSON.stringify(user)
        );

        // Initialize backend session for API access
        try {
            const response = await apiClient.post("/auth/session", {
                language: "hi",
            });
            const { sessionToken } = response.data.data;
            localStorage.setItem("authToken", sessionToken);
        } catch (err) {
            console.warn("Backend not available. Session will be created on login.");
        }

        setIsLoading(false);
        toast.success("Account Created Successfully");

        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };


    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white border rounded-xl p-8">

                <h1 className="text-3xl font-bold mb-6">
                    Create Account
                </h1>

                <div className="space-y-4">

                    <input
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full border rounded-lg p-3"
                    />

                    <input
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
                        onClick={handleRegister}
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
                    >
                        {isLoading ? "Creating Account..." : "Register"}
                    </button>

                </div>

                <p className="text-center mt-5">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}
