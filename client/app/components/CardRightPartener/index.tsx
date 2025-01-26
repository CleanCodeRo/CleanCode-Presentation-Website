import { CardProps } from '@models/card';
import React from 'react';
import style from './style.module.scss';

interface CardComponentProps extends CardProps {
    svgBasePath?: string;
}

const Card: React.FC<CardComponentProps> = ({ name, description, svgBasePath = "/assets/svg/RightPartener/" }) => {
    const normalizeNameForSvg = (name: string) => {
        return name
            .toLowerCase()                        // Convert to lowercase to match the case of the SVG filenames
            .replace(/\s+/g, '_')                 // Replace spaces with underscores
            .replace(/&/g, 'and')                 // Replace ampersands with "and"
            .replace(/[^\w\-]/g, '')              // Remove any special characters (except for _ and -)
            .concat(".svg");                      // Add the .svg extension
    };

    const svgFileName = normalizeNameForSvg(name);
    const svgPath = `${svgBasePath}${svgFileName}`;

    return (
        <div className={style.card}>
            <img src={svgPath} alt={`${name} icon`} className={style.cardIcon} />
            <h3 className={style.cardTitle}>{name}</h3>
            <p className={style.cardDescription}>{description}</p>
        </div>
    );
};


export default Card;