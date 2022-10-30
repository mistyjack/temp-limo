import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const OurApp: FC = () => {
  return (
    <section id="our-app" className="font-vis py-24">
      <div className="custom-container flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-pry text-2xl md:text-5xl md:leading-57 max-w-576 font-medium mb-6">
            Our awesome App is coming soon
          </h2>
          <p className="text-sec md:text-xl max-w-480 mb-10">
            We are still building. To be notified when we launch, sign up for
            updates. We guarantee there won&apos;t be any spam!
          </p>
          <p className="font-medium text-adaptive text-sm mb-4">
            Coming soon to
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
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/our-app.png"
            alt="Our app"
            width={589}
            height={512}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default OurApp;
