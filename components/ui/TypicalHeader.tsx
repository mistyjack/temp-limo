import { FC } from "react";

interface ITypicalHeader {
  heading: string;
  subHeading: string;
}

const TypicalHeader: FC<ITypicalHeader> = ({ heading, subHeading }) => {
  return (
    <>
      <h2
        className="h2 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {heading}
      </h2>
      <p
        className="text-sec text-center text-base sm:text-xl mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {subHeading}
      </p>
    </>
  );
};

export default TypicalHeader;
