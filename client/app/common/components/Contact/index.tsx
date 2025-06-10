"use client";

import React from "react";
import ContactForm from "../ContactForm";
import WhatNext from "../WhatNext";
import style from "./style.module.scss";
import { CONTACT_DESCRIPTION, FORM_CONTENT, FORM_TITLE, CONTACT_TITLE } from "@constants/form";

const Contact = () => {

  const [beforeHighlight, highlight] = CONTACT_TITLE.split("work together");

  return (
    <section className={style.contactComponent}>
      <div className={style.TitleAndDescription}>
      <div className={style.contactTitle}>
        {beforeHighlight}
        <span className={style.highlight}>work together</span>
      </div>
        <div className={style.contactDescription}>{CONTACT_DESCRIPTION}</div>
      </div>
      <div className={style.contactSubComponent}>
        <div className={style.formTitle}>{FORM_TITLE}</div>
        <div className={style.formContent}>{FORM_CONTENT}</div>
        <div className={style.contactForm}>
          <ContactForm />
          <WhatNext />
        </div>
      </div>
    </section>
  );
};
export default Contact;
