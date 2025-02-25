"use client";

import React from "react";
import style from "./style.module.scss";
import { TITLE, CONTENT } from "../../constants/developerTeam";

const DeveloperTeam = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>{TITLE}</div>
        <div className={style.content}>{CONTENT}</div>
        <button className={style.button} onClick={() => window.location.href = "/ContactUs"}>
          START A CONVERSATION
        </button>
      </div>
    </div>
  );
};

export default DeveloperTeam;
