import BecomePartner from "@components/Partner/BecomePartner";
import Faqs from "@components/Partner/Faqs";
import Hero from "@components/Partner/Hero";
import Section2 from "@components/Partner/Section2";
import WhatYouGet from "@components/Partner/WhatYouGet";
import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Partner: NextPage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  
  return (
    <>
      <Head>
        <title>Partner with us {"-"} All Star Limousine</title>
        <meta name="description" content="Our mission is to ensure teams can do their best work, no matter their size or budget. We focus on the details of everything we do." />
      </Head>

      <main>
        <Hero />
        <Section2 />
        <WhatYouGet />
        <Faqs />
        <BecomePartner />
      </main>
    </>
  );
};

export default Partner;
