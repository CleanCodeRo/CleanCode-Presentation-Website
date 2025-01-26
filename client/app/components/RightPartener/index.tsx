'use client';

import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import CardRightPartener from '@components/CardRightPartener';
import { CardProps } from '@models/card';

interface RightPartenerProps {
    svgBasePath: string;
    title: string;
}

const RightPartener: React.FC<RightPartenerProps> = ({ svgBasePath, title }) => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data from: /assets/json/rightPartener.json');
    
                const response = await fetch('/assets/json/rightPartener.json');
                if (!response.ok) {
                    throw new Error(`Failed to load JSON: ${response.status} ${response.statusText}`);
                }
    
                const data = await response.json();
                console.log('Fetched data:', data);
    
                setCards(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching JSON:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    return (
        <div className={style.wrapper}>
            <div className={style.RightPartener}>
                <div className={style.title} dangerouslySetInnerHTML={{ __html: title }} />
                <div className={style.gridContainer}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : cards.length > 0 ? (
                        <div className={style.cardContainer}>
                            {cards.map((card, index) => (
                                <CardRightPartener key={index} {...card} svgBasePath={svgBasePath} />
                            ))}
                        </div>
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RightPartener;
