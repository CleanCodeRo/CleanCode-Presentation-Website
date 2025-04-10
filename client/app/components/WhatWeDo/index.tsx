"use client";

import React from "react";
import style from "./style.module.scss";
import { DESCRIPTION, TITLE, IDEAS, SOLUTIONS, INSIGHTS, SOFTWARE, BUTTON } from "@constants/whatWeDo";

const WhatWeDo = () => {
  return (
    <section className={style.container}>
      <div className={style.title}>{TITLE}</div>
      <div className={style.whatWeDo}>
        <div className={style.leftSide}>
          <div className={style.description}>{DESCRIPTION}</div>
          <button
            className={style.letsTalk}
            onClick={() => (window.location.href = "/ContactUs")}
          >
            {BUTTON}
          </button>
        </div>
        <div className={style.rightSide}>
          <div className={style.square1}>
            <img
              src="/assets/svg/MainPage/innovative-ideas.svg"
              alt="product development"
              className={style.smallImg}
            />
            <div className={style.smallTitle}>{IDEAS}</div>
          </div>
          <div className={style.square2}>
            <img
              src="/assets/svg/MainPage/tailored-solutions.svg"
              alt="project development"
              className={style.smallImg}
            />
            <div className={style.smallTitle}>{SOLUTIONS}</div>
          </div>
          <div className={style.square3}>
            <img
              src="/assets/svg/MainPage/strategic-insights.svg"
              alt="seo"
              className={style.smallImg}
            />
            <div className={style.smallTitle}>{INSIGHTS}</div>
          </div>
          <div className={style.square4}>
            <img
              src="/assets/svg/MainPage/reliable-software.svg"
              alt="product development"
              className={style.smallImg}
            />
            <div className={style.smallTitle}>{SOFTWARE}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
