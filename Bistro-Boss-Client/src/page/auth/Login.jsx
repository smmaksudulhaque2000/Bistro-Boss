import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation1.json'; // এখানে Lottie ফাইলটির পাথ দিন


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Lottie animation */}
      <div className="mb-6">
        <Lottie animationData={animationData} loop={true} />
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div>
        <input
          type="submit"
          value="Login"
          className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
