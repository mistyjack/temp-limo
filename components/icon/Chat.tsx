import { FC } from "react";

const ChatIcon: FC = () => {
  return (
    <svg
      className="mx-auto md:mx-0"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#EEFBF9" />
      <path
        d="M37 27.5C37.0034 28.8199 36.6951 30.1219 36.1 31.3C35.3944 32.7118 34.3098 33.8992 32.9674 34.7293C31.6251 35.5594 30.0782 35.9994 28.5 36C27.1801 36.0035 25.8781 35.6951 24.7 35.1L19 37L20.9 31.3C20.3049 30.1219 19.9966 28.8199 20 27.5C20.0006 25.9218 20.4406 24.3749 21.2707 23.0326C22.1008 21.6903 23.2883 20.6056 24.7 19.9C25.8781 19.305 27.1801 18.9966 28.5 19H29C31.0843 19.115 33.053 19.9948 34.5291 21.4709C36.0052 22.947 36.885 24.9157 37 27V27.5Z"
        stroke="#56D9C1"
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
        stroke="#F7FDFC"
        strokeWidth="8"
      />
    </svg>
  );
};

export default ChatIcon;
