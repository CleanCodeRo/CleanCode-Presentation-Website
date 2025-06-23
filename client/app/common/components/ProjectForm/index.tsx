"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import style from "./style.module.scss";
import emailjs from "emailjs-com";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_API_KEY } from "@constants/emailjs";
import { useTranslation } from "react-i18next";

const ProjectForm = () => {

  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
    nda: false
  });

  const formRef = useRef<HTMLFormElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextareaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;

    if (textarea) {
      const newHeight = Math.min(textarea.scrollHeight, 100);
      textarea.style.height = `${newHeight}px`;

      textarea.style.overflowY =
        textarea.scrollHeight > 100 ? "auto" : "hidden";
    }

    handleChange(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    if (formRef.current) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_API_KEY
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              subject: "",
              description: "",
              nda: false
            });
          },
          (error) => {
            alert("An error occurred, please try again.");
          }
        ).finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={style.contactContainer}>
      <form ref={formRef} onSubmit={handleSubmit} className={style.form}>
        <div className={style.field}>
          <div className={style.formTitle}>{t("form.name")}</div>
          <div className={style.formGroup}>
            <input
              className={style.inputField}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.field}>
          <div className={style.formTitle}>{t("form.projectName")}</div>
          <div className={style.formGroup}>
            <input
              className={style.inputField}
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.field}>
          <div className={style.formTitle}>{t("form.email")}</div>
          <div className={style.formGroup}>
            <input
              className={style.inputField}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.field}>
          <div className={style.formTitle}>{t("form.phone")}</div>
          <div className={style.formGroup}>
            <input
              className={style.inputField}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.textareafield}>
          <div className={style.textareaTitle}>
          {t("form.describe")}
          </div>
          <div className={style.formGroup + " " + style.fullWidth}>
            <textarea
              className={style.dynamicTextarea}
              name="description"
              id="description"
              value={formData.description}
              onChange={handleTextareaInput}
              ref={textareaRef}
              required
            />
          </div>
        </div>
        <button type="submit" className={style.submitBtn}>
        {t("form.send")}
        </button>
        <div className={style.privacyWarning}>{t("form.privacy")}</div>
      </form>
      {loading && <div className={style.loadingOverlay}>Sending message...</div>}
    </div>
  );
};

export default ProjectForm;
