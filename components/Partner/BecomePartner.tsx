import Link from "next/link";
import { FC } from "react";

const BecomePartner: FC = () => {
  return (
    <section id="become-partner" className="bg-primary">
      <div className="custom-container text-center py-24">
        <h2 className="h2 mb-5 text-txt-pry-dm">Ready to Become a Partner?</h2>
        <p className="text-sec text-base sm:text-xl sm:leading-30 mb-10 text-txt-pry-dm">
          Join over 4,000+ partners already growing with Limousine.
        </p>
        <Link href="/partner">
          <a className="btn btn-2lg btn-white">Parter with us</a>
        </Link>
      </div>
    </section>
  );
};

export default BecomePartner;
