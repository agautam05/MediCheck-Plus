import { create } from "zustand";
import apiClient from "@/lib/axios";

interface User {
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  initializeSession: () => Promise<string | null>;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem("loggedInUser") || "null"),
  token: localStorage.getItem("authToken"),
  isAuthenticated: !!localStorage.getItem("authToken"),
  isLoading: false,

  initializeSession: async () => {
    try {
      const response = await apiClient.post("/auth/session", {
        language: "hi",
      });

      const { sessionToken, jwt } = response.data.data;
      localStorage.setItem("authToken", jwt);
      localStorage.setItem("sessionToken", sessionToken);
      set({ token: jwt, isAuthenticated: true });
      return jwt;
    } catch (error) {
      console.error("Failed to initialize session:", error);
      return null;
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true });

    // For now, use local auth since the backend doesn't have traditional login
    // The backend uses session-based JWT tokens
    const savedUser = localStorage.getItem("medicheckUser");

    if (!savedUser) {
      throw new Error("No account found. Please register first.");
    }

    const user = JSON.parse(savedUser);
    if (user.email !== email || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    // Initialize backend session
    const token = await get().initializeSession();
    if (!token) {
      throw new Error("Failed to create session");
    }

    const loggedInUser = { ...user, role: "user" };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    set({ user: loggedInUser, isAuthenticated: true, isLoading: false });
  },

  register: async (name: string, email: string, password: string) => {
    const user = { name, email, password };
    localStorage.setItem("medicheckUser", JSON.stringify(user));

    // Initialize backend session
    await get().initializeSession();

    set({ isLoading: false });
  },

  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("sessionToken");
    localStorage.removeItem("loggedInUser");
    set({ user: null, token: null, isAuthenticated: false });
  },

  setUser: (user: User) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    set({ user });
  },
}));