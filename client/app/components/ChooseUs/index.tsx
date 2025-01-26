"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import CardRightPartener from "@components/CardRightPartener";
import { CardProps } from "@models/card";

const ChooseUs = () => {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch('/assets/json/chooseUs.json')
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error loading JSON:", error));
    }, []);

    const svgBasePath = "/assets/svg/Services/"; 

    return (
        <div className={style.container}>
            <h2 className={style.title}>Why <span className={style.highlight}>choose us</span></h2>
            <div className={style.subTitle}>We are working to make cleanCode Solutions the best coding service</div>
            <div className={style.gridContainer}>
                {cards.length > 0 ? (
                    <div className={style.cardContainer}>
                        {cards.map((card, index) => (
                            <CardRightPartener key={index} {...card} svgBasePath={svgBasePath} />
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default ChooseUs;
