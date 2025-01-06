import React, { useContext, useEffect, useState } from 'react';
import bg from '../../assets/reservation/wood-grain-pattern-gray1x.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    useEffect(() => {
        loadCaptchaEnginge(6); // ক্যাপচা লোড
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captchaValid, setCaptchaValid] = useState(false);

    const { signUp } = useContext(AuthContext);

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleCaptchaChange = () => {
        const captchaValue = document.getElementById('captchaInput').value;
        const isValid = validateCaptcha(captchaValue);
        setCaptchaValid(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captchaValid) {
            signUp(email, password, name)
                .then((result) => {
                    const user = result.user;
                    console.log('User signed up:', user);
                })
                .catch((error) => {
                    console.error('Sign-up error:', error);
                });
        } else {
            console.log('Captcha is incorrect');
        }
    };

    return (
        <div
            className="flex items-center justify-center h-screen"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="bg-white rounded-lg shadow-2xl w-[900px] flex overflow-hidden"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                {/* Left Side - Form */}
                <div className="w-1/2 p-10">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={name}
                                onChange={handleNameChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Type here"
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Captcha</label>
                            <LoadCanvasTemplate />
                            <input
                                type="text"
                                id="captchaInput"
                                placeholder="Enter captcha"
                                onBlur={handleCaptchaChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition ${
                                captchaValid ? '' : 'cursor-not-allowed opacity-50'
                            }`}
                            disabled={!captchaValid}
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already registered?{' '}
                        <Link to={"/login"} className="text-yellow-500 font-medium hover:underline">
                            Go to log in
                        </Link>
                    </p>
                </div>

                {/* Right Side - Illustration */}
                <div className="w-1/2 bg-yellow-50 flex items-center justify-center">
                    <img src={bg} alt="Sign Up Illustration" className="w-3/4" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
