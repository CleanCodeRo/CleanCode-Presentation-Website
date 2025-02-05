'use client';

import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import CardRightPartner from '@components/Card';
import { CardProps } from '@models/card';

const RightPartner = () => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
    
                const response = await fetch('/assets/json/rightPartner.json');
                if (!response.ok) {
                    throw new Error(`Failed to load JSON: ${response.status} ${response.statusText}`);
                }
    
                const data = await response.json();
    
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
            <div className={style.RightPartner}>
                <div className={style.gridContainer}>
                <div className={style.title}>Why we&aposre the <span className={style.highlight}>right partener</span></div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : cards.length > 0 ? (
                        <div className={style.cardContainer}>
                            {cards.map((card, index) => (
                                <CardRightPartner key={index} {...card}/>
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

export default RightPartner;
