'use client';

import React from "react";
import CardsGrid from "@components/CardsGrid";
import Card from "@components/Card";
import { TITLE, SUBTITLE, HIGHLIGHTED_WORD, JSON_PATH } from "@constants/chooseUs";

const ChooseUs = () => {
  return (
    <CardsGrid
      title={TITLE}
      highlightedWord={HIGHLIGHTED_WORD}
      subtitle={SUBTITLE}
      jsonPath={JSON_PATH}
      containerClass=""
      CardComponent={Card}
    />
  );
};

export default ChooseUs;
