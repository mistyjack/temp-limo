import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="partner-hero">
      <div className="custom-container text-center py-24">
        <h1 className="h1 mb-3">Own a limousine?</h1>
        <p className="max-w-720 mx-auto text-sec text-base sm:text-xl mb-6">
          Putting your unused car is not an easy task, but with our platform you
          can do it in just a few clicks.
        </p>
        <Link href="/sign-up">
          <a className="btn btn-2lg btn-primary">Partner with us</a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
