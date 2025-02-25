import { CardProps } from '@models/card';
import React from 'react';
import style from './style.module.scss';
import { CARD_SVG_BASE_PATH } from '@constants/constants';


const Card: React.FC<CardProps> = ({ name, description}) => {
    const normalizeNameForSvg = (name: string) => {
        return name
            .toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/&/g, 'and')
            .replace(/[^\w\-]/g, '')
            .concat(".svg");
    };

    const svgFileName = normalizeNameForSvg(name);
    const svgPath = `${CARD_SVG_BASE_PATH}${svgFileName}`;

    return (
        <div className={style.card}>
            <img src={svgPath} alt={`${name} icon`} className={style.cardIcon} />
            <h3 className={style.cardTitle}>{name}</h3>
            <p className={style.cardDescription}>{description}</p>
        </div>
    );
};


export default Card;