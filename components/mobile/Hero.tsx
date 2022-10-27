import styles from "@styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="mobile-hero">
      <div className="relative max-w-screen-2xl mx-auto overflow-x-clip mt-12 xl:mt-16">
        <div className="custom-container flex gap-4 justify-between items-center">
          <div className={`${styles.hero_text_content}`}>
            <h1 className="h1">
              Top-quality worldwide executive limousine service.
            </h1>
            <p className="max-w-480 text-sec text-base sm:text-xl mb-12">
              Pamper yourself with corporate limousine services. Providing You
              With The Absolute Best Luxury Limousine Service
            </p>
            <div className="flex gap-4">
              <Link href="/">
                <a
                  aria-label="Play store"
                  className="block relative w-135 h-10 hover:scale-105 transition-transform"
                >
                  <Image
                    src="/play-store.svg"
                    alt="Google play store"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
              <Link href="">
                <a
                  aria-label="App store"
                  className="block relative w-135 h-10 hover:scale-105 transition-transform"
                >
                  <Image
                    src="/app-store.svg"
                    alt="App store"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className={`${styles.hero_image} hidden md:block`}>
            <div className="relative h-640">
              <Image
                src="/mobile-hero.png"
                alt="Hero image"
                layout="fill"
                objectFit="contain"
                objectPosition="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
