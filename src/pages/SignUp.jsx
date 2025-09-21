// // import {axios} from '../axios'
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from 'yup'


function SignUp(){

//    const [register , handleSubmit] = useForm({
//       resolver:yupResolver
//    })

    return(
        <div className="h-screen w-full flex justify-center items-center  py-[70vh]">
         
         <div className="bg-off-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        <div className="text-center mb-8 font-michroma">
            <h1 className="text-3xl font-bold text-off-black mb-2">Create Account</h1>
            <p className="text-gray-600">Join us today and get started</p>
        </div>
        
        <form className="space-y-6 font-comfortaa" action="signup" method="POST" >

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label  className="block text-sm font-medium text-off-black mb-2">
                        First Name
                    </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                        placeholder="John"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-off-black mb-2">
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                        placeholder="Doe"
                        required
                    />
                </div>
            </div>
            
            <div>
                <label  className="block text-sm font-medium text-off-black mb-2">
                    Email Address
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                    placeholder="john.doe@example.com"
                    required
                />
            </div>
            
            <div>
                <label  className="block text-sm font-medium text-off-black mb-2">
                    Username
                </label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                    placeholder="johndoe123"
                    required
                />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label  className="block text-sm font-medium text-off-black mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                            placeholder="••••••••"
                            required
                        />
                     
                    </div>
                </div>
                <div>
                    <label  className="block text-sm font-medium text-off-black mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                            placeholder="••••••••"
                            required
                        />
                        
                    </div>
                </div>
            </div>


            
            <div className="flex items-start ">
                <input 
                    id="terms" 
                    name="terms" 
                    type="checkbox"
                    className="w-4 h-4 text-off-black border-gray-300 rounded focus:ring-off-black focus:ring-2 mt-1"
                    required
                />
                <label  className="ml-3 block text-sm text-gray-600">
                    I agree to the 
                    <a href="#" className="text-off-black hover:underline font-medium">Terms of Service</a>
                    and 
                    <a href="#" className="text-off-black hover:underline font-medium">Privacy Policy</a>
                </label>
            </div>
            
            <button 
                type="submit"
                className="w-full bg-off-black text-off-white py-3 px-4 rounded-lg font-medium hover:bg-dark-gray focus:ring-2 focus:ring-off-black focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
                Create Account
            </button>
        </form>
        
        <div className="mt-6 text-center font-comfortaa">
            <p className="text-sm text-gray-600">
                Already have an account? 
                <a href="http://localhost:5000/login" className="text-off-black hover:underline font-medium">
                    Sign in here
                </a>
            </p>
        </div>
         </div>
         </div>
    )
}


export default SignUp