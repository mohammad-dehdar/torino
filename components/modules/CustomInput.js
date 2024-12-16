"use client";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label className="block text-sm mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full md:h-[45px] border border-slate-400 p-2 rounded"
      />
    </div>
  );
};

export default CustomInput;