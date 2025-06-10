"use client";

import React, { useEffect, useRef, useState } from 'react';
import style from "./style.module.scss";
import Dropdown from '../Dropdown';
import Logo from '../Logo';
import { DropdownData } from '@models/dropdown';
import { INDUSTRY_JSON_PATH, NAVBAR_DEFAULT_HEIGHT, SERVICES_JSON_PATH } from '@constants/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<DropdownData[]>([]);
    const [navHeight, setNavHeight] = useState<string>(NAVBAR_DEFAULT_HEIGHT);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const navRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const pathname = usePathname();

    // const fetchData = async (path: string) => {
    //     try {
    //         const response = await fetch(path);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data: DropdownData[] = await response.json();
    //         setActiveDropdown(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const handleMouseEnter = (path: string) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        //fetchData(path);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setNavHeight(NAVBAR_DEFAULT_HEIGHT);
            setActiveDropdown([]);
        }, 100);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setActiveDropdown([]);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (dropdownRef.current && navRef.current) {
            if (activeDropdown.length > 0) {
                const dropdownHeight = dropdownRef.current.offsetHeight;
                setNavHeight(`${parseInt(NAVBAR_DEFAULT_HEIGHT) + dropdownHeight}px`);
            } else {
                setNavHeight(NAVBAR_DEFAULT_HEIGHT);
            }
        }
    }, [activeDropdown]);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav ref={navRef} className={`${style.nav}`} style={{ height: navHeight }}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <Link href="/client/public" className={pathname === '/' ? style.active : ''}>
                        <img
                            src="/assets/svg/logo-clean-code-it-vf.svg"
                            alt="Clean Code IT Logo"
                            className={style.logo}
                        />
                    </Link>
                </li>

                <button
                    className={style.mobileMenuButton}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`${style.navDrops} ${mobileMenuOpen ? style.mobileOpen : ''}`}>
                    <li className={style.dropItem}>
                        <Link
                            href="/services"
                            className={`${style.navLink} ${pathname === '/services' ? style.active : ''}`}
                            // onMouseEnter={() => !mobileMenuOpen && handleMouseEnter(SERVICES_JSON_PATH)}
                            // onMouseLeave={() => !mobileMenuOpen && handleMouseLeave}
                            onClick={() => mobileMenuOpen && handleMouseEnter(SERVICES_JSON_PATH)}
                        >
                            SERVICES
                        </Link>
                    </li>
                    {/* <li className={style.dropItem}>
                        <Link
                            href="/"
                            className={`${style.navLink} ${pathname === '/industries' ? style.active : ''}`}
                            // onMouseEnter={() => !mobileMenuOpen && handleMouseEnter(INDUSTRY_JSON_PATH)}
                            // onMouseLeave={() => !mobileMenuOpen && handleMouseLeave}
                            onClick={() => mobileMenuOpen && handleMouseEnter(INDUSTRY_JSON_PATH)}
                        >
                            INDUSTRIES
                        </Link>
                    </li> */}
                    <li className={style.dropItem}>
                        <Link
                            href="/about-us"
                            className={`${style.navLink} ${pathname === '/about-us' ? style.active : ''}`}
                            onMouseLeave={() => !mobileMenuOpen && handleMouseLeave}
                        >
                            ABOUT US
                        </Link>
                    </li>
{mobileMenuOpen&&                    <li className={`${style.dropItem} ${style.mobileContactItem}`}>
                        <Link
                            href="/contact-us"
                            className={`${style.navLink} ${style.mobileContactLink} ${pathname === '/contact-us' ? style.active : ''}`}
                        >
                            CONTACT US
                        </Link>
                    </li>}
                </ul>

                <li className={`${style.navItem} ${style.desktopContactItem}`}>
                    <Link
                        href="/contact-us"
                        className={`${style.buttonLink} ${pathname === '/contact-us' ? style.activeBtn : ''}`}
                    >
                        CONTACT US
                    </Link>
                </li>
            </ul>

            {activeDropdown.length > 0 && (
                <div
                    ref={dropdownRef}
                    className={style.dropdownContainer}
                    onMouseEnter={() => !mobileMenuOpen && hoverTimeoutRef.current && clearTimeout(hoverTimeoutRef.current)}
                    onMouseLeave={() => !mobileMenuOpen && handleMouseLeave()}
                >
                    <Dropdown category={activeDropdown} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
