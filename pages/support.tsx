import ContactCard from "@components/contact/ContactCard";
import ContactForm from "@components/contact/ContactForm";
import Hero from "@components/contact/Hero";
import OurApp from "@components/home/OurApp";
import Faqs from "@components/Partner/Faqs";
import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";

const Support: NextPage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Contact - All Star Limousine</title>
        <meta name="description" content="We’d love to hear from you" />
      </Head>

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY!}
        scriptProps={{
          async: false, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: "body", // optional, default to "head", can be "head" or "body",
          nonce: undefined,
        }}
      >
        <ToastContainer />
        <main>
          <Hero />
          <ContactCard />
          <ContactForm />
          <Faqs />
          <OurApp />
        </main>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default Support;
