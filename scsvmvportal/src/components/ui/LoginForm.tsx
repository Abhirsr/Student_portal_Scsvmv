"use client";

import React, { useState } from 'react';
import type { Metadata } from "next";

// 👉 Import icons from react-icons
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import {PiSignIn} from 'react-icons/pi';

export const metadata: Metadata = {
  title: "Login to Your Account",
};

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
                  {showPassword ? (
                    <HiEyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <HiEye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="flex w-[300px] items-center justify-center space-x-2 rounded-md bg-[#0072bc] p-1 px-1 font-semibold text-white hover:bg-[#0369A1]"
            >
                <PiSignIn className="h-5 w-5" />
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

        <div className="flex justify-center">
          <button
            type="button"
            className="flex w-[300px] items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white p-2 font-semibold text-gray-700 hover:bg-blue-100"
          >
            <FcGoogle className="h-5 w-5" />
            <span>Continue with google</span>
          </button>
        </div>

      </div>
    </div>
  );
}
