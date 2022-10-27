import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="partner-hero">
      <div className="custom-container text-center py-24">
        <h1 className="h1 mb-3">Own a limousine?</h1>
        <p className="max-w-823 mx-auto text-sec text-base sm:text-xl mb-6">
          Our mission is to ensure teams can do their best work, no matter their
          size or budget. We focus on the details of everything we do.
        </p>
        <Link href="/partner">
          <a className="btn btn-2lg btn-primary">Parter with us</a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
