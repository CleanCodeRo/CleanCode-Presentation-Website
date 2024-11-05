'use client';

import React from "react";
import style from "./style.module.scss";
import { WHAT_NEXT_TITLE, WHAT_NEXT_ELEMENTS } from '@constants/constants';

const WhatNext = () => {
  return (
    <div className={style.whatNextContainer}>
      {/* Background cover to mask the inner border */}
      <div className={style.backgroundCover}></div>

      {/* Title */}
      <h2 className={style.title}>{WHAT_NEXT_TITLE}</h2>

      {/* List of elements */}
      <div className={style.elementsContainer}>
        {WHAT_NEXT_ELEMENTS.map((element, index) => (
          <div key={index} className={style.element}>
            <div className={style.numberContainer}>
              <div className={style.number}>{index + 1}</div>
              {/* Only add the line if it's not the last element */}
              {index < WHAT_NEXT_ELEMENTS.length - 1 && <div className={style.line}></div>}
            </div>
            <div className={style.text}>{element}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatNext;

