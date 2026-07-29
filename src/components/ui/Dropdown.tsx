import React, { useState } from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface DropdownProps{
    title?:string,
    icon?:React.ReactNode,
    items:string[],
    isCapitalize?:boolean
}
const Dropdown = ({title,icon,items, isCapitalize = false}:DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-60 px-2 py-1 flex justify-between items-center cursor-pointer font-semibold text-gray-600 hover:bg-slate-900 hover:text-white rounded-lg"
      >
        <div className="flex items-center gap-1 text-sm ">
          {icon}
          <span className={isCapitalize?"capitalize":""}>{title}</span>
        </div>
        <div>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
      </div>

      {isOpen && (
        <ul className="w-fit px-2 ml-10 flex flex-col gap-2 text-sm  ">
          {items.map((item) => (
            <li key={item} className={`list-disc cursor-pointer hover:text-green-600 text-gray-500 font-semibold ${isCapitalize?"capitalize":""}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
