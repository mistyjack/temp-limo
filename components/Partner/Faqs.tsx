import FaqItem, { IFaqItem } from "@components/ui/FaqItem";
import TypicalHeader from "@components/ui/TypicalHeader";
import { FC } from "react";

const data: IFaqItem[] = [
  {
    question: "How much does it cost to rent a limousine on All Star?",
    answer:
      "Cost of rentals depends on a lot on the type of car you're renting and for how long you're renting it. But the price can be as low as $100 depending on how long it will be rented out.",
  },
  {
    question: "How do I know if the limousine is available before I book it?",
    answer:
      "Available limos will be displayed on top of our collection and will be clickable. Non available ones will not have a clickable button and a sign signalling it's unavailability will be put on it.",
  },
  {
    question: "How can I be sure that the limousine I'm renting is safe?",
    answer:
      "Our platform has had a lot of users that rates us highly and we have an impressive track record. An unsafe vehicle not only puts your dear lives to risk, it also puts our own integrity at risk.",
  },
  {
    question: "What is the average rental time for a limousine?",
    answer:
      "Limousine rental times can easily vary from hours to days, this however reflects on the price of rental.",
  },
  {
    question: "How do I know that I can trust All Star limo service?",
    answer:
      "Our impressive track records speak for itself. Our hospitality, accessibility, great drivers etc can not be matched by any in this industry. We are the cutting edge in an highly competitive industry and we strive to remain that way. ",
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
            key={item.question + " " + index}
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
