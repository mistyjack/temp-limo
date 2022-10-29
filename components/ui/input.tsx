import { FC } from "react";

interface IInput {
  id: string; // inputs name and id; labels htmlFor
  label: string;
  placeholder?: string;
  type?: string;
  disableMargin?: boolean;
}

const Input: FC<IInput> = ({ id, label, placeholder, type = "text", disableMargin = false }) => {
  return (
    <div className={`${disableMargin ? "" : "mb-6"}`}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
