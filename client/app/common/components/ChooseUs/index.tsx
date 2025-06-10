'use client';

import React from "react";
import CardsGrid from "../CardsGrid";
import Card from "../Card";
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
