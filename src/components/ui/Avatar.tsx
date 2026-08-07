import React from "react";
import profile from "../../assets/images/profileimg.webp";

interface AvatarProps {
  image?: string;
  alt?: string;
  size?: number;
  rounded?: boolean;
  border?: boolean;
  borderColor?: string;
  className?: string;
  onClick?: () => void;
}
const Avatar = ({
  image,
  alt = "Avatar",
  size,
  rounded = true,
  border = false,
  borderColor = "border-gray-100",
  className = "",
  onClick,
}: AvatarProps) => {
  return (
    <div
      onClick={onClick}
      className={` h-30 w-30 ${rounded ? "rounded-full" : "rounded-lg"} ${border ? `border-2 ${borderColor}` : ""} overflow-hidden bg-white shadow-lg ${className} ` }
      style={{width:size, height:size}}
    >
      {image ? (
        <img src={image} alt={alt} className="h-full w-full object-cover " />
      ) : (
        <span className="h-full w-full flex justify-center items-center text-gray-300 font-medium text-center ">{alt} not loaded</span>
      )}
    </div>
  );
};

export default Avatar;
