import TwitterIcon from "@components/icon/Twitter";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { FC, useState } from "react";

const data: ITestimony[] = [
  {
    name: "Leslie Alexander",
    title: "CEO at Creativex",
    content:
      "I had an amazing experience using All Star Limo. I am a frequent traveler and often need a limousine to take me somewhere in New York City, but I only want one that is reliable. I found this website by chance and it was the best thing that ever happened to me. I always know when I use them that I will get the best service at a very reasonable price.",
    icon: "/a-1.png",
  },
  {
    name: "Kristin Watson",
    title: "CEO at Creativex",
    content:
      "I just wanted to say thank you All Star Limo for having such a great website. When I was looking for a limo rental in Philadelphia, your site came up and it is so easy to use. The prices are affordable and the cars are beautiful.",
    icon: "/a-2.png",
  },
  {
    name: "Courtney Henry",
    title: "CEO at Creativex",
    content:
      "I just wanted to say that I came across All Star Limo Service by accident and it has been one of the most convenient sites I have ever used. It is so easy to compare different styles and prices, and if you are unsure about sizing this site is a great tool.",
    icon: "/a-3.png",
  },
  {
    name: "Jane Cooper",
    title: "CEO at Creativex",
    content:
      "I love the All Star limo service. I recently rented a limo from them and they were very professional and accommodating. The car was spotless and the driver was really friendly. I wouldn't change a thing!",
    icon: "/a-4.png",
  },
];

const Testimonies: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: { perView: 1, spacing: 32 },
  });

  return (
    <section id="testimonies" className="py-32">
      <div className="custom-container">
        <h2 className="h2 text-center mb-8 md:mb-16">
          What customers are saying
        </h2>

        <div className="keen-slider md:hidden" ref={sliderRef}>
          {data.map((item, index) => (
            <div
              key={`${item.name}-${index}-mob`}
              className="keen-slider__slide md:hidden"
            >
              <Testimony {...item} />
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex md:hidden p-2 justify-center mt-4">
            {[
              ...Array(
                instanceRef.current.track?.details?.slides?.length
              ).keys(),
            ].map((idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`cursor-pointer mr-2 hover:bg-primary-dark ${
                    currentSlide === idx ? "bg-primary" : "bg-primary-light"
                  } ${
                    currentSlide === idx ? "rounded-xl" : "rounded-full"
                  } h-2 ${currentSlide === idx ? "w-4" : "w-2"}`}
                />
              );
            })}
          </div>
        )}

        <div className="md:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 hidden">
          {data.map((item, index) => (
            <div key={`${item.name}-${index}`} className="">
              <Testimony {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

interface ITestimony {
  name: string;
  title: string;
  icon: string;
  content: string;
}

const Testimony: FC<ITestimony> = ({ name, title, icon, content }) => {
  return (
    <div
      className="border p-4 rounded-10 border-grey"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex items-center mb-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full relative w-10 h-10">
            <Image src={icon} alt="Avatar" layout="fill" objectFit="cover" />
          </div>
          <div className="">
            <h4 className="font-bold text-pry leading-7">{name}</h4>
            <h5 className="text-sec text-sm">{title}</h5>
          </div>
        </div>
        <TwitterIcon />
      </div>
      <p className="text-pry font-vis">{content}</p>
    </div>
  );
};
