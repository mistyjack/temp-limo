import Connect from "@components/icon/Connect";
import FeaturedFlashIcon from "@components/icon/FeaturedFlash";
import SmileIcon from "@components/icon/Smile";
import TypicalHeader from "@components/ui/TypicalHeader";
import { FC, ReactNode } from "react";

const data: IWhatYouGetItem[] = [
  {
    icon: <SmileIcon />,
    title: "Increase revenue",
    content:
      "Drive more traffic to your business by listing your limo up for rental on All Star Limo service.",
  },
  {
    icon: <Connect />,
    title: "Connect easily with customers",
    content:
      "All Star limo service offer you a platform to easily list your vehicle for hire and connect with people looking for luxury transportation.",
  },
  {
    icon: <FeaturedFlashIcon />,
    title: "Better customer interaction",
    content:
      "All star limo service will help you be more successful by helping you have a faster response time and increased customer base.",
  }
];

const WhatYouGet: FC = () => {
  return (
    <section id="what-you-get">
      <div className="custom-container py-24">
        <TypicalHeader
          heading="What you get"
          subHeading="We're looking for smart, motivated people. No matter where you
          live."
        />

        <div className="sm:grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="mb-8 sm:mb-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <WhatYouGetItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

export interface IWhatYouGetItem {
  icon: ReactNode;
  title: string;
  content: string;
}

export const WhatYouGetItem: FC<IWhatYouGetItem> = ({ icon, title, content }) => {
  return (
    <div className="text-center sm:text-left">
      {icon}
      <h3 className="font-medium mt-5 text-pry text-lg leading-30 mb-2">
        {title}
      </h3>
      <p className="text-sec text-base md:text-lg">{content}</p>
    </div>
  );
};
