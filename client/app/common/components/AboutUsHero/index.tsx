"use client";

import style from "./style.module.scss";

const AboutUsHero = () => {
  return (
    <section className={style.heroContainer}>
      <div className={style.aboutUsSection}>
        <h1 className={style.aboutUsTitle}>
          Outstanding individually.{" "}
          <span className={style.highlight}>Unstoppable together.</span>
        </h1>
        <img
          src="/assets/svg/AboutUs/about-us-together.svg"
          alt="Team collaboration illustration"
          className={style.aboutUsImage}
        />
      </div>
    </section>
  );
};

export default AboutUsHero;
