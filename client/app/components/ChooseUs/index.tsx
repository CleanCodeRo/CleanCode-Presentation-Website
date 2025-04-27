'use client';

import React from "react";
import CardsGrid from "@components/CardsGrid";
import Card from "@components/Card";
import { useTranslation } from "react-i18next";
import { JSON_PATH } from "@constants/chooseUs";

const ChooseUs = () => {

  const { t } = useTranslation();

  return (
    <CardsGrid
      title={t('chooseUs.title')}
      highlightedWord={t('chooseUs.highlightedWord')}
      subtitle={t('chooseUs.subtitle')}
      jsonPath={JSON_PATH}
      containerClass=""
      CardComponent={Card}
    />
  );
};

export default ChooseUs;
