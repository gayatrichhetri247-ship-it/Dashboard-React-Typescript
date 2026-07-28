import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
}
const Input = ({ label = "", type = "text", placeholder }: InputProps) => {
  return (
    <div className=" flex flex-col gap-2 w-full text-lg">
      <label className="font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={""}
        onChange={() => {}}
        className="px-4 py-2 rounded-lg bg-slate-800"
      />
    </div>
  );
};

export default Input;
