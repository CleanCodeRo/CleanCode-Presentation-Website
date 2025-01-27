import { CardProps } from '@models/card';
import React from 'react';
import style from './style.module.scss';
import { RIGHT_PARTNER_SVG_BASE_PATH } from '@constants/constants';


const Card: React.FC<CardProps> = ({ name, description}) => {
    const normalizeNameForSvg = (name: string) => {
        return name
            .toLowerCase()                        // Convert to lowercase to match the case of the SVG filenames
            .replace(/\s+/g, '_')                 // Replace spaces with underscores
            .replace(/&/g, 'and')                 // Replace ampersands with "and"
            .replace(/[^\w\-]/g, '')              // Remove any special characters (except for _ and -)
            .concat(".svg");                      // Add the .svg extension
    };

    const svgFileName = normalizeNameForSvg(name);
    const svgPath = `${RIGHT_PARTNER_SVG_BASE_PATH}${svgFileName}`;

    return (
        <div className={style.card}>
            <img src={svgPath} alt={`${name} icon`} className={style.cardIcon} />
            <h3 className={style.cardTitle}>{name}</h3>
            <p className={style.cardDescription}>{description}</p>
        </div>
    );
};


export default Card;