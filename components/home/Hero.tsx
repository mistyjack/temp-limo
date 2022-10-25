import styles from "@styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto overflow-x-clip">
      <div className="custom-container flex gap-4 justify-between items-center">
        <div className={`${styles.hero_text_content} mt-12 md:mt-0`}>
          <h1 className="h1">
            Top-quality worldwide executive limousine service.
          </h1>
          <h2 className="max-w-480 text-txt-sec dark:text-txt-sec-dm text-base sm:text-xl mb-12">
            Pamper yourself with corporate limousine services. Providing You
            With The Absolute Best Luxury Limousine Service
          </h2>
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
  );
};

export default Hero;
