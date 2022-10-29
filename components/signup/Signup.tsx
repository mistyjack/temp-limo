import FacebookIcon from "@components/icon/Facebook";
import LinkedInIcon from "@components/icon/LinkedIn";
import Twitter2Icon from "@components/icon/Twitter2";
import Input from "@components/ui/input";
import Loading from "@components/ui/Loading";
import {
  composeValidators,
  mustBeEmail,
  mustBeGreaterThan8,
  mustBeLessThan30,
  mustBeLettersOnly,
  mustContainCapitalLetter,
  mustContainNumber,
  mustContainSpecialChar,
  required
} from "@utils/validation.util";
import {
  CognitoUserAttribute,
  CognitoUserPool,
  ICognitoUserAttributeData
} from "amazon-cognito-identity-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Form } from "react-final-form";
import { toast } from "react-toastify";
import { poolData } from "UserPool";

interface SignupParams {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

const getAttributeInstance = (attr: ICognitoUserAttributeData) => {
  return new CognitoUserAttribute(attr);
};

const getDataList = (values: SignupParams) => {
  const dataEmail: ICognitoUserAttributeData = {
    Name: "email",
    Value: values.email,
  };
  const dataPhoneNumber: ICognitoUserAttributeData = {
    Name: "phone_number",
    Value: values.phone_number,
  };
  const dataGivenName: ICognitoUserAttributeData = {
    Name: "given_name",
    Value: values.first_name,
  };
  const dataFamilyName: ICognitoUserAttributeData = {
    Name: "family_name",
    Value: values.last_name,
  };

  return [
    getAttributeInstance(dataEmail),
    getAttributeInstance(dataPhoneNumber),
    getAttributeInstance(dataGivenName),
    getAttributeInstance(dataFamilyName),
  ];
};

const SignUp: FC = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (values: SignupParams) => {
    setError("");
    setLoading(true);
    const userPool = new CognitoUserPool(poolData);
    const attrList = getDataList(values);

    userPool.signUp(
      values.email,
      values.password,
      attrList,
      [],
      (err, result) => {
        if (err) {
          setError(err.message || JSON.stringify(err));
          setLoading(false);
          return;
        }
        toast.info("Success! Check your email to verify your account.")
        setLoading(false);
        router.push("/")
      }
    );
  };

  return (
    <section id="signup-form" className="py-20">
      <div className="custom-container md:grid md:grid-cols-2 gap-4">
        <div className="max-w-560">
          <h2 className="h2 mb-8">Sign up</h2>

          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, invalid, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  id="first_name"
                  label="First Name*"
                  placeholder="Enter your first name"
                  validate={composeValidators(
                    required,
                    mustBeLettersOnly,
                    mustBeLessThan30
                  )}
                />
                <Input
                  id="last_name"
                  label="Last Name*"
                  placeholder="Enter your last name"
                  validate={composeValidators(
                    required,
                    mustBeLettersOnly,
                    mustBeLessThan30
                  )}
                />
                <Input
                  id="email"
                  label="Email*"
                  placeholder="Enter your email"
                  validate={composeValidators(required, mustBeEmail)}
                />
                <Input
                  id="phone_number"
                  label="Phone number*"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  validate={composeValidators(
                    required,
                    mustBeLessThan30
                  )}
                />

                <div className="relative">
                  <Input
                    id="password"
                    label="Password*"
                    placeholder="Create a password"
                    type={show ? "text" : "password"}
                    validate={composeValidators(
                      required,
                      mustBeGreaterThan8,
                      mustContainCapitalLetter,
                      mustContainNumber,
                      mustContainSpecialChar,
                      mustBeLessThan30
                    )}
                    endAdornment={
                      <span
                        onClick={() => setShow(!show)}
                        className="absolute right-2 bottom-2 cursor-pointer text-primary"
                      >
                        {show ? "Hide" : "Show"}
                      </span>
                    }
                  />
                </div>

                {Boolean(error) && (
                  <small className="text-red-600 leading-50">{error}</small>
                )}

                <button disabled={loading || invalid} className="btn btn-primary btn-lg w-full disabled:cursor-not-allowed disabled:bg-grey text-center text-lg mb-8">
                  Create account
                  <Loading loading={loading} />
                </button>
              </form>
            )}
          />

          <p className="text-sm text-sec text-center mx-auto">
            Already have an account?{" "}
            <Link href="/sign-up">
              <a className="text-primary">Log in</a>
            </Link>
          </p>

          <div className="mt-16 flex justify-between">
            <p className="text-sec">&copy; 2022 All Star Limousine.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <span>
                <Twitter2Icon />
              </span>
              <span>
                <LinkedInIcon />
              </span>
              <span>
                <FacebookIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/signup.png"
            alt="Sign up limo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
