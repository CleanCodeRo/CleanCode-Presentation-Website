"use client";

import React from "react";
import Head from "next/head";
import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import ChooseUs from "../common/components/ChooseUs";
import NeedSomething from "../common/components/NeedSomething";
import WeCanOffer from "../common/components/WeCanOffer";
import DeveloperTeam from "../common/components/DeveloperTeam";

const Services = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Services</title>
        <meta
          name="Services"
          content="Learn more about our services."
        />
      </Head>
      <ChooseUs />
      <NeedSomething />
      <WeCanOffer />
      <DeveloperTeam />
      <Footer />
    </>
  );
}

export default Services;
