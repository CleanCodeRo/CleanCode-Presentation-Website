"use client";

import Image from "next/image";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation");

  const services = t("services.list", { returnObjects: true }) as string[];

  return (
    <footer className={style.footerWrapper}>
      <div className={style.footerCenter}>
        <div className={style.footerCenterLeft}>
          <div className={style.footerCenterLeftTitle}>
            {t("contact.title")}
          </div>
          <div className={style.footerCenterLeftContent}>
            <div className={style.iconWithText}>
              <Image
                src="/assets/svg/Footer/location.svg"
                alt="Location Icon"
                className={style.icon}
                width={24}
                height={24}
              />
              <a
                href="https://www.google.com/maps?q=103-105+Calea+Victoriei,+District+1,+Bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                {t("contact.address")}
              </a>
            </div>
            <div className={style.iconWithText}>
              <Image
                src="/assets/svg/Footer/mail.svg"
                alt="Mail Icon"
                className={style.icon}
                width={24}
                height={24}
              />
              <a href={`mailto:${t("contact.mail")}`} className={style.link}>
                {t("contact.mail")}
              </a>
            </div>
            <div className={style.iconWithText}>
              <Image
                src="/assets/svg/Footer/phone.svg"
                alt="Phone Icon"
                className={style.icon}
                width={24}
                height={24}
              />
              <a href={`tel:${t("contact.phone")}`} className={style.link}>
                {t("contact.phone")}
              </a>
            </div>
          </div>
        </div>
        <div className={style.footerCenterRight}>
          <div className={style.footerCenterRightTitle}>
            {t("services.subtitle")}
          </div>
          <ul className={style.servicesList}>
            {Array.isArray(services) &&
              services.map((service, index) => <li key={index}>{service}</li>)}
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
                <Image
                  src="/assets/svg/Footer/facebook.svg"
                  alt="Facebook Icon"
                  className={style.icon}
                  width={24}
                  height={24}
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
                <Image
                  src="/assets/svg/Footer/linkedIn.svg"
                  alt="LinkedIn Icon"
                  className={style.icon}
                  width={24}
                  height={24}
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
                <Image
                  src="/assets/svg/Footer/instagram.svg"
                  alt="Instagram Icon"
                  className={style.icon}
                  width={24}
                  height={24}
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
                <Image
                  src="/assets/svg/Footer/x.svg"
                  alt="X Icon"
                  className={style.icon}
                  width={24}
                  height={24}
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
                <Image
                  src="/assets/svg/Footer/tik-tok.svg"
                  alt="TikTok Icon"
                  className={style.icon}
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
