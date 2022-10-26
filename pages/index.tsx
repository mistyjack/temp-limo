import GetALimo from "@components/home/GetALimo";
import Hero from "@components/home/Hero";
import OurApp from "@components/home/OurApp";
import OurFleet from "@components/home/OurFleet";
import Section2 from "@components/home/Section2";
import Testimonies from "@components/home/Testimonies";
import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Home - All Star Limousine</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Hero />
        <Section2 />
        <OurFleet />
        <GetALimo />
        <Testimonies />
        <OurApp />
      </main>
    </div>
  );
};

export default Home;
