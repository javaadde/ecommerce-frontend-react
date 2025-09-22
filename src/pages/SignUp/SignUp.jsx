import axios from "../../axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import showNotification from "../../notification.mjs";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate()

  const [available, setAvailable] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().min(4).required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
      .string()
      .min(6)
      .oneOf([yup.ref("password")], null)
      .required(),
    email: yup.string().email().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });



  const postData = (data) => {

    axios.post('/signup', data)
    .then( (data) => {
       if(data.status !== 200){
         showNotification("please ensure that everithing filled properly")
       }
       navigate('/')
    })
    
    console.log(data);
  };






  function fetchUserExists(value) {
    const obj = {
      name: value,
    };

    axios.post("/signUp/existsUser", obj).then((res) => {
      setAvailable(res.data.isAvailable);
    });
  }

  const checkUser = (e) => {
    const value = e.target.value;

    if (value.length < 4) {
      setAvailable(false);
      return;
    }

    fetchUserExists(value);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="bg-off-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        <div className="text-center mb-8 font-michroma">
          <h1 className="text-3xl font-bold text-off-black mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>

        <form
          className="space-y-6 font-comfortaa"
          action="signup"
          method="POST"
        >
          {/* <div className="grid grid-cols-2 gap-4">
                <div>
                    <label  className="block text-sm font-medium text-off-black mb-2">
                        First Name
                    </label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                        placeholder="John"
                        required
                        {...register("firstName")}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-off-black mb-2">
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                        placeholder="Doe"
                        required
                        {...register("lastName")}
                    />
                </div>
            </div> */}

          <div>
            <label className="block text-sm font-medium text-off-black mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
              placeholder="john.doe@example.com"
              required
              {...register("email")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-off-black mb-2">
              Username
            </label>
            <input
              {...register("username")}
              onChange={checkUser}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
              placeholder="johndoe123"
              required
            />
            <span id="usernameExists" className="ml-2 text-[12px] font-bold  ">
             
              {available ? <span className='text-green-400'> ✅available </span> 
              : <span className="text-red-500">❌taken</span>}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-off-black mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                  placeholder="••••••••"
                  required
                  {...register("password")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-off-black mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-off-black focus:border-transparent outline-none transition-all duration-200 bg-white text-off-black placeholder-gray-400"
                  placeholder="••••••••"
                  required
                  {...register("confirmPassword")}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit(postData)}
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-dark-gray focus:ring-2 focus:ring-off-black focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center font-comfortaa">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="text-black font-bold hover:underline ml-1"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
