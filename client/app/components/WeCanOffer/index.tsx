"use client";

import React from "react";
import style from "./style.module.scss";
import {CONTENT, TITLE_AGILE, TITLE_PER_PROJECT, CONTENT_AGILE, CONTENT_PER_PRJECT} from "@constants/weCanOffer";

const WeCanOffer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.title}>What <span className={style.highlight}>we can offer</span> you</div>
                <div className={style.content}>{CONTENT}</div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.cardTitle}>{TITLE_PER_PROJECT}</div>
                        <div className={style.cardContent}>{CONTENT_PER_PRJECT}</div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTitle}>{TITLE_AGILE}</div>
                        <div className={style.cardContent}>{CONTENT_AGILE}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeCanOffer;