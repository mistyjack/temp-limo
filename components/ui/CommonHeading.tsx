import { FC } from "react";

const CommonHeading: FC = () => {
  return (
    <div className="text-center mb-24">
      <h2
        className="h2 font-semibold mb-5 max-w-720 mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Offering You The Very Best Luxury Limousine Service
      </h2>
      <p
        className="mx-auto max-w-768 text-sec text-base sm:text-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Rent a limo starting at $100. Our drivers arrive on time, in style and
        are willing to help with your special requests or adventures. Compare
        and book online, or call now!
      </p>
    </div>
  );
};

export default CommonHeading;
