import FeaturedNetwork from "@components/icon/FeaturedNetwork";
import PartnerFlashIcon from "@components/icon/PartnerFlash";
import PartnerMailIcon from "@components/icon/PartnerMail";
import {
  IWhatYouGetItem,
  WhatYouGetItem
} from "@components/Partner/WhatYouGet";
import TypicalHeader from "@components/ui/TypicalHeader";
import { FC } from "react";

const data: IWhatYouGetItem[] = [
  {
    icon: <PartnerMailIcon />,
    title: "Convenience",
    content:
      "To be the go-to platform for limousine rental, providing an easy and convenient way for users to rent limos and track their rides, as well as a reliable source of income for limousine owners.",
  },
  {
    icon: <PartnerFlashIcon />,
    title: "Comfort",
    content:
      "We want to be the go-to limousine rental platform for anyone who wants to make a grand entrance or ensure a comfortable, safe ride.",
  },
  {
    icon: <FeaturedNetwork />,
    title: "Simplicity",
    content:
      "To provide an easy-to-use system for both limousine owners and renters that is reliable and trustworthy. Our goal is to create a 5-star experience for all involved.",
  },
];

const OurValues: FC = () => {
  return (
    <section id="what-you-get">
      <div className="custom-container py-24">
        <TypicalHeader
          heading="Our Values"
          subHeading="What do we value? All sorts of things! But we particularly pride ourselves on:"
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

export default OurValues;
