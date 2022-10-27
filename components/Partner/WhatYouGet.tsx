import ChatIcon from "@components/icon/Chat";
import Connect from "@components/icon/Connect";
import FeaturedNetwork from "@components/icon/FeaturedNetwork";
import PartnerFlashIcon from "@components/icon/PartnerFlash";
import PartnerMailIcon from "@components/icon/PartnerMail";
import SmileIcon from "@components/icon/Smile";
import TypicalHeader from "@components/ui/TypicalHeader";
import { FC, ReactNode } from "react";

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
  {
    icon: <SmileIcon />,
    title: "Connect with customers",
    content:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: <Connect />,
    title: "Connect the tools you already use",
    content:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: <ChatIcon />,
    title: "Our people make the difference",
    content:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
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

interface IWhatYouGetItem {
  icon: ReactNode;
  title: string;
  content: string;
}

const WhatYouGetItem: FC<IWhatYouGetItem> = ({ icon, title, content }) => {
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
