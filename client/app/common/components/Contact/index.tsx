"use client";

import ContactForm from "@components/ContactForm";
import WhatNext from "@components/WhatNext";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactTitle = t("contactUs.title");
  const [beforeHighlight, highlight] = contactTitle.split(t("contactUs.highlightedWord"));

  return (
    <section className={style.contactComponent}>
      <div className={style.TitleAndDescription}>
      <div className={style.contactTitle}>
        {beforeHighlight}
        <span className={style.highlight}>{t("contactUs.highlightedWord")}</span>
      </div>
        <div className={style.contactDescription}>{t("contactUs.description")}</div>
      </div>
      <div className={style.contactSubComponent}>
        <div className={style.formTitle}>{t("contactUs.formTitle")}</div>
        <div className={style.formContent}>{t("contactUs.formContent")}</div>
        <div className={style.contactForm}>
          <ContactForm />
          <WhatNext />
        </div>
      </div>
    </section>
  );
};
export default Contact;
