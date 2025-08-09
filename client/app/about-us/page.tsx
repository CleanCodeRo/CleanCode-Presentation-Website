import { Metadata } from "next";
import OurProcess from "@components/OurProcess";
import MissionVision from "@components/MissionVision";
import AboutUsHero from "@components/AboutUsHero";
import WeBelieve from "@components/WeBelieve";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and values.",
};

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <OurProcess />
      <MissionVision />
      <WeBelieve />
    </>
  );
};

export default AboutUs;
