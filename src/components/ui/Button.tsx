import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  width?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
}
const Button = ({
  type = "submit",
  title,
  width = "w-full",
  bgColor = "bg-blue-700",
  borderColor = "border-transparent",
  textColor = "text-gray-600",
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${width} ${bgColor} ${borderColor} ${textColor} flex justify-center items-center gap-2 font-normal px-4 py-2.5 rounded-md text-sm cursor-pointer`}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
