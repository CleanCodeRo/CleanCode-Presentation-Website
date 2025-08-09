"use client";

import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import Image from "next/image";

const AboutUsHero = () => {
  const { t } = useTranslation();

  return (
    <section className={style.heroContainer}>
      <div className={style.aboutUsSection}>
        <h1 className={style.aboutUsTitle}>
          {t("aboutUs.titlePart1")}
          <span className={style.highlight}>{t("aboutUs.titlePart2")}</span>
        </h1>
        <Image
          src="/assets/svg/AboutUs/about-us-together.svg"
          alt={t("aboutUs.imageAlt")}
          width={819}
          height={459}
        />
      </div>
    </section>
  );
};

export default AboutUsHero;
