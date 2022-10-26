import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import "aos/dist/aos.css";
import "keen-slider/keen-slider.min.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
