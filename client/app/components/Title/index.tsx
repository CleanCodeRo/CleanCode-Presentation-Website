'use client'

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from "./style.module.scss";
import Link from 'next/link';

const Title = () => {
  const { t } = useTranslation();
  const changingWords = t('hero.changingWords', { returnObjects: true }) as string[];
  const secondChangingWords = t('hero.secondChangingWords', { returnObjects: true }) as string[];
  const [index, setIndex] = useState<number>(0);
  const [secondIndex, setSecondIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % changingWords.length);
      setSecondIndex((prev) => (prev + 1) % secondChangingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [changingWords.length, secondChangingWords.length]);

  return (
    <div className={style.boxTitle}>
      <h1 className={style.title}>
        {t('hero.staticTitleStart')} <span>
          {changingWords.map((word, wordIndex) => (
            <b
              className={`${style.changingTextFirst} ${index === wordIndex ? style.isVisible : style.isHidden}`}
              key={wordIndex}
            >
              {word}
            </b>
          ))}
        </span>
        <br />
        {t('hero.staticTitleMiddle')}
        <br />
        {t('hero.staticTitleEnd')} <span>
          {secondChangingWords.map((word, wordIndex) => (
            <b
              className={`${style.changingTextSecond} ${secondIndex === wordIndex ? style.isVisible : style.isHidden}`}
              key={wordIndex}
            >
              {word}
            </b>
          ))}
        </span>
      </h1>
      <div className={style.subTitleMain}>{t('hero.subTitle')}</div>
      <Link href="/ContactUs" className={style.letsTalk}>
        {t('hero.button')}
      </Link>
      <img src="/assets/svg/MainPage/hero-section.svg" alt="about us" className={style.heroImage} />
    </div>
  );
};

export default Title;
