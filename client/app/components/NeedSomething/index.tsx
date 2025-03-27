"use client";

import React from "react";
import style from "./style.module.scss";
import { TITLE, SUBTITLE, CONTENT } from "@constants/needSomething";

const NeedSomething = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.title}>{TITLE}</div>
                <div className={style.subTitle}>{SUBTITLE}</div>
                <div className={style.content}>{CONTENT}</div>
                <button className={style.button} onClick={() => window.location.href = "/ContactUs"}>JUST CONTACT US</button>
            </div>
        </div>
    )
};

export default NeedSomething;