'use client';

import React from 'react';
import style from './style.module.scss';
import { MissionStep } from '@models/card';


interface MissionVisionProps {
  missionData: MissionStep[];
}

const MissionVision = ({ missionData }: MissionVisionProps) => {
  return (
    <div className={style.missionVision}>
      <div className={style.missionVisionSubcontainer}>
        <div className={style.missionVisionElements}>
          {missionData.map((step) => (
            <div key={step.id} className={style.missionVisionCard}>
              <div className={style.missionVisionIcon}>
                {step.name === 'Mission' ? (
                  <img
                    src="/assets/svg/AboutUs/mission.svg"
                    alt="Mission Icon"
                    className={style.missionIcon}
                  />
                ) : (
                  <img
                    src="/assets/svg/AboutUs/vision.svg"
                    alt="Vision Icon"
                    className={style.missionIcon}
                  />
                )}
              </div>
              <div className={style.missionVisionSubTitle}>{step.name}</div>
              <div className={style.missionVisionDescription}>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
