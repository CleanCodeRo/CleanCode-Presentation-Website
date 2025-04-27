'use client'

import React from 'react';
import style from './style.module.scss';
import { useTranslation } from 'react-i18next';

const OurProcess = () => {

  const { t } = useTranslation();

  const processData = t('ourProcess.steps', { returnObjects: true }) as { id: number, name: string, detail: string }[];
  const title = t('ourProcess.title');

  return (
    <section className={style.ourProcess}>
      <div className={style.ourProcessSubcontainer}>
        <h2 className={style.ourProcessTitle}>{title}</h2>
        <div className={style.ourProcessElements}>
          {processData.map((step) => (
            <article key={step.id} className={style.processCard}>
              <div className={style.cardSubcontainer}>
                <h3 
                  className={style.cardTitle}
                >
                  {step.name}
                </h3>
                <p className={style.cardDetail}>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;