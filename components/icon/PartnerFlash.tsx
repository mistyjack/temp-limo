import { FC } from "react";

const PartnerFlashIcon: FC = () => {
  return (
    <svg
      className="mx-auto md:mx-0"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#F6FEFC" />
      <path
        d="M29 18L19 30H28L27 38L37 26H28L29 18Z"
        stroke="#14B082"
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
        stroke="#F6FEFC"
        strokeWidth="8"
      />
    </svg>
  );
};

export default PartnerFlashIcon;
