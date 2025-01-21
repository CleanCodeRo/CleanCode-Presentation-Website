"use client";

import React from "react";
import style from "./style.module.scss";
import { WHAT_WE_DO } from "@constants/constants";

const WhatWeDo = () => {
    return(
        <div className={style.container}>
                <div className={style.title}>What we do</div>
            <div className={style.whatWeDo}>
                <div className={style.leftSide}>
                    <div className={style.description}>{WHAT_WE_DO}</div>
                    <button className={style.letsTalk} onClick={() => window.location.href = "/ContactUs"}>
                        GET A QUOTE
                    </button>
                </div>
                <div className={style.rightSide}>
                    <div className={style.square1}>
                        <img src="/assets/png/innovative-ideas.png" alt="product development" className={style.smallImg} />
                        <div className={style.smallTitle}>Innovative ideas</div>
                    </div>
                    <div className={style.square2}>
                        <img src="/assets/png/tailored-solutions.png" alt="project development" className={style.smallImg} />
                        <div className={style.smallTitle}>Tailored Solutions</div>
                    </div>
                    <div className={style.square3}>
                        <img src="/assets/png/strategic-insights.png" alt="seo" className={style.smallImg} />
                        <div className={style.smallTitle}>Strategic Insights</div>
                    </div>
                    <div className={style.square4}>
                        <img src="/assets/png/reliable-software.png" alt="product development" className={style.smallImg} />
                        <div className={style.smallTitle}>Reliable Software</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;