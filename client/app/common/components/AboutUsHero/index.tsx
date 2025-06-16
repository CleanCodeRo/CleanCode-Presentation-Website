"use client";

import { useTranslation } from "react-i18next";
import style from "./style.module.scss";

const AboutUsHero = () => {
  const { t } = useTranslation();

  return (
    <section className={style.heroContainer}>
      <div className={style.aboutUsSection}>
        <h1 className={style.aboutUsTitle}>
          {t('aboutUsHero.titlePart1')}{" "}
          <span className={style.highlight}>
            {t('aboutUsHero.titlePart2')}
          </span>
        </h1>
        <img
          src="/assets/svg/AboutUs/about-us-together.svg"
          alt={t('aboutUsHero.imageAlt')}
          className={style.aboutUsImage}
        />
      </div>
    </section>
  );
};

export default AboutUsHero;
