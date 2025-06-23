"use client";

import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import OurProcess from "@components/OurProcess";
import MissionVision from "@components/MissionVision";
import AboutUsHero from "@components/AboutUsHero";
import WeBelieve from "@components/WeBelieve";


const AboutUs = () => {

  return (
    <>
      <Navbar />
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and values."
        />
      </Head>
        <AboutUsHero />
        <OurProcess />
        <MissionVision />
        <WeBelieve />
        <Footer />
    </>
  );
};

export default AboutUs;
