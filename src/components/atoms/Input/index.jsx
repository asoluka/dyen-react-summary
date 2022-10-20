import React from "react";

export const Input = ({
  type,
  placeholder,
  label,
  id,
  name,
  className,
  value,
  onChange,
}) => {
  if (type === "textarea") {
    return <textarea className={className} name={name} />;
  }

  if (type === "checkbox") {
    return (
      <input
        className={className}
        type="checkbox"
        name={name}
        placeholder={placeholder}
      />
    );
  }

  if (type === "radio") {
    return (
      <input
        className={className}
        type="radio"
        name={name}
        placeholder={placeholder}
      />
    );
  }

  return (
    <div className="mb-3 row">
      <label className="col-form-label" htmlFor={id}>
        {label}
      </label>
      <div className="col-sm-6">
        <input
          className={className}
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
