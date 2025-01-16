"use client";

import React from "react";
import style from "./style.module.scss";
import { WHAT_WE_DO } from "@constants/constants";

const WhatWeDo = () => {
    return(
        <div className={style.container}>
            <div className={style.whatWeDo}>
                <div className={style.title}>What we do</div>
                <div className={style.leftSide}>
                    <div className={style.description}>{WHAT_WE_DO}</div>
                    <button className={style.letsTalk} onClick={() => window.location.href = "/ContactUs"}>
                        Let{'\''}s talk
                    </button>
                </div>
                <div className={style.rightSide}>
                    <div className={style.square1}>
                        <img src="/assets/svg/product-development.svg" alt="product development" className={style.smallImg} />
                        <div className={style.smallTitle}>Innovative ideas</div>
                    </div>
                    <div className={style.square2}>
                        <img src="/assets/svg/project-management.svg" alt="project development" className={style.smallImg} />
                        <div className={style.smallTitle}>Tailored Solutions</div>
                    </div>
                    <div className={style.square3}>
                        <img src="/assets/svg/seo.svg" alt="seo" className={style.smallImg} />
                        <div className={style.smallTitle}>Strategic Insights</div>
                    </div>
                    <div className={style.square4}>
                        <img src="/assets/svg/web-development.svg" alt="product development" className={style.smallImg} />
                        <div className={style.smallTitle}>Reliable Software</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;