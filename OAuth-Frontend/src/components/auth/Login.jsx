import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      alert("All fields are required");
      return;
    }
    setLoading(true);
    try {
      const result = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await result.json();
      if (data.success) {
        localStorage.setItem("login", userData.email);
        navigate("/dashboard");
      } else {
        alert(result.message || "Invalid credentitials");
      }
    } catch (err) {
      console.error("Error during login");
      alert("Server error please try again later");
    }
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center ">
      <div className="bg-white w-11/12 max-w-md sm:bg-green-200 sm:w-full p-6 rounded h-screen">
        <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br />
        <h1 className="text-center text-3xl">Login to OAuth</h1>
        <form action="">
          <div>
            <label htmlFor="email" className="block mb-2 text-2xl">
              email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              placeholder="enter email"
              className="text-black bg-white border to-black w-full h-10"
              disabled={loading}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password" className="block mb-2 text-2xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              className="text-black bg-white border to-black w-full h-10"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <br />
          <div className="flex items-center justify-center mt-4">
            <button
              className="w-64 py-2 rounded transition bg-green-600 h-10"
              onClick={handleLogin}
              type="submit"
            >
              Sign In
            </button>
            <br />
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center text-center cursor-pointer text-xl text-blue-800">
              Dont have an account? SignUp
            </button>
          </div>
          <br /> <br />
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="grow h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="grow h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button className="w-64 h-10 bg-white border rounded shadow hover:bg-gray-100">
                Continue with Google
              </button>
              <button className="w-64 h-10 bg-black text-white rounded hover:bg-gray-800">
                Continue with GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
