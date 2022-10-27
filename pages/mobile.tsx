import Hero from "@components/mobile/Hero";
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
      </main>
    </div>
  );
};

export default Mobile;
