import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";

function SignInAdmin() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("please enter the username"),
    password: yup.string().required("please enter the password").min(6,"password is weak")
  });

  const {
    register,
    handleSubmit,
    formState: {errors:errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    console.log(data);

    axios
      .post("/admin/signIn", data, { withCredentials: true })
      .then((res) => navigate("/admin"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2 font-michroma">
            Wellcome Admin
          </h1>
          <p className="text-gray-600 mt-6 font-michroma">
            Please sign in to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-6 font-comfortaa"
        >
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white text-black placeholder-gray-400"
              placeholder="Enter your Username"
             
              {...register("username")}
            />
             {errors.username && (
                    <p className="text-red-500 text-sm">
                      🚨 {errors.username.message}
                    </p>
                  )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white text-black placeholder-gray-400"
                placeholder="Enter your password"
                
                {...register("password")}
              />
               {errors.password && (
                    <p className="text-red-500 text-sm">
                      🚨 {errors.password.message}
                    </p>
                  )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-dark-gray focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center font-comfortaa">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <a
              href="/signUp"
              className="text-black hover:underline font-bold ml-1"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInAdmin;
