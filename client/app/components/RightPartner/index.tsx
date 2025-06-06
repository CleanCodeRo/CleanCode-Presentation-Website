'use client';

import React from "react";
import CardsGrid from "@components/CardsGrid";
import Card from "@components/Card";
import { useTranslation } from "react-i18next";

const RightPartner = () => {
  const { t } = useTranslation();

  const content = t('rightPartner.content', { returnObjects: true });

  return (
    <CardsGrid
      title={t('rightPartner.title')}
      highlightedWord={t('rightPartner.highlightedWord')}
      jsonPath={JSON.stringify(content)}
      containerClass="rightPartnerContainer"
      CardComponent={Card}
    />
  );
};

export default RightPartner;
