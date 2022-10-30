import styles from "@styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="hero">
      <div className="relative max-w-screen-2xl mx-auto overflow-x-clip mt-12 xl:mt-16">
        <div className="custom-container flex gap-4 justify-between items-center">
          <div className={`${styles.hero_text_content}`}>
            <h1 className="h1">
              Delivering comfort and luxury at an affordable price
            </h1>
            <p className="max-w-480 text-sec text-base sm:text-xl mb-12">
              With a luxurious limousine from us, make your event one to
              remember. We let customers rent cars, track them, and stay updated
              at all times
            </p>
            <Link href="/sign-up">
              <button className="btn btn-xl btn-primary font-medium text-lg leading-none">
                Get Started
              </button>
            </Link>
            <div className="mt-12">
              <Image
                className="max-w-full"
                width={319}
                height={52}
                alt="User reviews"
                src="/user-reviews.png"
              />
            </div>
          </div>

          <div className={`${styles.hero_image} hidden md:block`}>
            <div className="relative h-640">
              <Image
                src="/hero-bg.svg"
                alt="Hero background image"
                layout="fill"
                objectFit="contain"
                objectPosition="right"
              />
            </div>
          </div>
          <div
            className={`absolute -bottom-20 hidden md:block right-0 ${styles.hero_anim_image}`}
          >
            <Image src="/car.png" alt="Hero limo" width={981} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
