import { FC } from "react";

const FeaturedFlashIcon: FC = () => {
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
        d="M29 18L19 30H28L27 38L37 26H28L29 18Z"
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

export default FeaturedFlashIcon;
