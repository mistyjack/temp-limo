import FacebookIcon from "@components/icon/Facebook";
import LinkedInIcon from "@components/icon/LinkedIn";
import Twitter2Icon from "@components/icon/Twitter2";
import Input from "@components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const SignUp: FC = () => {
  return (
    <section id="signup-form" className="py-20">
      <div className="custom-container min-h-screen md:grid md:grid-cols-2 gap-4">
        <div className="">
          <form className="max-w-560">
            <h2 className="h2 mb-8">Sign up</h2>

            <Input
              id="first_name"
              label="First Name*"
              placeholder="Enter your first name"
            />
            <Input
              id="last_name"
              label="Last Name*"
              placeholder="Enter your last name"
            />
            <Input id="email" label="Email*" placeholder="Enter your email" />
            <Input
              id="phone"
              label="Phone number*"
              placeholder="+1 (555) 000-0000"
              type="tel"
            />

            <div className="mb-6">
              <Input
                id="password"
                label="Password*"
                placeholder="Create a password"
                type="password"
                disableMargin
              />
              <small className="text-sec">Must be as least 8 characters.</small>
            </div>
            <Input
              id="confirm_password"
              label="Confirm password*"
              placeholder="Confirm password"
              type="password"
            />
            <button className="btn btn-primary btn-lg w-full text-center text-lg mb-8">
              Create account
            </button>

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
          </form>
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
