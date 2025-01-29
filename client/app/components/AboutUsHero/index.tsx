"use client";

import React from "react";
import style from "./style.module.scss";

const AboutUsHero = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.aboutUsSection}>
        <h1 className={style.aboutUsTitle}>
          Outstanding individually.{" "}
          <span className={style.highlight}>Unstoppable together.</span>
        </h1>
        <img
          src="/assets/svg/AboutUs/about-us-together.svg"
          alt="about us"
          className={style.aboutUsImage}
        />
      </div>
    </div>
  );
};

export default AboutUsHero;
