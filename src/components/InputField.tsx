import React from "react";
import { InputProps } from "@/types/type";

const InputField: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  size,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        size={size}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="text-black mt-1 p-4 w-full border h-12.5  shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-700"
      />
    </div>
  );
};

export default InputField;
