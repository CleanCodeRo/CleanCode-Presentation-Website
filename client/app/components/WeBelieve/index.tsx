'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

interface Belief {
    id: number;
    name: string;
    description: string;
}

const WeBelieve: React.FC = () => {
    const [beliefs, setBeliefs] = useState<Belief[]>([]);
    const [selectedBelief, setSelectedBelief] = useState<Belief | null>(null);

    useEffect(() => {
        const fetchBeliefs = async () => {
            const response = await fetch('/assets/json/believe.json');
            const data: Belief[] = await response.json();
            setBeliefs(data);
            setSelectedBelief(data[0]);
        };
        fetchBeliefs();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>What we believe in</h2>
                <div className={styles.tabs}>
                    {beliefs.map((belief) => (
                        <button 
                            key={belief.id} 
                            className={`${styles.tab} ${selectedBelief?.id === belief.id ? styles.active : ''}`}
                            onClick={() => setSelectedBelief(belief)}
                        >
                            {belief.name}
                        </button>
                    ))}
                </div>

                {selectedBelief && (
                    <div className={styles.content}>
                        <Image 
                            className={styles.icon}
                            src={`/assets/svg/${selectedBelief.name}.svg`} 
                            alt={selectedBelief.name} 
                            width={50} 
                            height={50} 
                        />
                        <p className={styles.description}>{selectedBelief.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeBelieve;
