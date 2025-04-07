"use client";

import React from "react";
import style from "./style.module.scss";
import { ADDRESS, MAIL, PHONE, TITLE, SUB_TITLE, SERVICES } from "@constants/contact";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerCenter}>
        <div className={style.footerCenterLeft}>
          <div className={style.footerCenterLeftTitle}>
            {TITLE}
          </div>
          <div className={style.footerCenterLeftContent}>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/location.svg"
                alt="Location Icon"
                className={style.icon}
              />
              <a
                href="https://www.google.com/maps?q=103-105+Calea+Victoriei,+District+1,+Bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                {ADDRESS}
              </a>
            </div>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/mail.svg"
                alt="Mail Icon"
                className={style.icon}
              />
              <a href={`mailto:${MAIL}`} className={style.link}>
                {MAIL}
              </a>
            </div>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/phone.svg"
                alt="Phone Icon"
                className={style.icon}
              />
              <a href={`tel:${PHONE}`} className={style.link}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
        <div className={style.footerCenterRight}>
          <div className={style.footerCenterRightTitle}>{SUB_TITLE}</div>
          <ul className={style.servicesList}>
            {SERVICES.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.bottomContent}>
          <div className={style.copyright}>
            &copy; {new Date().getFullYear()} CleanCode Solutions
          </div>
          <div className={style.mediaLinks}>
            <div className={style.iconWithText}>
              <a
                href="https://www.facebook.com/cleancodero"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/facebook.svg"
                  alt="Facebook Icon"
                  className={style.icon}
                />
              </a>
            </div>
            <div className={style.iconWithText}>
              <a
                href="https://www.linkedin.com/company/cleancodero/about/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/linkedIn.svg"
                  alt="LinkedIn Icon"
                  className={style.icon}
                />
              </a>
            </div>
            <div className={style.iconWithText}>
              <a
                href="https://www.instagram.com/cleancode.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/instagram.svg"
                  alt="Instagram Icon"
                  className={style.icon}
                />
              </a>
            </div>
            <div className={style.iconWithText}>
              <a
                href="https://x.com/cleancodero"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/x.svg"
                  alt="X Icon"
                  className={style.icon}
                />
              </a>
            </div>
            <div className={style.iconWithText}>
              <a
                href="https://www.tiktok.com/@cleancode.ro"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <img
                  src="/assets/svg/Footer/tik-tok.svg"
                  alt="TikTok Icon"
                  className={style.icon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
