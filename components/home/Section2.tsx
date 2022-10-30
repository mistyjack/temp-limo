import Connect from "@components/icon/Connect";
import FeaturedNetwork from "@components/icon/FeaturedNetwork";
import CommonHeading from "@components/ui/CommonHeading";
import Image from "next/image";
import { FC, ReactNode } from "react";

const data: IPictureTextGrid[] = [
  {
    title: "Embrace the style",
    content:
      "For travelers, rent a limo to experience new things and see hidden delights. For business people, entertain your clients in style or just ride back from the airport in luxury. No matter why you need a limousine, we are here for you",
    image: "/picture-1.png",
    icon: <Connect />,
  },
  {
    title: "Rent out your Limo with convenience",
    content:
      "Join the growing community of limousine owners, who are coming to the platform to rent out their unused limo. Renters can book the car to suits their needs and budgets. This is great news for all luxury car owners.",
    image: "/picture-2.png",
    icon: <FeaturedNetwork />,
    reverse: true,
  },
];

const Section2: FC = () => {
  return (
    <section id="section-2" className="pt-32 md:pt-48 pb-24">
      <div className="custom-container-no-p">
        <CommonHeading />

        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`px-4 md:px-0 text-center md:text-left ${
              data.length - 1 !== index ? "mb-20" : ""
            }`}
          >
            <PictureTextGrid {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;

interface IPictureTextGrid {
  image: string;
  icon: ReactNode;
  title: string;
  content: string;
  reverse?: boolean;
}

const PictureTextGrid: FC<IPictureTextGrid> = ({
  image,
  icon,
  title,
  content,
  reverse = false,
}) => {
  return (
    <div
      className={`shadow-lg rounded-xl md:rounded-none overflow-hidden md:shadow-none md:flex md:items-center md:gap-12 lg:gap-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`md:w-1/2 h-72 sm:h-543 relative ${
          reverse ? "md:rounded-l-3xl" : "md:rounded-r-3xl"
        } overflow-hidden`}
      >
        <Image
          className="transition-all duration-700 hover:scale-125"
          src={image}
          alt="Limo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`md:w-1/2 p-4 ${reverse ? "md:pl-12 lg:pl-20" : ""}`}>
        {icon}
        <h3
          className="text-xl md:text-3xl font-semibold mt-2 md:mt-6 mb-4 text-pry leading-50"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h3>
        <div
          className="md:text-lg text-sec max-w-560 mx-auto md:mx-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {content}
        </div>
      </div>
    </div>
  );
};
