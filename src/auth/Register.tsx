import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/images/dreamlogo.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="w-full h-auto flex items-center p-6 justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950">
      <div className="w-150 px-8 py-4 h-auto flex flex-col gap-6 items-center bg-slate-950 text-white rounded-2xl shadow-2xl ">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="logo" className="h-auto w-80 " />

          <div className="flex flex-col items-center mt-[-40px]">
            <h1 className="text-2xl font-bold">Hey There!</h1>
            <p className="text-gray-500 text-lg">
              Sign up to get started with Dreams ERP
            </p>
          </div>
        </div>
        <div className="w-full">
          <form className="flex flex-col gap-4">
            <div className="flex text-lg w-full justify-between ">
              <div className="flex flex-col gap-2">
                <label className="font-bold">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-2 rounded-lg bg-slate-800"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-2 rounded-lg bg-slate-800"
                />
              </div>
            </div>
             <div className="flex flex-col text-lg gap-2">
              <label className="font-bold">Email Address</label>
              <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded-lg bg-slate-800" />
            </div>
            <div className="flex flex-col gap-2 ">
                <label className="font-bold">Password</label>

              <div className="relative ">
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800"
                />
                <AiOutlineEyeInvisible className="absolute top-3 right-4" />
              </div>
            </div>
           <div className="flex flex-col gap-2 ">
                <label className="font-bold">Confirm Password</label>

              <div className="relative ">
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800"
                />
                <AiOutlineEyeInvisible className="absolute top-3 right-4" />
              </div>
            </div>
            <button className="w-full  bg-blue-700 font-bold px-4 py-2.5 rounded-2xl text-xl cursor-pointer mt-2">
              Sign up
            </button>
             <div className="flex gap-2 y-2.5 " >
              <input type="checkbox"   />
              <span className="text-gray-300 font-semibold">I agree to Terms of Service and Privacy Policy</span>
            </div>

            <p className="text-center text-lg text-gray-500 ">
              Or sign in with
            </p>

            <div className="flex justify-between gap-4 w-full">
              <button className="flex items-center justify-center gap-2 w-1/2 px-6 py-2 border border-gray-500 rounded-xl cursor-pointer">
                <FcGoogle />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-1/2  px-6 py-2 border border-gray-500 rounded-xl cursor-pointer">
                <PiAppleLogoDuotone />
                <span>Apple</span>
              </button>
            </div>
          </form>
          <div className="flex gap-2 justify-center mt-4 mb-4 text-lg">
            <span>Already have an account?</span>
            <Link to="/login">
              <span className="text-blue-700 cursor-pointer font-bold">
                Sign In
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
