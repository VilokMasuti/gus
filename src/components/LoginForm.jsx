import { Eye, EyeOff, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captcha: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-8 lg:p-10 flex flex-col justify-center min-h-[600px] mt-20">
      {/* Floating Logo */}
      <div className="absolute -top-8 right-5 bg-[#6C63FF] rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-10">
        <MessageCircle className="w-8 h-8 animate-pulse duration-1000 ease-in-out text-white" />
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">
          Log in to your Account
        </h1>
        <p className="text-gray-600 text-base">
          Choose any method below to sign in
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="relative mt-4">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full px-4 py-3 border-2 border-gray-300  text-gray-900 placeholder-transparent focus:outline-none focus:border-[#6C63FF] peer transition-all duration-200"
            placeholder="Email address"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200
               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-focus:top-[-0.6rem] peer-focus:bg-white peer-focus:text-sm peer-focus:text-[#6C63FF]
               peer-[:not(:placeholder-shown)]:top-[-0.6rem] peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:text-[#6C63FF]"
          >
            Email address*
          </label>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password*
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 pr-10 border-2 border-gray-300  text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-all duration-200"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline focus:outline-none p-0"
            >
              Forgot password?
            </button>
          </div>
        </div>

        {/* Captcha */}
        <div>
          <div className="bg-white  border-2 border-gray-300 flex items-center text-center  h-28  justify-start px-5 py-4 mb-2 shadow-sm">
            <span
              className="text-2xl text-center font-bold text-gray-800 select-none tracking-widest  pl-28"
              style={{ fontFamily: 'monospace', letterSpacing: '4px' }}
            >
              H3grvh
            </span>
          </div>
          <label
            htmlFor="captcha"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Enter the code shown above*
          </label>
          <input
            id="captcha"
            name="captcha"
            type="text"
            required
            value={formData.captcha}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border-2 border-gray-300  text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-all duration-200"
            placeholder="Enter captcha code"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#6C63FF] text-white font-semibold rounded-xl shadow hover:bg-[#5548c8] focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 transition-all duration-200"
        >
          Login
        </button>

        {/* Signup link */}
        <div className="pt-2 text-center">
          <span className="text-gray-600 text-sm">
            Don't have an account yet?{' '}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 hover:underline"
            >
              Sign up here
            </a>
          </span>
        </div>

        {/* Divider */}
        <div className="relative my-4 flex items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-gray-400 font-medium text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full py-3 border border-gray-300 rounded text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
