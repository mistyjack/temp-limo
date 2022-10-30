import CommonHeading from "@components/ui/CommonHeading";
import Image from "next/image";
import { FC } from "react";

const data: IPictureTextGrid[] = [
  {
    title: "Share team inboxes",
    content: [
      "We’ve already helped over 4,000 companies achieve remarkable results.",
      "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
      "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
    ],
    image: "/partner.png",
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
  title: string;
  content: string[];
  reverse?: boolean;
}

const PictureTextGrid: FC<IPictureTextGrid> = ({
  image,
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
          className="transition-all duration-700 hover:scale-105"
          src={image}
          alt="Limo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`md:w-1/2 p-4 ${reverse ? "md:pl-12 lg:pl-20" : ""}`}>
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
          {content.map((item, index) => (
            <p className={content.length - 1 !== index ? "mb-8" : ""} key={`Text-item-${index}`}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
