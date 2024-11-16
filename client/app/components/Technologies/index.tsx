'use client';

import React from 'react';
import style from './style.module.scss';
import { TECHNOLOGIES, TECHLOGIES_PATH, TECHLOGIES_FILE_EXTENSION} from '@constants/technologies';


const Technologies = () => {
    return (
        <div className={style.technologiesBar}>
            <h2 className={style.technologiesTitle}>Technologies</h2>
            <div className={style.logos}>
                {TECHNOLOGIES.map((tech, index) => (
                    <img
                        key={index}
                        src={`${TECHLOGIES_PATH}${tech}${TECHLOGIES_FILE_EXTENSION}`}
                        alt={`${tech} Logo`}
                        className={style.logo}
                    />
                ))}
                {TECHNOLOGIES.map((tech, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={`${TECHLOGIES_PATH}${tech}${TECHLOGIES_FILE_EXTENSION}`}
                        alt={`${tech} Logo`}
                        className={style.logo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Technologies;
