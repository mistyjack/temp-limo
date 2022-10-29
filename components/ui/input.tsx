import { FieldValidator } from "final-form";
import { FC, ReactNode } from "react";
import { Field } from "react-final-form";

interface IInput {
  id: string; // inputs name and id; labels htmlFor
  label: string;
  placeholder?: string;
  type?: string;
  disableMargin?: boolean;
  validate?: FieldValidator<any>;
  endAdornment?: ReactNode;
}

const Input: FC<IInput> = ({
  id,
  label,
  placeholder,
  type = "text",
  disableMargin = false,
  validate = undefined,
  endAdornment = undefined
}) => {
  return (
    <Field name={id} validate={validate}>
      {({ input, meta }) => (
        <div className={`${disableMargin ? "" : "mb-6"}`}>
          <label className="form-label" htmlFor={id}>
            {label}
          </label>
          <div className="relative">
          <input
            {...input}
            id={id}
            name={id}
            type={type}
            className={
              meta.error && meta.touched ? "form-control-error" : "form-control"
            }
            placeholder={placeholder}
          />
          {endAdornment}
          </div>
          {meta.error && meta.touched && (
            <small className="text-red-600">{meta.error}</small>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input;
