'use client';

import React from 'react';
import style from './style.module.scss';
import { MissionStep } from '@models/card';

interface MissionVisionProps {
  missionData: MissionStep[];
}

const MissionVision = ({ missionData }: MissionVisionProps) => {
  return (
    <section className={style.missionVision}>
      <div className={style.missionVisionSubcontainer}>
        <div className={style.missionVisionElements}>
          {missionData.map((step) => (
            <article key={step.id} className={style.missionVisionCard}>
              <div className={style.missionVisionIcon}>
                <img
                  src={`/assets/svg/AboutUs/${step.name.toLowerCase()}.svg`}
                  alt={`${step.name} Icon`}
                  className={style.missionIcon}
                />
              </div>
              <h3 className={style.missionVisionSubTitle}>{step.name}</h3>
              <div className={style.missionVisionDescription}>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;