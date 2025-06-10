import React from 'react';
import Navbar from './common/components/Navbar';
import Landing from './common/components/Landing';
import Technologies from './common/components/Technologies';
import WhatWeDo from './common/components/WhatWeDo';
import Footer from './common/components/Footer';
import CardsGrid from "./common/components/CardsGrid";
import Card from "./common/components/Card";
import Quote from './common/components/Quote';

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <WhatWeDo />
      <Technologies />
      <CardsGrid
        title="Why we're the right partner"
        highlightedWord="right partner"
        jsonPath="/assets/json/rightPartner.json"
        containerClass="rightPartnerContainer"
        CardComponent={Card}
      />
      <Quote />
      <Footer />
    </>
  );
}
