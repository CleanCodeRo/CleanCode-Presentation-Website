"use client";

import { useEffect, useState } from "react";
import style from './style.module.scss';
import { CardProps } from "@models/card";

interface CardsGridProps {
  title: string;
  highlightedWord: string;
  subtitle?: string;
  jsonPath: string;
  containerClass?: string;
  CardComponent: React.ComponentType<CardProps>;
}

const CardsGrid: React.FC<CardsGridProps> = ({
  title,
  highlightedWord,
  subtitle,
  jsonPath,
  containerClass = '',
  CardComponent
}) => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(jsonPath)
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, [jsonPath]);

  const [before, after] = title.split(highlightedWord);

  return (
    <section className={`${style.container} ${style[containerClass]}`}>
      <div className={style.subContainer}>
      <h2 className={style.title}>
        {before}
        <span className={style.highlight}>{highlightedWord}</span>
        {after}
      </h2>
      {subtitle && <div className={style.subTitle}>{subtitle}</div>}
      <div className={style.gridContainer}>
        {cards.length > 0 ? (
          <div className={style.cardContainer}>
            {cards.map((card, index) => (
              <CardComponent key={index} {...card} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </div>
    </section>
  );
};

export default CardsGrid;
