import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import logo from "../../assets/images/dreamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { Key, Mail, UserRound } from "lucide-react";

interface RegisterForm {
  email: string;
  password: string;
}
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterForm>({
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
    <div className="w-full min-h-screen p-6 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-50">
      <div className="w-120 px-8 py-10 h-auto flex flex-col gap-3 font-roboto items-center bg-white text-gray-700 rounded-md shadow-md ">
        <div className="flex flex-col gap-2 items-center ">
          <img src={logo} alt="logo" className="h-auto w-54 " />

          <div className="flex flex-col items-center ">
            <h1 className="text-xl font-bold">Hey There!</h1>
            <p className="text-gray-500 mt-1 text-xs">
              Sign up to get started with Dreams ERP
            </p>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={formHandler} className="flex flex-col gap-4">
            <div className=" flex space-x-4">
            <Input type="text" label="first name" placeholder="first name" isCapitalized={true} />

            <Input type="text" label="last name" placeholder="last name" isCapitalized={true} />

            </div>
            <Input type="email" label="Email Address" placeholder="your@example.com" prefixIcon={<UserRound className="size-4" />} />

            <div className="flex flex-col gap-4">
              <div className="relative ">
                <Input type="password" label="Password" placeholder="••••••••" prefixIcon={<Key className="size-4" />} />
                
              </div>
              <div className="relative ">
                <Input type="password" label="Confirm Password" placeholder="••••••••" prefixIcon={<Key className="size-4" />} />
              </div>
              <div className="text-right my-3 flex text-sm justify-between">
                <Checkbox id="remember_me" title="I agree to Terms of Service and Privacy Policy" />
            
              </div>
            </div>

            <Button
              type="button"
              title="Sign up"
              textColor="text-white"
            />

            <p className="text-center text-sm font-light text-gray-500 ">
              Or sign up with
            </p>

            <div className="flex justify-between gap-4 w-full">
             <Button
              type="button"
              title="Google"
              bgColor="bg-none"
              width="w-1/2"
              borderColor="border border-gray-200"
              icon={<FcGoogle/>}
              
            />
               <Button
              type="button"
              title="Apple"
              bgColor="bg-none"
              width="w-1/2"
              borderColor="border border-gray-200"
              icon={<PiAppleLogoDuotone/>}
              
            />
            </div>
          </form>
          <div className="flex gap-2 justify-center text-gray-400 font-normal mt-4 select-none text-sm">
            <span>Don't have an account?</span>
            <Link to="/">
              <span className="text-blue-700/70 hover:underline cursor-pointer font-bold">
                Sign in
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;