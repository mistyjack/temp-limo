import { FC } from "react";

const SmileIcon: FC = () => {
  return (
    <svg
      className="mx-auto md:mx-0"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#FFF5EB" />
      <path
        d="M24 30C24 30 25.5 32 28 32C30.5 32 32 30 32 30M25 25H25.01M31 25H31.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
        stroke="#FCAF63"
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
        stroke="#FFFAF5"
        strokeWidth="8"
      />
    </svg>
  );
};

export default SmileIcon;
