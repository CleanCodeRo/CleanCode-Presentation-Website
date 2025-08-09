"use client";

import Image from "next/image";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const MissionVision = () => {
  const { t } = useTranslation();

  const missionData = t("mission.steps", { returnObjects: true }) as {
    id: number;
    name: string;
    detail: string;
    imagePath: string;
  }[];

  return (
    <section className={style.missionVision}>
      <div className={style.missionVisionSubcontainer}>
        <div className={style.missionVisionElements}>
          {missionData.map((step) => (
            <article key={step.id} className={style.missionVisionCard}>
              <div className={style.missionVisionIcon}>
                <Image
                  src={step.imagePath}
                  alt={`${step.name} Icon`}
                  className={style.missionIcon}
                  width={80}
                  height={80}
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
