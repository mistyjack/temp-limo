import ContactCard from "@components/contact/ContactCard";
import Hero from "@components/contact/Hero";
import OurApp from "@components/home/OurApp";
import Faqs from "@components/Partner/Faqs";
import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Support: NextPage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  
  return (
    <>
      <Head>
        <title>Contact {"-"} All Star Limousine</title>
        <meta name="description" content="We’d love to hear from you" />
      </Head>

      <main>
        <Hero />
        <ContactCard />
        <Faqs />
        <OurApp />
      </main>
    </>
  );
};

export default Support;
