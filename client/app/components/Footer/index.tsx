"use client";

import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerCenter}>
        <div className={style.footerCenterLeft}>
          <div className={style.footerCenterLeftTitle}>
            Say hello to our friendly team at
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
                103-105 Calea Victoriei, District 1, Bucharest
              </a>
            </div>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/mail.svg"
                alt="Mail Icon"
                className={style.icon}
              />
              <a href="mailto:contact@cleancode.ro" className={style.link}>
                contact@cleancode.ro
              </a>
            </div>
            <div className={style.iconWithText}>
              <img
                src="/assets/svg/Footer/phone.svg"
                alt="Phone Icon"
                className={style.icon}
              />
              <a href="tel:+40733311393" className={style.link}>
                +40 733 311 393
              </a>
            </div>
          </div>
        </div>
        <div className={style.footerCenterRight}>
          <div className={style.footerCenterRightTitle}>Core services</div>
          <ul className={style.servicesList}>
            <li>Software development</li>
            <li>Web & Email Hosting</li>
            <li>Web & mobile apps</li>
            <li>Digital transformation</li>
            <li>Application modernization</li>
          </ul>
        </div>
      </div>
      <div className={style.footerBottom}>
        \
        <div className={style.bottomContent}>
          <div className={style.copyright}>&copy; {new Date().getFullYear()}  CleanCode Solutions</div>
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
