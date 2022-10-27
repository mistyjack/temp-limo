import BlueCheck from "@components/icon/BlueCheck";
import FeaturedFlashIcon from "@components/icon/FeaturedFlash";
import FeaturedNetwork from "@components/icon/FeaturedNetwork";
import OrangeCheck from "@components/icon/OrangeCheck";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface ISection2Item {
  title: string;
  body: string;
  list: string[];
  icon: ReactNode;
  listIcon: ReactNode;
}

const occasion: ISection2Item = {
  title: "Limousines For Any Occasion",
  body: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  list: [
    "Keep your customers in the loop with live chat",
    "Embed help articles right on your website",
    "Customers never have to leave the page to find an answer",
  ],
  icon: <FeaturedFlashIcon />,
  listIcon: <OrangeCheck />,
};

const executive: ISection2Item = {
  title: "Executive Limousine Service",
  body: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  list: [
    "Filter, export, and drilldown on the data quickly",
    "Save, schedule, and automate reports to your inbox",
    "Connect the tools you already use with 100+ integrations",
  ],
  icon: <FeaturedNetwork />,
  listIcon: <BlueCheck />,
};

const Section2Item: FC<ISection2Item> = ({
  title,
  body,
  list,
  icon,
  listIcon,
}) => {
  return (
    <div>
      {icon}
      <h3
        className="text-xl md:text-3xl font-semibold mt-2 md:mt-6 mb-4 text-pry leading-50"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {title}
      </h3>
      <div
        className="md:text-lg text-sec max-w-560 mx-auto md:mx-0 mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {body}
      </div>
      <ul className="pl-4">
        {list.map((item, index) => (
          <li key={`${item}-${index}`} className="flex mb-5 gap-3">
            {listIcon}
            <p className="text-sec text-lg">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const data: IPictureTextGrid[] = [
  {
    image: "/occasion.png",
    children: <Section2Item {...occasion} />,
  },
  {
    image: "/executive.png",
    children: <Section2Item {...executive} />,
    reverse: true,
  },
];

const Section2: FC = () => {
  return (
    <section id="section-2" className="pt-32 md:pt-48 pb-24">
      <div className="custom-container-no-p">
        <div className="max-w-768 mx-auto text-center mb-24">
          <h2
            className="h2 font-semibold mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Providing You With The Absolute Best Luxury Limousine Service
          </h2>
          <p
            className="text-sec text-base sm:text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {data.map((item, index) => (
          <div
            key={`${item.image}-${index}`}
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
  children: ReactNode;
  reverse?: boolean;
}

const PictureTextGrid: FC<IPictureTextGrid> = ({
  image,
  children,
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
          className="transition-all duration-700 hover:scale-105"
          src={image}
          alt="Limo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`md:w-1/2 p-4 ${reverse ? "md:pl-12 lg:pl-20" : ""}`}>
        {children}
      </div>
    </div>
  );
};
