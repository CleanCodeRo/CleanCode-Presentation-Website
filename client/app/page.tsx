import React from 'react';
import Navbar from '@components/Navbar';
import Landing from '@components/Landing';
import Technologies from '@components/Technologies';
import WhatWeDo from '@components/WhatWeDo';
import Footer from '@components/Footer';
import CardsGrid from "@components/CardsGrid";
import Card from "@components/Card";
import Quote from '@components/Quote';

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
