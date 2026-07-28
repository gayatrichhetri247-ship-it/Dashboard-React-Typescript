import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  width?:string
}
const Input = ({ label = "", type = "text", placeholder, width="w-full" }: InputProps) => {
  return (
    <div className=" flex flex-col gap-2 w-full text-base">
      <label className="font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={""}
        onChange={() => {}}
        className={`${width} px-4 py-2 rounded-lg bg-slate-800`}
      />
    </div>
  );
};

export default Input;
