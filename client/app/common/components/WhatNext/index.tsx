"use client";

import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import {Fragment} from "react";

const WhatNext = () => {
  const { t } = useTranslation();

  const steps = t("whatNext.steps", { returnObjects: true }) as string[];

  return (
    <div className={style.whatNextContainer}>
      <h2 className={style.title}>{t("whatNext.title")}</h2>

      <div className={style.gridContainer}>
        {steps.map((element, index) => (
          <Fragment key={index}>
            <div className={style.leftColumn}>
              <div className={style.number}>{index + 1}</div>
              {index < steps.length - 1 && <div className={style.line}></div>}
            </div>
            <div className={style.rightColumn}>{element}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhatNext;
