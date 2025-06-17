"use client";

import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const DeveloperTeam = () => {

  const { t } = useTranslation();

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>{t('dedicated.title')}</div>
        <div className={style.content}>{t('dedicated.content')}</div>
          <Link href="/contact-us" className={style.button}>
          {t('dedicated.button')}
          </Link>
      </div>
    </section>
  );
};

export default DeveloperTeam;
