import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Log In</h1>
      <LoginForm />
    </div>
  );
};

export default Login;