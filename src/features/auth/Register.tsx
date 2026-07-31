import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../assets/images/dreamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Checkbox from "../../components/ui/Checkbox";

interface RegisterForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterForm>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password != formData.confirmpassword) {
      alert("Passwords do not match");
    }
    alert("Registration Successful.");
    console.log(formData);
    navigate("/login");
  };
  return (
    <div className="w-full min-h-screen flex items-center p-6 justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950">
      <div className="w-120 px-8 py-10 h-auto flex flex-col gap-2 items-center bg-slate-950 text-white rounded-2xl shadow-2xl ">
        <div className="flex flex-col gap-2 items-center ">
          <img src={logo} alt="logo" className="h-auto w-54 " />

          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Hey There!</h1>
            <p className="text-gray-500 text-base">
              Sign up to get started with Dreams ERP
            </p>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={formHandler} className="flex flex-col gap-4">
            <div className="flex text-lg gap-4 w-full">
              <Input label="First Name" type="text" placeholder="first name" />
              <Input label="Last Name" type="text" placeholder="last name"  />
            </div>
            <Input type="email" label="Email" placeholder="your@example.com" />
            <div className="relative ">
              <Input type="password" label="Password" placeholder="*******" />

            </div>
            <div className="relative ">
              <Input
                type="password"
                label="Confirm Password"
                placeholder="*******"
              />

              <AiOutlineEyeInvisible className="absolute top-12 right-4" />
            </div>
            <Button type="button" title="Sign up" />
            <Checkbox
            id="is_agree"
              title="I agree to Terms of Service and Privacy Policy"
            />

            <p className="text-center text-lg text-gray-500 ">
              Or sign in with
            </p>

            <div className="flex justify-between gap-4 w-full">
              <Button
                type="button"
                title="Google"
                bgColor="bg-none"
                width="w-1/2"
                borderColor="border border-gray-500"
                icon={<FcGoogle />}
              />
              <Button
                type="button"
                title="Apple"
                bgColor="bg-none"
                width="w-1/2"
                borderColor="border border-gray-500"
                icon={<PiAppleLogoDuotone />}
              />
            </div>
          </form>
          <div className="flex gap-2 justify-center mt-4 mb-4 text-lg">
            <span>Already have an account?</span>
            <Link to="/">
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