import React, { useState } from "react";
import { signup } from "../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast('Passwords do not match',{duration:2000,icon:'❌'});
      return;
    }
    setLoading(true);
    try {
      const res = await signup(email, password, name);
      console.log(res);
      if (res) {
        toast('Signup successful!! Please login to continue',{duration:1000,icon:'🚀'});
        setTimeout(()=>navigate('/dashboard'),1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Signup failed: ${error.message}`);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster/>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 btn-secondary" disabled={loading}>
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-black mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-50" cx="12" cy="12" r="12" stroke="currentColor" strokeWidth="4"></circle>
            </svg>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account? <Link to="/login" className="text-lime-600 hover:underline">Log In</Link>
      </p>
    </div>
  );
};

export default SignupForm;
