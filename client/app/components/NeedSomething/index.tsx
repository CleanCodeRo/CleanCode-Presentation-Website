'use client';

import React from "react";
import { useTranslation } from "react-i18next";
import CallToAction from "@components/CallToAction";

const NeedSomething = () => {
  const { t } = useTranslation();

  return (
    <CallToAction 
      title={t('needSomethingElse.title')} 
      subtitle={t('needSomethingElse.subtitle')} 
      content={t('needSomethingElse.content')}
      buttonText={t('needSomethingElse.button')}
      buttonLink="/ContactUs"
    />
  );
};

export default NeedSomething;