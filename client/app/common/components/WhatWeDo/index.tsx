"use client";

import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const WhatWeDo = () => {
  const { t } = useTranslation();
  return (
    <section className={style.container}>
      <div className={style.title}>{t("whatWeDo.title")}</div>
      <div className={style.whatWeDo}>
        <div className={style.leftSide}>
          <div className={style.description}>{t("whatWeDo.description")}</div>
          <Link href="/contact-us" className={style.letsTalk}>
            {t("whatWeDo.button")}
          </Link>
        </div>
        <div className={style.rightSide}>
          <div className={style.square1}>
            <Image
              src="/assets/svg/MainPage/innovative-ideas.svg"
              alt="product development"
              className={style.smallImg}
              width={48}
              height={48}
            />
            <div className={style.smallTitle}>{t("whatWeDo.ideas")}</div>
          </div>
          <div className={style.square2}>
            <Image
              src="/assets/svg/MainPage/tailored-solutions.svg"
              alt="project development"
              className={style.smallImg}
              width={48}
              height={48}
            />
            <div className={style.smallTitle}>{t("whatWeDo.solutions")}</div>
          </div>
          <div className={style.square3}>
            <Image
              src="/assets/svg/MainPage/strategic-insights.svg"
              alt="seo"
              className={style.smallImg}
              width={48}
              height={48}
            />
            <div className={style.smallTitle}>{t("whatWeDo.insights")}</div>
          </div>
          <div className={style.square4}>
            <Image
              src="/assets/svg/MainPage/reliable-software.svg"
              alt="product development"
              className={style.smallImg}
              width={48}
              height={48}
            />
            <div className={style.smallTitle}>{t("whatWeDo.software")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
