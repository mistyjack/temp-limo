import FeaturedEmailIcon from "@components/icon/FeaturedEmail";
import Image from "next/image";
import { FC, ReactNode } from "react";

const data: IPictureTextGrid[] = [
  {
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop. Leverage automation to move fast, while always giving customers a human, helpful experience.",
    image: "/picture-1.png",
    icon: <FeaturedEmailIcon />,
  },
  {
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop. Leverage automation to move fast, while always giving customers a human, helpful experience.",
    image: "/picture-2.png",
    icon: <FeaturedEmailIcon />,
    reverse: true,
  },
];

const Section2: FC = () => {
  return (
    <section id="section-2" className="pt-16 md:pt-48 pb-24">
      <div className="custom-container-no-p">
        <div className="max-w-768 mx-auto text-center mb-24">
          <h2 className="h2 font-semibold mb-5">
            Providing You With The Absolute Best Luxury Limousine Service
          </h2>
          <p className="text-sec text-base sm:text-xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`px-4 md:px-0 text-center md:text-left ${data.length - 1 !== index ? "mb-20" : ""}`}
          >
            <PictureTextGrid
              title={item.title}
              content={item.content}
              image={item.image}
              icon={item.icon}
              reverse={item.reverse}
            />
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
        <h3 className="text-xl md:text-3xl font-semibold mt-2 md:mt-6 mb-4 text-pry leading-50">
          {title}
        </h3>
        <div className="md:text-lg text-sec max-w-560 mx-auto md:mx-0">{content}</div>
      </div>
    </div>
  );
};
