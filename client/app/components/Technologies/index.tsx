'use client';

import React from 'react';
import style from './style.module.scss';

const technologies = [
    'android',
    'angular',
    'aws',
    'azure',
    'c-sharp',
    'css',
    'google-cloud',
    'html',
    'ios',
    'java',
    'javascript',
    'kotlin',
    'mongoDB',
    'mySQL',
    'node-js',
    'oracle',
    'postgreSQL',
    'python',
    'react-native',
    'react',
    'typescript',
];

const Technologies = () => {
    return (
        <div className={style.technologiesBar}>
            <h2 className={style.technologiesTitle}>Technologies</h2>
            <div className={style.logos}>
                {technologies.map((tech, index) => (
                    <img
                        key={index}
                        src={`/assets/tech-logos/${tech}.svg`}
                        alt={`${tech} Logo`}
                        className={style.logo}
                    />
                ))}
                {technologies.map((tech, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={`/assets/tech-logos/${tech}.svg`}
                        alt={`${tech} Logo`}
                        className={style.logo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Technologies;
