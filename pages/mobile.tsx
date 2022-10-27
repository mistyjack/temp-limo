import OurApp from "@components/home/OurApp";
import Testimonies from "@components/home/Testimonies";
import Hero from "@components/mobile/Hero";
import Section2 from "@components/mobile/Section2";
import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Mobile: NextPage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Mobile App {"-"} All Star Limousine</title>
        <meta name="description" content="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." />
      </Head>

      <main>
        <Hero />
        <Section2 />
        <Testimonies />
        <OurApp />
      </main>
    </div>
  );
};

export default Mobile;
