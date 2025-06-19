"use client";

import React from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ChooseUs from "@components/ChooseUs";
import NeedSomething from "@components/NeedSomething";
import WeCanOffer from "@components/WeCanOffer";
import DeveloperTeam from "@components/DeveloperTeam";

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