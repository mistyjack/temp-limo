import Image from "next/image";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <section id="banner">
      <div className="custom-container relative h-96 sm:h-640">
        <Image src="/limo.png" alt="Limo on banner" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
};

export default Banner;
