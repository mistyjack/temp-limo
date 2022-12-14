import ArrowRightIcon from "@components/icon/ArrowRight";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const GetALimo: FC = () => {
  return (
    <section id="get-a-limo" className="font-vis ">
      <div className="custom-container flex">
        <div className="text-white flex flex-col justify-between p-4 md:pt-16 md:pl-10 md:pb-8 bg-primary w-full md:w-2/5">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="md:text-xl mb-4">Do you own a Limo?</p>
            <h2 className="text-xl md:text-3.5xl md:max-w-348">
              Join us to boost your revenue.
            </h2>
          </div>
          <div
            className="mt-8 md:mt-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/sign-up">
              <a className="relative pr-8 font-medium">
                Partner with us
                <span className="text-white btn-anim-icon absolute">
                  <ArrowRightIcon />
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="relative h-60 w-full md:h-700 md:w-3/5">
          <Image
            className="transition-all duration-700 hover:scale-125"
            src="/get-limo.png"
            alt="Limo"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
          />
        </div>
      </div>
    </section>
  );
};

export default GetALimo;
