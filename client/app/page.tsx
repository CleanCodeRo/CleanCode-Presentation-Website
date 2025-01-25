"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@components/Navbar';
import Landing from '@components/Landing';
import DisplayMenu from '@components/DisplayMenu';
import Contact from '@components/Contact';
import Technologies from '@components/Technologies';
import WhatWeDo from '@components/WhatWeDo';
import { MenuProps } from '@models/menu';
import { MenuItemProps } from '@models/menuItem';
import Footer from '@components/Footer';
import Quote from '@components/Quote';

export default function Home() {
  const [services, setServices] = useState<MenuItemProps[]>([]);

  useEffect(() => {
    fetch('/assets/json/services.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        if (!Array.isArray(data)) {
          throw new Error("Data is not an array");
        }

        const mappedServices: MenuItemProps[] = data.map(service => ({
          name: service.name,
          cards: service.cards,
        }));

        console.log('Mapped services:', mappedServices);
        setServices(mappedServices);
      })
      .catch((error) => console.error('Error loading services:', error));
  }, []);


  return (
    <>
      <Navbar />
      <Landing />
      <WhatWeDo />
      <Technologies />
      <Contact />
      <Quote  />
      <Footer />
    </>
  );
}
