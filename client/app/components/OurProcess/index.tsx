'use client'

import React from 'react';
import style from './style.module.scss';

interface ProcessStep {
  id: number;
  name: string;
  detail: string;
}

interface OurProcessProps {
  processData: ProcessStep[];
}

const OurProcess = ({ processData }: OurProcessProps) => {
  return (
    <section className={style.ourProcess}>
      <div className={style.ourProcessSubcontainer}>
        <h2 className={style.ourProcessTitle}>Our Process in a nutshell</h2>
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