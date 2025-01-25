import { CardProps } from '@models/card';
import React from 'react';
import style from './style.module.scss';

const CardRightPartener: React.FC<CardProps> = ({ name, description }) => {
    
    const svgFileName = name.replace(/\s+/g, '_').replace(/&/g, 'and') + ".svg";
    const svgPath = `/assets/svg/RightPartener/${svgFileName}`;

    return (
        <div className={style.card}>
            <img src={svgPath} alt={`${name} icon`} className={style.cardIcon} />
            <h3 className={style.cardTitle}>{name}</h3>
            <p className={style.cardDescription}>{description}</p>
        </div>
    );
}

export default CardRightPartener;
