"use client";

import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { ABOUT_US_SECTION } from '@constants/aboutUs';
import AboutUsImage from '@components/AboutUsImage';

interface ProcessStep {
  id: number;
  name: string;
  detail: string;
}

interface MissionStep {
  id: number;
  name: string;
  detail: string | string[];
}

const AboutUs = () => {
  const [processData, setProcessData] = useState<ProcessStep[]>([]);
  const [missionData, setMissionData] = useState<MissionStep[]>([]);

  useEffect(() => {
    const fetchProcessData = async () => {
      const response = await fetch('/assets/json/process.json');
      const data = await response.json();
      setProcessData(data);
    };

    const fetchMissionData = async () => {
      const response = await fetch('/assets/json/mission.json');
      const data = await response.json();
      setMissionData(data);
    };

    fetchProcessData();
    fetchMissionData();
  }, []);

  const [firstPart, secondPart] = ABOUT_US_SECTION.split(
    "By offering personalised software and strategic insights,"
  );

  return (
    <>
      <Navbar />
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and values." />
      </Head>
      <div className={style.aboutUsContainer}>
        <div className={style.aboutUsSection}>
          <div className={style.aboutUsText}>
            <p>
              <strong>cleanCode Solutions</strong>
              {firstPart.replace("cleanCode Solutions", "")}
            </p>
            <p>
              By offering personalised software and strategic insights,
              {secondPart}
            </p>
          </div>
          <AboutUsImage/>
          {/* <img src="/assets/svg/process.svg" alt="about us" className={style.aboutUsImage} /> */}
        </div>
        <div className={style.ourProcess}>
          <div className={style.ourProcessSubcontainer}>
            <div className={style.ourProcessTitle}>Our Process</div>
            <div className={style.lineWithDot}>
              <div className={style.line}></div>
              <div className={style.dot}></div>
            </div>
            <div className={style.ourProcessElements}>
              {processData.map((step) => (
                <div key={step.id} className={style.processCard}>
                  <div className={style.cardTitle}>{step.name}</div>
                  <div className={style.cardDetail}>{step.detail}</div>
                </div>
              ))}
            </div>
          </div>  
        </div>

        <div className={style.missionVision}>
          <div className={style.missionVisionSubcontainer}>
            <div className={style.missionVisionTitle}>Mission and Vision</div>
            <div className={style.lineWithDotTwo}>
              <div className={style.lineTwo}></div>
              <div className={style.dotTwo}></div>
            </div>
            <div className={style.missionVisionElements}>
              {missionData.map((step) => (
                <div key={step.id} className={style.missionVisionCard}>
                  <div className={style.missionVisionTitle}>{step.name}</div>
                  <div className={style.missionVisionDescription}>
                    {Array.isArray(step.detail) ? (
                      <ul>
                        {step.detail.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{step.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
