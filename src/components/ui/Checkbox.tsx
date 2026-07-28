import React from "react";

interface CheckboxProps{
    type?:string,
    title:string
}

const Checkbox = ({
    type="",
    title=""
}:CheckboxProps) => {
  return (
    <div className="flex gap-2 y-2.5">
      <input type={type} />
      <span>{title}</span>
    </div>
  );
};

export default Checkbox;
