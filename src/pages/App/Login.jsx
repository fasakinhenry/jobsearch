import { GridBackground } from "./LandingPage";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Google from "../../assets/images/icons/Google.svg";

const Login = () => {
  return (
    <div className="flex  bg-blue-50 font-sans overflow-hidden">
      <GridBackground />
      <div className="min-h-screen w-full z-10 relative flex">
        <div className="md:flex hidden w-full p-8 bg-green-500 text-white">
          <div className="flex flex-col flex-grow justify-center items-center text-center gap-3">
            <img src={Google} width={200} height={200} alt="" />
            <h2 className="text-4xl font-bold">Job search made easy.</h2>
            <p className="text-[1.1rem]">
              Find your dream job with joblier's powerful job search feature.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:3/5 p-8">
          <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
            <h2 className="text-4xl mb-8 font-bold text-left">Hi there 🖐🖐</h2>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label className="font-bold">Email Address:</label>
                <div className="flex text-gray-500 items-center gap-2 border-2 border-gray-200 px-4 py-3 rounded-md">
                  <EnvelopeIcon className="h-6 w-6" />
                  <input
                    className="w-full"
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="grid gap-1">
                <label className="font-bold">Password:</label>
                <div className="flex text-gray-500 items-center gap-2 border-2 border-gray-200 px-4 py-3 rounded-md">
                  <KeyIcon className="w-6 h-6" />
                  <input
                    className="w-full"
                    type="password"
                    placeholder="a very secure password"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 ">
              <input type="checkbox" className="cursor-pointer" />
              <span className="ml-2 text-sm">Remember me</span>
            </div>
            <div className="p-3 mt-3 flex gap-2 hover:bg-green-600 cursor-pointer items-center justify-center bg-green-500 rounded-md text-white font-bold">
              <p>Login</p>
            </div>
            <div className="p-3 mt-3 flex gap-2 hover:bg-gray-300 cursor-pointer items-center justify-center bg-gray-200 rounded-md">
              <img src={Google} width={20} height={20} />
              <p>Continue with Google</p>
            </div>
            <p className="text-center text-[0.78rem] text-slate-500 my-5">
              By signing up, I agree to Joblier's Terms of Service, Privacy
              Policy, and Data Processing Terms.
            </p>
            <Link
              to="/signup"
              className="text-center text-[0.95rem] text-slate-500"
            >
              New to Joblier ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;