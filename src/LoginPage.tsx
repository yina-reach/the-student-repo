import { useState } from 'react';
import adminImageBlue from './assets/loginAdminBlue.png';
import adminImageYellow from './assets/loginAdminYellow.png';
import businessImageBlue from './assets/loginBusinessBlue.png';
import businessImageYellow from './assets/loginBusinessYellow.png';
import studentImageBlue from './assets/loginStudentBlue.png';
import studentImageYellow from './assets/loginStudentYellow.png';
import googleImage from './assets/loginGoogle.png';

export default function LoginPage() {
  const [role, setRole] = useState("business");

  const roles = [
    {
      name: "student",
      label: "STUDENT",
      image:
        role === "student" ? (
          <img src={studentImageYellow} alt="Student" className="w-10 h-10" />
        ) : (
          <img src={studentImageBlue} alt="Student" className="w-10 h-10" />
        ),
    },
    {
      name: "business",
      label: "BUSINESS",
      image:
        role === "business" ? (
          <img src={businessImageYellow} alt="Business" className="w-10 h-10" />
        ) : (
          <img src={businessImageBlue} alt="Business" className="w-10 h-10" />
        ),
    },
    {
      name: "admin",
      label: "ADMIN",
      image:
        role === "admin" ? (
          <img src={adminImageYellow} alt="Admin" className="w-10 h-10" />
        ) : (
          <img src={adminImageBlue} alt="Admin" className="w-10 h-10" />
        ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[500px] text-center">
        {/* Title */}
        <h1 className="font-['font-mono'] font-semibold text-[30px] leading-none text-[#1e2015] tracking-[-1.2px]">
          LOGIN TO YOUR ACCOUNT
        </h1>

        {/* Role Selector */}
        <div className="flex justify-center gap-6 mb-6 mt-4">
          {roles.map((r) => (
            <button
              key={r.name}
              onClick={() => setRole(r.name)}
              className={`flex flex-col items-center justify-center border-2 rounded-xl px-8 py-5 w-32 transition-all ${
                role === r.name
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-300 text-blue-600 hover:border-blue-500"
              }`}
            >
              <div className="mb-1">{r.image}</div>
              <span className="text-sm font-semibold">{r.label}</span>
            </button>
          ))}
        </div>

        {/* Login Form */}
        <div className="border rounded-xl p-6 text-left">
          {/* Google Sign-in */}
          <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 mb-4 bg-[#4285F4] text-white hover:bg-blue-700 transition">
            <img src={googleImage} alt="Google icon" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm px-2">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Email */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />

          {/* Continue button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            CONTINUE
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account yet?{" "}
          <a href="#" className="text-yellow-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
