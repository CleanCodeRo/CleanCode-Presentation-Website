"use client";

import React from "react";
import ContactForm from "@components/ContactForm";
import WhatNext from "@components/WhatNext";
import style from "./style.module.scss";
import { CONTACT_DESCRIPTION, FORM_CONTENT, FORM_TITLE } from "@constants/constants";

const Contact = () => {
  return (
    <div className={style.contactComponent}>
      <div className={style.TitleAndDescription}>
        <div className={style.contactTitle}>Let&apos;s explore how we can <span className={style.highlight}>work together</span></div>
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
    </div>
  );
};
export default Contact;
