'use client'

import React from "react";
import style from "./style.module.scss";
import { TITLE, CONTENT } from "@constants/quote";

const Quote = () => {
    return (
        // <div className={style.wrapper}>
        //     <div className={style.container}>
        //         <div className={style.title}>{TITLE}</div>
        //         <div className={style.content}>{CONTENT}</div>
        //         <button className={style.button} onClick={() => window.location.href = "/ContactUs"}>GET A QUOTE FOR YOUR PROJECT</button>
        //     </div>
        // </div>
        <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.title}>Let&apos;s explore the opportunity to collaborate on your upcoming project.</div>
            <div className={style.content}>We are committed to understanding your business vision. We&apos;ll listen closely to your ideas and then develop a detailed plan outlining the steps to bring your project to fruition.
            </div>
            <button className={style.button} onClick={() => window.location.href = "/ShareIdeas"}>SHARE YOUR IDEAS</button>
        </div>
    </div>
    )
}

export default Quote;