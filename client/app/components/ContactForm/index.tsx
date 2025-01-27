"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import style from "./style.module.scss";
import { PRIVACY_POLICY_WARNING } from "@constants/constants";

type FormFields =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "subject"
  | "budget"
  | "description";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    description: "",
    nda: false
  });

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  const renderInputLabel = (fieldName: FormFields, label: string) => {
    return formData[fieldName] ? (
      <label className={style.inputLabel}>{label}</label>
    ) : null;
  };

  return (
    <div className={style.contactContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.field}>
          <div className={style.formTitle}>Your name</div>
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
          <div className={style.formTitle}>Your company</div>
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
          <div className={style.formTitle}>Email address</div>
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
          <div className={style.formTitle}>Phone</div>
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
        <div className={style.field}>
          <div className={style.formTitle}>Subject</div>
          <div className={style.formGroup}>
            <input
              className={style.inputField}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.field}>
          <div className={style.formTitle}>Projected budget</div>
          <div className={style.formGroup}>
            <input
              className={style.inputField}
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.textareafield}>
          <div className={style.textareaTitle}>
            Describe your challenge / goal
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
        <div className={style.attachment}>
          <div className={style.attachmentSub}>
            <button type="button" className={style.recordButton}>
              <img
                src="assets/svg/record.svg"
                alt="Record Voice Message"
                className={style.icon}
              />
            </button>
            <div className={style.attachmentTitle}>Record voice message</div>
          </div>
          <div className={style.attachmentSub}>
            <div className={style.uploadContainer}>
              <button type="button" className={style.uploadButton}>
                <img
                  src="assets/svg/attach-file.svg"
                  alt="Attach File"
                  className={style.icon}
                />
              </button>
              <div className={style.attachmentTitle}>Attach file</div>
            </div>
          </div>
        </div>
        <div className={style.checkboxContainer}>
          <input
            type="checkbox"
            id="nda"
            name="nda"
            checked={formData.nda}
            onChange={(e) =>
              setFormData({ ...formData, nda: e.target.checked })
            }
            className={style.checkbox}
          />
          <label htmlFor="nda" className={style.checkboxLabel}>
            Secure data with NDA first
          </label>
        </div>
        <button type="submit" className={style.submitBtn}>
          SEND MESSAGE
        </button>
        <div className={style.privacyWarning}>{PRIVACY_POLICY_WARNING}</div>
      </form>
    </div>
  );
};

export default ContactForm;
