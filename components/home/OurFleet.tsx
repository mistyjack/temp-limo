import ArrowRightIcon from "@components/icon/ArrowRight";
import styles from "@styles/Home.module.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { FC, useState } from "react";

const data: IFleet[] = [
  {
    image: "/fleet-1.png",
    name: "Rolls Royce Cullinan - Luxury Armored and Stretched",
    year: 2022,
    transmission: "Automatic",
    seats: 8,
    doors: 6,
    gears: 9,
  },
  {
    image: "/fleet-2.png",
    name: "Mulsanne Extended Wheelbase Luxury Limo",
    year: 2020,
    transmission: "Automatic",
    seats: 8,
    doors: 6,
    gears: 7,
  },
  {
    image: "/fleet-3.png",
    name: "Mercedes-Benz Maybach S650 State Limo MMR_1365_1",
    year: 2022,
    transmission: "Automatic",
    seats: 8,
    doors: 6,
    gears: 7,
  },
  {
    image: "/fleet-2.png",
    name: "Rolls Royce Cullinan - Luxury Armored and Stretched",
    year: 2022,
    transmission: "Automatic",
    seats: 8,
    doors: 6,
    gears: 9,
  },
];

const OurFleet: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: { perView: "auto", spacing: 32 },
  });

  return (
    <section id="our-fleet" className="font-vis py-24">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <h2 className="h2 mb-5">Our Fleet</h2>
          <a className="relative pr-8" href="/about-us#our-fleet">
            See all
            <span className="btn-anim-icon absolute right-0">
              <ArrowRightIcon />
            </span>
          </a>
        </div>

        <div className="keen-slider pb-8" ref={sliderRef}>
          {data.map((item, index) => (
            <Fleet key={`${item.name}-${index}`} {...item} />
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex p-2 justify-center mt-4">
            {[
              ...Array(
                instanceRef.current.track?.details?.slides?.length
              ).keys(),
            ].map((idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`cursor-pointer mr-2 hover:bg-primary-dark ${
                    currentSlide === idx ? "bg-primary" : "bg-primary-light"
                  } ${
                    currentSlide === idx ? "rounded-xl" : "rounded-full"
                  } h-2 ${currentSlide === idx ? "w-4" : "w-2"}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurFleet;

interface IFleet {
  image: string;
  name: string;
  year: number;
  transmission: string;
  seats: number;
  doors: number;
  gears: number;
}

const Fleet: FC<IFleet> = ({
  image,
  name,
  year,
  transmission,
  seats,
  doors,
  gears,
}) => {
  return (
    <div
      className={`pb-6 dark:bg-fleet relative z-50 rounded-t-2xl keen-slider__slide min-w-250 md:min-w-384 transition-shadow duration-700 ${styles.fleet}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="h-40 md:h-60 mb-6 relative rounded-t-2xl">
        <Image
          className="transition-all duration-700"
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4">
        <h3 className="text-base md:text-xl text-pry md:leading-9 mb-3 font-medium">
          {name}
        </h3>
        <div className="flex justify-between text-sec mb-3">
          <p>Year</p>
          <p>{year}</p>
        </div>
        <div className="flex justify-between text-sec mb-3">
          <p>Transmission</p>
          <p>{transmission}</p>
        </div>
        <div className="flex justify-between text-sec mb-3">
          <p>Number of seats</p>
          <p>{seats}</p>
        </div>
        <div className="flex justify-between text-sec mb-3">
          <p>Number of doors</p>
          <p>{doors}</p>
        </div>
        <div className="flex justify-between text-sec mb-3">
          <p>Number of gears</p>
          <p>{gears}</p>
        </div>
      </div>
    </div>
  );
};
