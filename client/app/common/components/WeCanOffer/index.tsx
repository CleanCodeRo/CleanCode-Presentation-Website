"use client";

import style from "./style.module.scss";
import {useTranslation} from "react-i18next";

const WeCanOffer = () => {
    const {t} = useTranslation();
    return (
        <section className={style.wrapper}>
            <div className={style.container}>
            <div className={style.title} dangerouslySetInnerHTML={{ __html: t('offer.title') }} />
                <div className={style.content}>{t('offer.content')}</div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.cardTitle}>{t('offer.titleProject')}</div>
                        <div className={style.cardContent}>{t('offer.contentProject')}</div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardTitle}>{t('offer.titleAgile')}</div>
                        <div className={style.cardContent}>{t('offer.contentAgile')}</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WeCanOffer;
