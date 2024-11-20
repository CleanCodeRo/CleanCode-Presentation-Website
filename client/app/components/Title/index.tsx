'use client'

import { useEffect, useState } from 'react';
import { TITLE_CHANGING_WORDS, TITLE_SECOND_CHANGING_WORDS, SUB_TITLE_MAIN } from '@constants/hero';
import style from "./style.module.scss";

const Title=()=> {

    const [index, setIndex] = useState<number>(0);
    const [secondIndex, setSecondIndex] = useState<number>(0);

    useEffect(() => {

        const interval = setInterval(() => {

            const nextIndex = (index + 1) % TITLE_CHANGING_WORDS.length;
            const nextSecondIndex = (secondIndex + 1) % TITLE_SECOND_CHANGING_WORDS.length;
            setSecondIndex(nextSecondIndex);
            setIndex(nextIndex);

        }, 3000);

        return () => {clearInterval(interval)}

    }, [index]);
    return (
        <div className={style.boxTitle}>
            <h1 className={style.title}>Leading global partner in <span>
                {TITLE_CHANGING_WORDS.map((word, wordIndex) => (
                        <b className={`${style.changingText} ${index===wordIndex?style.isVisible:style.isHidden}`} key={wordIndex}>{word}</b>
                    ))}
                </span>
                <br />
                empowering ambitious businesses, 
                <br />
                committed to delivering <span>
                {TITLE_SECOND_CHANGING_WORDS.map((word, wordIndex) => (
                        <b className={`${style.changingText} ${secondIndex===wordIndex?style.isVisible:style.isHidden}`} key={wordIndex}>{word}</b>
                    ))}
                </span>
            </h1>
            <div className={style.subTitleMain}>{SUB_TITLE_MAIN}</div>
            <button className={style.letsTalk} onClick={() => window.location.href = "/ContactUs"}>
                Let{'\''}s talk
            </button>
        </div>
    );
};

export default Title;