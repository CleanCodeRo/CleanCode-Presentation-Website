'use client';

import React from 'react';
import style from './style.module.scss';

interface MissionStep {
  id: number;
  name: string;
  detail: string | string[];
}

interface MissionVisionProps {
  missionData: MissionStep[];
}

const MissionVision = ({ missionData }: MissionVisionProps) => {
  return (
    <div className={style.missionVision}>
      <div className={style.missionVisionSubcontainer}>
        <div className={style.missionVisionTitle}>Mission and Vision</div>
        <div className={style.lineWithDotTwo}>
          <div className={style.lineTwo}></div>
          <div className={style.dotTwo}></div>
        </div>
        <div className={style.missionVisionElements}>
          {missionData.map((step) => (
            <div key={step.id} className={style.missionVisionCard}>
              <div className={style.missionVisionTitle}>{step.name}</div>
              <div className={style.missionVisionDescription}>
                {Array.isArray(step.detail) ? (
                  <ul>
                    {step.detail.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{step.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
