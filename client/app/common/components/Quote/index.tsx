'use client';

import CallToAction from "@components/CallToAction";
import { useTranslation } from "react-i18next";

const Quote = () => {
  const { t } = useTranslation();

  return (
    <CallToAction
      title={t("quote.title")}
      content={t("quote.content")}
      buttonText={t("quote.button")}
      buttonLink={"/share-ideas"}
    />
  );
};

export default Quote;
