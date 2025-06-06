'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from './style.module.scss';

interface Belief {
  name: string;
  description: string;
}

const WeBelieve: React.FC = () => {
  const { t } = useTranslation();
  const beliefs = t('weBelieve.tabs', { returnObjects: true }) as Belief[];

  const [selectedBelief, setSelectedBelief] = useState<Belief | null>(null);

  useEffect(() => {
    if (beliefs.length > 0 && !selectedBelief) {
      setSelectedBelief(beliefs[0]);
    }
  }, [beliefs, selectedBelief]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('weBelieve.title')}</h2>
        <div className={styles.tabs}>
          {beliefs.map((belief, index) => (
            <button
              key={index}
              className={`${styles.tab} ${selectedBelief?.name === belief.name ? styles.active : ''}`}
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
              src={`/assets/svg/AboutUs/${selectedBelief.name}.svg`}
              alt={selectedBelief.name}
              width={50}
              height={50}
            />
            <p className={styles.description}>{selectedBelief.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeBelieve;
