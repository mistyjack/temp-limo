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
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <PartnerFlashIcon />,
    title: "Deliver instant answers",
    content:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <FeaturedNetwork />,
    title: "Manage your team with reports",
    content:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
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
