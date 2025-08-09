import Technologies from "@components/Technologies";
import WhatWeDo from "@components/WhatWeDo";
import CardsGrid from "@components/CardsGrid";
import LandingTitle from "@components/Title";
import cardData from "@assets/json/rightPartner.json";
import CallToAction from "@components/CallToAction";

export default function Home() {
  return (
    <>
      <LandingTitle />
      <WhatWeDo />
      <Technologies />
      <CardsGrid
        translationKey="rightPartner"
        cardData={cardData}
        containerClass="rightPartnerContainer"
      />
      <CallToAction translationKey="quote" buttonLink={"/share-ideas"} />
    </>
  );
}
