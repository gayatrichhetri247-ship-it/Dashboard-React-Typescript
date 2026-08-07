import React, { useState } from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface DropdownProps{
    title?:string,
    icon?:React.ReactNode,
    items:string[],
    isCapitalize?:boolean,
    className?:string,
    listclassName?:string,
    width?:string,
    border?:boolean
    bgColor?:string
}
const Dropdown = ({title,icon,items, isCapitalize = false, className="", width="w-60", border = false, bgColor="hover:bg-slate-900", listclassName=""


}:DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${width} ${border? 'border border-gray-100' : ""} px-2 py-1 flex justify-between items-center cursor-pointer font-semibold text-gray-600 ${bgColor} ${bgColor} hover:text-white rounded-lg ${listclassName}`}
      >
        <div className="flex items-center gap-1">
          {icon}
          <span className={isCapitalize?"capitalize":""}>{title}</span>
        </div>
        <div>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
      </div>

      {isOpen && (
        <ul className={`w-fit  mt-1 flex flex-col gap-2 ${listclassName}`}>
          {items.map((item) => (
            <li key={item} className={`list-disc cursor-pointer hover:text-green-600 text-gray-500 font-semibold ${isCapitalize?"capitalize":""} ${className}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
