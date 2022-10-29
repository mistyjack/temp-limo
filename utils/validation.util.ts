// import { checkIfBusinessIsUnique } from "@lib/network";

export const required = (value: any) =>
  value ? undefined : "Field is required";

export const mustBeNumber = (value: any) =>
  isNaN(value) ? "Field must be a number" : undefined;

export const mustBeLessThan30 = (value: string) =>
  value.length > 30 ? "Field must be less than thirty characters" : undefined;

export const mustBeGreaterThan8 = (value: string) =>
  value.length < 8 ? "Field must contain at least 8 characters" : undefined;

export const mustBe10 = (value: string) =>
  value.length !== 10 ? "Field must be 10 numbers" : undefined;

export const composeValidators =
  (...validators: any) =>
  (value: any) => {
    return validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined
    );
  };

export const asyncValidators = (...validators: any) => {
  return async (value: any) => {
    let initial = "";
    for (let validator of validators) {
      initial = await validator(value);
    }
    return initial;
  };
};

// export const businessMustBeUnique = async (value: string) => {
//   let { data } = await checkIfBusinessIsUnique(value);
//   console.log(data);
//   return data ? undefined : "Business Name is already taken";
// };

//export const mustContainNumber = (value: string) => (!/^(?=.*[0-9])[0-9]$/)

export const mustContainSpecialChar = (value: string) =>
  !/(?=.*\W)/.test(value)
    ? "Field must contain at least one special character"
    : undefined;

export const mustContainCapitalLetter = (value: string) => !/(?=.*[A-Z])/.test(value) ? "Field must contain capital letters" : undefined;

export const mustContainNumber = (value: string) => !/(?=.*\d)/.test(value) ? "Field must contain a number" : undefined;

export const mustBeLettersOnly = (value: string) =>
  !/^([a-zA-Z-]+)$/.test(value) ? "Field can only contain letters" : undefined;

export const canBeAlphanumeric = (value: string) =>
  !/^([a-zA-Z0-9-\s]+)$/.test(value)
    ? "Field can only contain letters, numbers, '-'"
    : undefined;

export const mustBeEmail = (value: string) =>
  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ? "Invalid email"
    : undefined;

// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/

/*const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`*/

/*const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)*/

/*export const validateDetails = (detail) => {
  let output = { error: false, message: "" };
  if (detail.length > 70) {
    output.error = true;
    output.message = "This cannot exceed 70 characters";
  }
  if (detail && !/^([a-zA-Z0-9&\,\'\.\;\:\-\s]+)$/.test(detail)) {
    output.error = true;
    output.message = "Unwanted character was added";
  }

  return output;
};*/

/*export const validateAddress = (address) => {
  let output = { error: false, message: "" };
  // if (address.length > 70) {
  //   output.error = true;
  //   output.message = "Address cannot exceed 70 characters";
  // }
  if (address && !/^([a-zA-Z0-9&\,\'\.\-\s]+)$/.test(address)) {
    output.error = true;
    output.message =
      "Address can only contain letters, numbers, comma, ', ., -.";
  }

  return output;
};*/

export const validatePhone = (phone: string) => {
  let output = { error: false, message: "" };

  if (phone && !/^-?\d+\.?\d*$/.test(phone)) {
    output.error = true;
    output.message = "Phone can only contain numbers.";
  }

  return output;
};

/*export const validateConfirmPassword = (confirmPassword, password) => {
  let output = { error: false, message: "" };
  if (confirmPassword.length !== password) {
    output.error = true;
    output.message = "Password Mismatch.";
  }

  return output;
};*/
