import FaqItem, { IFaqItem } from "@components/ui/FaqItem";
import TypicalHeader from "@components/ui/TypicalHeader";
import { FC } from "react";

const data: IFaqItem[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const Faqs: FC = () => {
  return (
    <section id="faqs">
      <div className="custom-container py-24">
        <TypicalHeader
          heading="Frequently asked questions"
          subHeading="Everything you need to know about the product and billing."
        />

        {data.map((item, index) => (
          <div
            className={`max-w-768 mx-auto ${
              data.length - 1 !== index ? "border-b" : ""
            }`}
          >
            <FaqItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
