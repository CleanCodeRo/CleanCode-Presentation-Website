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
    <div className={style.ourProcess}>
      <div className={style.ourProcessSubcontainer}>
        <div className={style.ourProcessTitle}>Our Process in a nutshell</div>
        <div className={style.ourProcessElements}>
          {processData.map((step) => (
            <div key={step.id} className={style.processCard}>
              <div className={style.cardSubcontainer}>
                <div className={style.cardTitle}>{step.name}</div>
                <div className={style.cardDetail}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
