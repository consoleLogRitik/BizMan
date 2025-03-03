import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../appwrite/auth';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(email, password);
      console.log(res);
      if (res) {
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
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
        <button type="submit" className="w-full p-2 btn-secondary" disabled={loading}>
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-black mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-50" cx="12" cy="12" r="12" stroke="currentColor" strokeWidth="4"></circle>
            </svg>
          ) : (
            'Log In'
          )}
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        First time here? <Link to="/signup" className="text-lime-600 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginForm;