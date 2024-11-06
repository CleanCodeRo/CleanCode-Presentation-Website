import { CardProps } from '@models/card';
import React from 'react';
import style from './style.module.scss';

const Card: React.FC<CardProps> = ({ name, description }) => {
    return (
        <div className={style.fullCard}>
            <div className={style.cardText}>
                <h3 className={style.cardName}>{name}</h3>
                <div className={style.cardDescription}>{description}</div>
            </div>
            <hr />
            <div className={style.arrow} />
        </div>
    );
}

export default Card;