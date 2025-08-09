import { Metadata } from "next";
import WeCanOffer from "@components/WeCanOffer";
import DeveloperTeam from "@components/DeveloperTeam";
import CardsGrid from "@components/CardsGrid";
import cardData from "@assets/json/chooseUs.json";
import CallToAction from "@components/CallToAction";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about our services.",
};

const Services = () => {
  return (
    <>
      <CardsGrid translationKey="chooseUs" cardData={cardData} />;
      <CallToAction translationKey="needSomethingElse" buttonLink="/contact-us" />
      <WeCanOffer />
      <DeveloperTeam />
    </>
  );
};

export default Services;
