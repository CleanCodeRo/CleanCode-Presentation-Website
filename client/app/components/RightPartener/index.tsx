'use client';

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import CardRightPartener from "@components/CardRightPartener";
import { CardProps } from "@models/card";

const RightPartener = () => {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch('/assets/json/rightPartener.json')
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error loading JSON:", error));
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.RightPartener}>
                <div className={style.title}>Why we're the right partner</div>
                <div className={style.gridContainer}>
                    {cards.length > 0 ? (
                        <div className={style.cardContainer}>
                            {cards.map((card, index) => (
                                <CardRightPartener key={index} {...card} />
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RightPartener;
