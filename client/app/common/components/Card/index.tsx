"use client";

import { CardProps } from "@models/card";
import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ name, description }) => {
  const normalizeNameForSvg = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/&/g, "and")
      .replace(/[^\w\-]/g, "")
      .concat(".svg");
  };

  const svgFileName = normalizeNameForSvg(name);
  const svgPath = `/assets/svg/Card/${svgFileName}`;

  return (
    <div className={style.card}>
      <Image
        src={svgPath}
        alt={`${name} icon`}
        className={style.cardIcon}
        width={70}
        height={70}
      />
      <h3 className={style.cardTitle}>{name}</h3>
      <p className={style.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
