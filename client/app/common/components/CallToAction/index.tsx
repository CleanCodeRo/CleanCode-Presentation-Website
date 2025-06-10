'use client';

import React from 'react';
import style from './style.module.scss';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  content: string;
  buttonText: string;
  buttonLink: string; // Optional prop for the button link
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, content, buttonText, buttonLink }) => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.fullTitle}>
        <div className={style.title}>{title}</div>
        {subtitle && <div className={style.subTitle}>{subtitle}</div>}
        </div>
        <div className={style.content}>{content}</div>
        <button className={style.button} onClick={() => window.location.href = `${buttonLink}`}>{buttonText}</button>
      </div>
    </section>
  );
};

export default CallToAction;
