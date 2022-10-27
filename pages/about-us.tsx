import Banner from "@components/about/Banner";
import GettingStarged from "@components/about/GettingStarted";
import Hero from "@components/about/Hero";
import OurValues from "@components/about/OurValues";
import OurApp from "@components/home/OurApp";
import OurFleet from "@components/home/OurFleet";
import Faqs from "@components/Partner/Faqs";
import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const AboutUs: NextPage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  
  return (
    <>
      <Head>
        <title>About Us {"-"} All Star Limousine</title>
        <meta name="description" content="Making luxury your lifestyle." />
      </Head>

      <main>
        <Hero />
        <Banner />
        <GettingStarged />
        <OurValues />
        <OurFleet />
        <Faqs />
        <OurApp />
      </main>
    </>
  );
};

export default AboutUs;
