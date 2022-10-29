import SignUp from "@components/signup/Signup";
import type { NextPage } from "next";
import Head from "next/head";

const Signup: NextPage = () => {  
  return (
    <>
      <Head>
        <title>Partner with us - All Star Limousine</title>
        <meta name="description" content="Our mission is to ensure teams can do their best work, no matter their size or budget. We focus on the details of everything we do." />
      </Head>

      <main>
        <SignUp />
      </main>
    </>
  );
};

export default Signup;
