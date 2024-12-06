import Image from "next/image";
import Link from "next/link";

function Signup() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between min-h-screen">
      {/* Left Side Image */}
      <div className="lg:w-1/2 p-6">
        <Image
          src="/Side Image.png" // Replace with the correct image path
          width={400}
          height={400}
          alt="Mobile with Shopping Cart"
          className="w-full"
        />
      </div>

      {/* Right Side Form */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-white  rounded-lg p-8">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Create an account
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Enter your details below
            </p>
          </div>

          {/* Form */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition duration-300"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Or Continue With */}
          <div className="mt-6">
            <button className="w-full py-3 flex items-center justify-center gap-3 border border-gray-300 text-gray-600 bg-white rounded-lg hover:bg-gray-100 transition duration-300">
              <Image
                src="/icon-Google.png" // Replace with the correct image path
                alt="Google Icon"
                width={20}
                height={20}
              />
              Sign up with Google
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-red-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
