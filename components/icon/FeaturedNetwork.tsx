import { FC } from "react";

const FeaturedNetwork: FC = () => {
  return (
    <svg
      className="mx-auto md:mx-0"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#EBF3FE" />
      <path
        d="M34 36V26M28 36V20M22 36V30"
        stroke="#076DF3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="4"
        width="48"
        height="48"
        rx="24"
        stroke="#F5F9FF"
        strokeWidth="8"
      />
    </svg>
  );
};

export default FeaturedNetwork;
