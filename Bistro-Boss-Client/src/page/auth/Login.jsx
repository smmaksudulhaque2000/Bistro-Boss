import React, { useContext, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation1.json'; // এখানে Lottie ফাইলটির পাথ দিন
import bg from '../../assets/reservation/wood-grain-pattern-gray1x.png'; // ব্যাকগ্রাউন্ড ইমেজ
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6); // ক্যাপচা ইনপুট লোড করতে
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = () => {
    const captchaValue = document.getElementById('captchaInput').value;
    const isValid = validateCaptcha(captchaValue); // ক্যাপচা যাচাই করা
    setCaptchaValid(isValid); // সঠিক হলে captchaValid হবে true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      signIn(email, password).then((result) => {
        const user = result.user;
        console.log(user);
      });
    } else {
      console.log('Captcha is incorrect');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        {/* Lottie Animation Section */}
        <div className="w-1/2 p-6 flex items-center justify-center">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Login Form Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">
                Email:
              </label>
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
              <label htmlFor="password" className="text-sm font-semibold">
                Password:
              </label>
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
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Captcha Section */}
            <div className="flex flex-col">
              <label htmlFor="captcha" className="text-sm font-semibold">
                Captcha:
              </label>
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
          <div className="text-center mt-4">
            <p className="text-sm">
              New here?{' '}
              <Link to={"/signup"} className="text-blue-500 hover:underline">
                Create a New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
