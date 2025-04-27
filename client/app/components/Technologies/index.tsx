"use client";

import React from "react";
import style from "./style.module.scss";
import {
  TECHNOLOGIES,
  TECHNOLOGIES_PATH,
  TECHNOLOGIES_FILE_EXTENSION,
} from "@constants/technologies";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { t } = useTranslation();
  return (
    <section className={style.technologiesBar}>
      <div className={style.technologiesContent}>
        <h2 className={style.technologiesTitle}>{t('technologies.title')}</h2>
        <h3 className={style.technologiesSubTitle}>{t('technologies.subtitle')}</h3>
        <p className={style.technologiesText}>{t('technologies.text')}</p>
      </div>
      <div className={style.logosContainer}>
        <div className={style.logos}>
          {TECHNOLOGIES.map((tech, index) => (
            <img
              key={index}
              src={`${TECHNOLOGIES_PATH}${tech}${TECHNOLOGIES_FILE_EXTENSION}`}
              alt={`${tech} Logo`}
              className={style.logo}
              loading="lazy"
            />
          ))}
          {TECHNOLOGIES.map((tech, index) => (
            <img
              key={`duplicate-${index}`}
              src={`${TECHNOLOGIES_PATH}${tech}${TECHNOLOGIES_FILE_EXTENSION}`}
              alt={`${tech} Logo`}
              className={style.logo}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;