import React from "react";

interface SidebarItemProps {
  title?: string;
  icon?: React.ReactNode;
  isCapitalize?: boolean;
}
const SidebarItem = ({
  title,
  icon,
  isCapitalize = false,
}: SidebarItemProps) => {
  return (
    <div>
      <div
         className="w-60 px-2 py-1 flex justify-between items-center cursor-pointer font-semibold text-gray-600 hover:bg-slate-900 hover:text-white rounded-lg"
      >
        <div className="flex items-center gap-1 text-sm">
          {icon}
          <span className={isCapitalize ? "capitalize" : ""}>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
