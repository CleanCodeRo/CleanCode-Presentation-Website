"use client";

import React from "react";
import style from "./style.module.scss";
import {
  TECHNOLOGIES,
  TECHNOLOGIES_PATH,
  TECHNOLOGIES_FILE_EXTENSION,
  TECHNOLOGIES_TITLE,
  TECHNOLOGIES_SUBTITLE,
  TECHNOLOGIES_TEXT,
} from "@constants/technologies";

const Technologies = () => {
  return (
    <section className={style.technologiesBar}>
      <div className={style.technologiesContent}>
        <h2 className={style.technologiesTitle}>{TECHNOLOGIES_TITLE}</h2>
        <h3 className={style.technologiesSubTitle}>{TECHNOLOGIES_SUBTITLE}</h3>
        <p className={style.technologiesText}>{TECHNOLOGIES_TEXT}</p>
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
