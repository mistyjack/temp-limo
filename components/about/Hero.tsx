import { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="about-hero">
      <div className="custom-container text-center py-24">
        <p className="text-primary leading-7 mb-3">About us</p>
        <h1 className="h1 mb-6">Making luxury your lifestyle</h1>
        <p className="max-w-823 mx-auto text-sec text-base sm:text-xl mb-6">
          Increasing customer satisfaction
        </p>
      </div>
    </section>
  );
};

export default Hero;
