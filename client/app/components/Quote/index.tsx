'use client';

import React from "react";
import CallToAction from "@components/CallToAction";
import { useTranslation } from "react-i18next";

const Quote = () => {
  const { t } = useTranslation();

  return (
    <CallToAction 
      title={t("quote.title")}
      content={t("quote.content")} 
      buttonText={t("quote.button")} 
      buttonLink={"/ShareIdeas"}
    />
  );
};

export default Quote;
