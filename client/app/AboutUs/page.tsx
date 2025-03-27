// pages/AboutUs.tsx

"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import OurProcess from "@components/OurProcess";
import MissionVision from "@components/MissionVision";
import AboutUsHero from "@components/AboutUsHero";
import WeBelieve from "@components/WeBelieve";
import { MissionStep } from "@models/card";

interface ProcessStep {
  id: number;
  name: string;
  detail: string;
}

const AboutUs = () => {
  const [processData, setProcessData] = useState<ProcessStep[]>([]);
  const [missionData, setMissionData] = useState<MissionStep[]>([]);

  useEffect(() => {
    const fetchProcessData = async () => {
      const response = await fetch("/assets/json/process.json");
      const data = await response.json();
      setProcessData(data);
    };

    const fetchMissionData = async () => {
      const response = await fetch("/assets/json/mission.json");
      const data = await response.json();
      setMissionData(data);
    };

    fetchProcessData();
    fetchMissionData();
  }, []);

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
        <OurProcess processData={processData} />
        <MissionVision missionData={missionData} />
        <WeBelieve />
        <Footer />
    </>
  );
};

export default AboutUs;
