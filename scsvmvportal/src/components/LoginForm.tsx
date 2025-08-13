// src/app/login/page.tsx

"use client";

import React, { useState } from 'react';
// src/app/login/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Your Account", // 👈 Title for this specific page
};


// --- SVG Icon Components ---

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 48 48" >
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.089,5.571l6.19,5.238C42.012,36.49,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.575M9.879 9.879a3 3 0 104.242 4.242M9.879 9.879L4.242 4.242M4.242 4.242L9.879 9.879" />
  </svg>
);

// --- Login Page Component ---

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      
      <div className="w-full max-w-[550px] mt-[80px] mx-auto py-5 h-full max-h-[440px] rounded-md border-[#0369A1] border-2 bg-white shadow-md ">

        <h2 className="mb-2 text-center text-[27px] font-bold text-[#0369A1] p-3">
          Student Login
        </h2>

        <form>
          <div className="space-y-5 px-20">
            
            <div>
              <label 
                htmlFor="username" 
                className="mb-1 block text-sm font-bold text-[#0369A1]"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter User Name"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 text-[#34495E]"
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="mb-1 block text-sm font-bold text-[#0369A1]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter Password"
                  className="w-full rounded-md border border-gray-300 p-2 pr-10 focus:border-blue-500 focus:ring-blue-500 text-[#34495E]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="flex w-[300px] items-center justify-center space-x-2 rounded-md bg-[#0072bc] p-1 px-1 font-semibold text-white hover:bg-[#0369A1]"
            >
              <span>&rarr;</span>
              <span>Sign In</span>
            </button>
          </div>
        </form>

        <div className="mt-0.5 text-center p-[1px]">
          <a href="#" className="text-sm text-blue-600 p-0.25 hover:underline mt-2 block">
            Forgot Password
          </a>
        </div>
        
        <div className="my-3 flex items-center px-20">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

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