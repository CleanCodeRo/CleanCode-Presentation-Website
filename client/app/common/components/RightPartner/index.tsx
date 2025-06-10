'use client';

import React from "react";
import CardsGrid from "../CardsGrid";
import Card from "../Card";
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
