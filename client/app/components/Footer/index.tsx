'use client'

import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (
        <div className={style.footerWrapper}>
            <div className={style.footer}>
                <div className={style.footerTitle}>
                    <div className={style.footerTitleText}>Ready to get started?</div>
                    <button className={style.contactButton} onClick={() => window.location.href = "/ContactUs"}>
                        Contact Us
                    </button>
                </div>
                <div className={style.footerCenter}>
                    <div className={style.footerCenterLeft}>
                        <div className={style.footerCenterLeftTitle}>
                            Say hello to our friendly team at
                        </div>
                        <div className={style.footerCenterLeftContent}>
                            <div className={style.iconWithText}>
                                <img src="/assets/svg/location.svg" alt="Location Icon" className={style.icon} />
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
                                <img src="/assets/svg/mail.svg" alt="Mail Icon" className={style.icon} />
                                <a href="mailto:contact@cleancode.ro" className={style.link}>
                                    contact@cleancode.ro
                                </a>
                            </div>
                            <div className={style.iconWithText}>
                                <img src="/assets/svg/phone.svg" alt="Phone Icon" className={style.icon} />
                                <a href="tel:+40733311393" className={style.link}>
                                    +40733311393
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.footerCenterRight}>
                        <div className={style.footerCenterRightTitle}>Core Services</div>
                        <ul className={style.servicesList}>
                            <li>Custom Software Development</li>
                            <li>Web & Email Hosting</li>
                            <li>Web Application Development</li>
                            <li>Website Development</li>
                            <li>Mobile App Development</li>
                        </ul>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <div className={style.copyright}>© 2024 CleanCode Solutions</div>
                    <div className={style.mediaLinks}>
                        <div className={style.iconWithText}>
                            <a 
                                href="https://www.facebook.com/cleancodero" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={style.link}
                            >
                                <img src="/assets/svg/facebook.svg" alt="Facebook Icon" className={style.icon} />
                            </a>
                        </div>
                        <div className={style.iconWithText}>
                            <a 
                                href="https://www.instagram.com/cleancode.ro/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={style.link}
                            >
                                <img src="/assets/svg/instagram.svg" alt="Instagram Icon" className={style.icon} />
                            </a>
                        </div>
                        <div className={style.iconWithText}>
                            <a 
                                href="https://x.com/cleancodero" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={style.link}
                            >
                                <img src="/assets/svg/x.svg" alt="X Icon" className={style.icon} />
                            </a>
                        </div>
                        <div className={style.iconWithText}>
                            <a 
                                href="https://www.tiktok.com/@cleancode.ro" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={style.link}
                            >
                                <img src="/assets/svg/tik-tok.svg" alt="TikTok Icon" className={style.icon} />
                            </a>
                        </div>
                        <div className={style.iconWithText}>
                            <a 
                                href="https://www.linkedin.com/company/cleancodero/about/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={style.link}
                            >
                                <img src="/assets/svg/linkedIn.svg" alt="LinkedIn Icon" className={style.icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
