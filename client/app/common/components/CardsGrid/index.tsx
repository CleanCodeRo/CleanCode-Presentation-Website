"use client";

import style from "./style.module.scss";
import { CardGridData } from "@models/card";
import Card from "@components/Card";
import { useTranslation } from "react-i18next";

interface CardsGridProps {
  cardData: CardGridData[];
  containerClass?: string;
  translationKey: string;
}

const CardsGrid: React.FC<CardsGridProps> = ({
  translationKey,
  cardData,
  containerClass = "",
}) => {
  const { t, i18n } = useTranslation();

  const [before, after] = t(`${translationKey}.title`).split(
    t(`${translationKey}.highlightedWord`)
  );

  return (
    <section className={`${style.container} ${style[containerClass]}`}>
      <div className={style.subContainer}>
        <h2 className={style.title}>
          {before}
          <span className={style.highlight}>
            {t(`${translationKey}.highlightedWord`)}
          </span>
          {after}
        </h2>
        {i18n.exists(`${translationKey}.subtitle`) && (
          <div className={style.subTitle}>
            {t(`${translationKey}.subtitle`)}
          </div>
        )}
        <div className={style.gridContainer}>
          <div className={style.cardContainer}>
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsGrid;
