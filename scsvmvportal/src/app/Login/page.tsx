// src/app/login/page.tsx

import React from 'react';

// A simple component for the Google G icon SVG
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 48 48" >
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.089,5.571l6.19,5.238C42.012,36.49,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>
);

export default function LoginPage() {
  return (
    // Main container to center the login form on the page
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      
      {/* Login Form Card */}
      <div className="w-full max-w-[800px] mx-auto py-5 h-full max-h-[500px] rounded-md border-[#088f79] border-2 bg-white shadow-md  h-250px ">

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-bold text-[#0369A1] p-3">
          Student Login
        </h2>

        <form>
          <div className="space-y-5 px-20">
            
            {/* User Name Field */}
            <div>
              <label 
                htmlFor="username" 
                className="mb-1 block text-sm font-bold  text-[#0369A1]"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter User Name"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="mb-1 block text-sm font-bold text-[#0369A1]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="flex w-[300px] items-center justify-center space-x-2 rounded-md bg-[#0072bc] p-1 px-1 h-15px w-30px font-semibold text-white hover:bg-[#0369A1]"
            >
              <span>&rarr;</span>
              <span>Sign In</span>
            </button>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-0.5 text-center p-[1px]">
          <a href="#" className="text-sm text-blue-600 p-0.25 hover:underline mt-2 block">
            Forgot Password
          </a>
        </div>
        
        {/* "or" Separator */}
        <div className="my-3 flex items-center p-0.5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Continue with Google Button */}
        <div className="flex justify-center ">
          <button
            type="button"
            className="flex w-[300px] items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white p-2 font-semibold text-gray-700 hover:bg-blue-100"
          >
            <GoogleIcon />
            <span>Continue with google</span>
          </button>
        </div>

      </div>
    </div>
  );
}