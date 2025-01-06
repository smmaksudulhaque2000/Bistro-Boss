import React from 'react';
import bg from '../../assets/reservation/wood-grain-pattern-gray1x.png';

const SignUp = () => {
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
            <div className="bg-white rounded-lg shadow-2xl w-[900px] flex overflow-hidden"
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
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Type here"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already registered?{' '}
                        <a href="#" className="text-yellow-500 font-medium hover:underline">
                            Go to log in
                        </a>
                    </p>
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <span className="text-gray-500">Or sign up with</span>
                        <div className="flex space-x-3">
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                <i className="fab fa-google"></i>
                            </button>
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Illustration */}
                <div className="w-1/2 bg-yellow-50 flex items-center justify-center">
                    <img
                        src={bg}
                        alt="Sign Up Illustration"
                        className="w-3/4"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
