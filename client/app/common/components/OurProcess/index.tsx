"use client";

import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const OurProcess = () => {
  const { t } = useTranslation();

  const processData = t("ourProcess.steps", { returnObjects: true }) as {
    id: number;
    name: string;
    detail: string;
  }[];

  return (
    <section className={style.ourProcess}>
      <div className={style.ourProcessSubcontainer}>
        <h2 className={style.ourProcessTitle}>{t("ourProcess.title")}</h2>
        {processData.map((step) => (
          <article key={step.id} className={style.processCard}>
            <h3 className={style.cardTitle}>{step.name}</h3>
            <p className={style.cardDetail}>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
