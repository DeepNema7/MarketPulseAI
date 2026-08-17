import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:8000/auth/register",
        {
          full_name: form.full_name,
          email: form.email,
          password: form.password,
        }
      );

      alert("Registration Successful!");

      navigate("/login");
    } catch (err: any) {
      alert(
        err.response?.data?.detail ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        <Link
          to="/"
          className="flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome to MarketPulseAI
        </p>

        <form
          onSubmit={register}
          className="mt-8 space-y-5"
        >
          <input
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            placeholder="Full Name"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
          />

          <input
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="relative">
            <input
              className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
              placeholder="Password"
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-zinc-400"
            >
              {showPassword ? (
                <EyeOff />
              ) : (
                <Eye />
              )}
            </button>
          </div>

          <input
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-blue-600 p-4 font-semibold text-white hover:bg-blue-500"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
} 