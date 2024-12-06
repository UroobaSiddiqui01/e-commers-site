import Image from "next/image";

function Login() {
  return (
    <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start max-w-screen-2xl mx-auto">
      <div className="lg:w-1/2 p-6">
        <Image
          src="/Side Image.png" // Replace with the correct image path
          width={400}
          height={400}
          alt="Mobile with Shopping Cart"
          className="w-full"
        />
      </div>
      <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
        <div className="w-[70%] h-[80%]">
          <div>
            <h1 className="sm:text-lg md:text-2xl lg:text-3xl">
              Login in to Exclusive
            </h1>
            <p className="text-sm pt-2">Enter your details below</p>
          </div>
          <form>
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
          </form>
          <div className="flex items-center mt-10 ml-10 gap-10">
            <button className="py-2 px-6 bg-red-500 text-white rounded-sm hover:bg-red-600">
              Log In
            </button>
            <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded-sm hover:bg-gray-300">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;