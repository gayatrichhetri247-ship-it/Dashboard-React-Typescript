import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/images/dreamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


interface LoginForm {
    email:string,
    password:string
}
const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<LoginForm>({
        email:"",
        password:""
    })

    const handleChange  = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = event.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))

    }
    const formHandler = (event:React.FormEvent<HTMLFormElement>) =>{
       event.preventDefault()
       console.log(formData)
       navigate("/dashboard")
    }
  return (
    <div className="w-full h-auto p-6 flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950">
      <div className="w-150 px-8 py-4 h-auto flex flex-col gap-6 items-center bg-slate-950 text-white rounded-2xl shadow-2xl ">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="logo" className="h-auto w-80 " />

          <div className="flex flex-col items-center mt-[-40px]">
            <h1 className="text-2xl font-bold" >Welcome Back!</h1>
            <p className="text-gray-500 text-lg">Sign in to your Dreams ERP account</p>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={formHandler} className="flex flex-col gap-4">
            <div className="flex flex-col text-lg gap-2">
              <label className="font-bold">Email Address</label>
              <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="px-4 py-2 rounded-lg bg-slate-800" />
            </div>
            <div className="flex flex-col gap- ">
              <div className="flex justify-between text-lg">
                <label className="font-bold">Password</label>
                <span className="text-blue-700">Forgot Password?</span>
              </div>

              <div className="relative ">
                <input name="password" type="password" placeholder="********" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-slate-800" />
                <AiOutlineEyeInvisible className="absolute top-3 right-4"/>
              </div>
            </div>
            <div className="flex gap-2 y-2.5" >
              <input type="checkbox"  />
              <span>Remember me</span>
            </div>
            <button type="submit" className="w-full bg-blue-700 font-bold px-4 py-2.5 rounded-2xl text-xl cursor-pointer">Sign In</button>

            <p className="text-center text-lg text-gray-500 ">Or sign in with</p>

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
            <span>Don't have an account?</span>
           <Link to="/register"><span className="text-blue-700 cursor-pointer font-bold">Sign up</span> </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
