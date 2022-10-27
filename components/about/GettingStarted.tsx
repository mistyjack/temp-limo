import { FC } from "react";

const GettingStarged: FC = () => {
  return (
    <section id="getting-started" className="pt-32 md:pt-48 pb-24">
      <div className="custom-container  ">
        <div className="mb-24">
          <p className="text-primary leading-7 mb-3">Our Story</p>
          <h2
            className="h2 font-semibold mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We&apos;re just getting started
          </h2>
          <p
            className="text-sec text-base sm:text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We&apos;ve already helped over 4,000 companies achieve remarkable
            results.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-16 text-sec text-lg">
          <div className="mb-10 md:mb-0">
            <p className="mb-8" data-aos="fade-up" data-aos-duration="1000">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
          </div>
          <div className="">
            <p className="mb-8" data-aos="fade-up" data-aos-duration="1000">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarged;
