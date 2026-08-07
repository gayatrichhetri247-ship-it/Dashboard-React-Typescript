import React from "react";
import Input from "../ui/Input";
import { Search, Filter, LuArrowDownUp,Pause,
  RefreshCcw } from "../../assets/icons/index";
import Dropdown from "../ui/Dropdown";

const TableHeader = () => {
  return (
    <div className="flex justify-between items-center h-auto p-2">
      <div className="flex gap-6">
        <Input type="text" placeholder="Search..." suffixIcon={<Search size={14} className="" />} className="px-3 py-1 " width="w-60"/>
        <Input type="date" value="date" className="px-3 py-1"/>
      </div>
      <div className="flex gap-4">
        <Dropdown title="filter" items={["Alexander Hayes", "Ava Mitchell", "Andrew Collins", "Amelia Scott"]} className="list-none items-start " listclassName="px-2 text-sm" width="w-30" border = {true} bgColor="hover:bg-green-600"  icon={<Filter size={14}/>}/>
        <Dropdown title="short by" items={["A - Z", "Z - A", "Newest", "Oldest", "High", "Low"]} className="list-none items-start text-sm " listclassName="px-2 text-sm " width="w-30" border = {true} bgColor="hover:bg-green-600"  icon={<LuArrowDownUp size={14}/>}/>
        <Input prefixIcon={<Pause size={14}/>} className="py-1 px-2 " width="w-8"/>
        <Input prefixIcon={<RefreshCcw size={14}/>} className="py-1 px-2 " width="w-8"/>

      </div>
    </div>
  );
};

export default TableHeader;
