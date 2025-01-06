import React, { useContext, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation1.json'; // এখানে Lottie ফাইলটির পাথ দিন
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6); // ক্যাপচা ইনপুট লোড করতে
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  const {signIn} = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = () => {
    const captchaValue = document.getElementById('captchaInput').value;
    // ক্যাপচা যাচাই করা
    const isValid = validateCaptcha(captchaValue);
    setCaptchaValid(isValid); // সঠিক হলে captchaValid হবে true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
    } else {
      console.log('Captcha is incorrect');
    }
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

        {/* Captcha */}
        <div className="flex flex-col">
          <label htmlFor="captcha" className="text-sm font-semibold">Captcha:</label>
          <LoadCanvasTemplate /> {/* ক্যাপচা ক্যানভাস */}
          <input
            type="text"
            id="captchaInput"
            className="p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter captcha"
            onBlur={handleCaptchaChange} // ক্যাপচা ইনপুট শেষ হলে যাচাই করা
            required
          />
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            className={`w-full py-3 mt-4 font-semibold rounded-md transition-colors duration-300 
              ${captchaValid ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
            disabled={!captchaValid} // ক্যাপচা সঠিক না হলে বাটন ডিজেবল থাকবে
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
