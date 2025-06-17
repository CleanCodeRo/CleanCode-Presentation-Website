'use client';

import style from './style.module.scss';
import Link from 'next/link';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  content: string;
  buttonText: string;
  buttonLink: string;
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
        <Link href={buttonLink} className={style.button}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
