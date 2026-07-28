import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/images/dreamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";
import Button from "../components/ui/Button";

interface LoginForm {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    navigate("/dashboard");
  };
  return (
    <div className="w-full min-h-screen p-6 flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950">
      <div className="w-120 px-8 py-10 h-auto flex flex-col gap-2 items-center bg-slate-950 text-white rounded-2xl shadow-2xl ">
        <div className="flex flex-col gap-2 items-center ">
          <img src={logo} alt="logo" className="h-auto w-54 " />

          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500 text-base">
              Sign in to your Dreams ERP account
            </p>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={formHandler} className="flex flex-col gap-4">
            <Input type="email" label="Email" placeholder="your@example.com" />

            <div className="flex flex-col gap- ">
              <div className="relative ">
                <Input type="password" label="Password" placeholder="*******" />

                <AiOutlineEyeInvisible className="absolute top-12 right-4" />
              </div>
              <div className="text-right mt-2 flex justify-between">
                <Checkbox type="checkbox" title="Remember me" />
                <span className="text-blue-700">Forgot Password?</span>
              </div>
            </div>

            <Button
              type="button"
              title="Sign in"
             
              
            />

            <p className="text-center text-base text-gray-500 ">
              Or sign in with
            </p>

            <div className="flex justify-between gap-4 w-full">
             <Button
              type="button"
              title="Google"
              bgColor="bg-none"
              width="w-1/2"
              borderColor="border border-gray-500"
              icon={<FcGoogle/>}
              
            />
               <Button
              type="button"
              title="Apple"
              bgColor="bg-none"
              width="w-1/2"
              borderColor="border border-gray-500"
              icon={<PiAppleLogoDuotone/>}
              
            />
            </div>
          </form>
          <div className="flex gap-2 justify-center mt-4  text-base">
            <span>Don't have an account?</span>
            <Link to="/register">
              <span className="text-blue-700 cursor-pointer font-bold">
                Sign up
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
