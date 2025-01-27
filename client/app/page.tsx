
import React from 'react';
import Navbar from '@components/Navbar';
import Landing from '@components/Landing';
import Technologies from '@components/Technologies';
import WhatWeDo from '@components/WhatWeDo';
import Footer from '@components/Footer';
import RightPartener from '@components/RightPartner';
import Quote from '@components/Quote';

export default function Home() {

  return (
    <>
      <Navbar />
      <Landing />
      <WhatWeDo />
      <Technologies />
      <RightPartener/>
      <Quote  />
      <Footer />
    </>
  );
}
