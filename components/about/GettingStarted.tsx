import Image from "next/image";
import { FC } from "react";

const GettingStarged: FC = () => {
  return (
    <section id="getting-started" className="pt-32 md:pt-48 pb-24">
      <div className="custom-container  ">
        <div className="mb-24">
          <p className="text-primary leading-7 mb-3">Our Story</p>
          <h2
            className="h2 font-semibold mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We&apos;re just getting started
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 gap-16 text-sec text-lg">
          <div className="mb-10 md:mb-0 max-w-560">
            <p className="mb-8" data-aos="fade-up" data-aos-duration="1000">
              All Star Limo Service is the leading website for limousine
              rentals. We offer a wide selection of limousines for all
              occasions, from weddings to proms to business events. We also
              offer a tracking service so you can always know where your limo is
              and how long it will take to get to you.
            </p>
            <div className="mb-8" data-aos="fade-up" data-aos-duration="1000">
              All Star Limo Service was founded with the goal of making
              limousine rental easy and accessible to everyone. We are proud to
              offer the largest selection of limousines in the world, and our
              tracking service is second to none. So whether you&apos;re looking for
              a luxurious ride to your next event, or just want to keep an eye
              on your limo, All Star Limo Service is the website for you.
            </div>
            <p data-aos="fade-up" data-aos-duration="1000">
              All star limo service also offers the platform for limo owners to
              put up their vehicle for rentals. Through our wide reaching
              network and for a small platform fee, car owners can easily find
              customers that&apos;ll pay the right amount for the luxury cars.
            </p>
          </div>
          <div className="relative hidden md:block">
            <Image
              className="transition-all duration-700 hover:scale-105"
              src="/signup.png"
              alt="Sign up limo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarged;
