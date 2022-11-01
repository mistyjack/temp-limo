import FeaturedEmailIcon from "@components/icon/FeaturedEmail";
import FeaturedPhoneIcon from "@components/icon/FeaturedPhone";
import FeaturedLocationIcon from "@components/icon/Location";
import { FC, ReactNode } from "react";

const data: ICard[] = [
  {
    icon: <FeaturedEmailIcon />,
    title: "Email",
    description: "Our friendly team is here to help.",
    email: "info@allstarlimoservice.com",
  },
  {
    icon: <FeaturedLocationIcon />,
    title: "Office",
    description: "Come say hello at our office HQ.",
    address: "Fillings Team, 5900 Balcones Drive STE 100, Austin, TX 78731 USA",
  },
  {
    icon: <FeaturedPhoneIcon />,
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    address: "+1 713 447 8175",
  },
];

const ContactCard: FC = () => {
  return (
    <section id="contact-card" className="pb-24">
      <div className="custom-container sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={item.title}
            className={`${data.length - 1 !== index ? "mb-6 sm:mb-0" : ""}`}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCard;

interface ICard {
  icon: ReactNode;
  title: string;
  description: string;
  address?: string;
  email?: string;
  phone?: string;
}

const Card: FC<ICard> = ({
  icon,
  title,
  description,
  address,
  email,
  phone,
}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="font-medium mt-5 text-pry text-lg leading-30 mb-2">
        {title}
      </h3>
      <p className="text-sec text-base md:text-lg mb-5">
        {description}
      </p>
      {Boolean(address) && <p className="text-pry font-medium max-w-200 mx-auto">{address}</p>}
      {Boolean(email) && (
        <a href={`mailto:${email}`} className="text-pry font-medium">
          {email}
        </a>
      )}
      {Boolean(phone) && (
        <a href={`tel:+${phone}`} className="text-pry font-medium">
          {phone}
        </a>
      )}
    </div>
  );
};
