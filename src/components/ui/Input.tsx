import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  value?:string,
  placeholder?: string;
  width?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  isCapitalized?:boolean;
  className?: string;
  onSuffixClick?: () => void;
}

const Input = ({
  label = "",
  type = "text",
  value,
  placeholder,
  width = "w-full",
  prefixIcon,
  suffixIcon,
  className,
  isCapitalized=false,
  onSuffixClick,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full text-sm">
      <label className={` font-bold ${isCapitalized?"capitalize":""}`}>{label}</label>
      <div
        className={`${width} flex items-center gap-2  rounded-md bg-white border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 ${className} `}
      >
        {prefixIcon && (
          <span className="flex items-center justify-center text-gray-400 shrink-0">
            {prefixIcon}
          </span>
        )}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={() => {}}
          className={`w-full outline-none bg-transparent ${isCapitalized?"capitalize":""} `}
        />

        {suffixIcon && (
          <span
            onClick={onSuffixClick}
            className={`flex items-center justify-center text-gray-400 shrink-0 ${
              onSuffixClick ? "cursor-pointer" : ""
            }`}
          >
            {suffixIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;