import MinusIcon from "@components/icon/Minus";
import PlusIcon from "@components/icon/Plus";
import { FC, useState } from "react";

export interface IFaqItem {
  question: string;
  answer: string;
}

const FaqItem: FC<IFaqItem> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-768 flex justify-between pb-8 pt-6">
      <div className="max-w-720">
        <h4 className="font-medium md:text-lg text-pry mb-2">{question}</h4>
        <p className={`${open ? "" : "hidden"} transition-all duration-200 ease-in-out md:text-lg text-sec`}>
          {answer}
        </p>
      </div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {open ? <MinusIcon /> : <PlusIcon />}
      </div>
    </div>
  );
};

export default FaqItem;
