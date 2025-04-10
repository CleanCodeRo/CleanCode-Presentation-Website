'use client';

import React from "react";
import CardsGrid from "@components/CardsGrid";
import Card from "@components/Card";
import { TITLE, HIGHLIGHTED_WORD, JSON_PATH } from "@constants/rightPartner";

const RightPartner = () => {
  return (
    <CardsGrid
      title={TITLE}
      highlightedWord={HIGHLIGHTED_WORD}
      jsonPath={JSON_PATH}
      containerClass="rightPartnerContainer"
      CardComponent={Card}
    />
  );
};

export default RightPartner;
