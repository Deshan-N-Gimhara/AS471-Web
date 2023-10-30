import React from 'react';
import Footer from '../components/Footer';


const Login = () => {
  return (
    <div>
    <div className='bg-gradient-to-b from-yellow-800 to-yellow-500'>
      <div className= 'w-full ml-0 flex justify-center pt-10'> 
        <img
            src='https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png' 
                alt="uop Logo"
                className="w-16 h-16 mr-2 aling-left" 
            />
        <div className="text-center text-white font-semibold relative pt-2">
            <i>FOS</i> <br/> R e m i n d e r
        </div> 
      </div>
      <div className='text-center py-8 text-xl text-white'>
        <h1>Welcome to the FOS Examination Reminder logging page.</h1>
      </div>

    {/* Login W */}
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto mt-0 bg-yellow-400 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
