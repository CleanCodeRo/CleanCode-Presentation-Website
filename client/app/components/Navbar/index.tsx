"use client";

import React, { useEffect, useRef, useState } from 'react';
import style from "./style.module.scss";
import Dropdown from '@components/Dropdown';
import Logo from '@components/Logo';
import { DropdownData } from '@models/dropdown';
import { INDUSTRY_JSON_PATH, NAVBAR_DEFAULT_HEIGHT, SERVICES_JSON_PATH } from '@constants/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<DropdownData[]>([]);
    const [navHeight, setNavHeight] = useState<string>(NAVBAR_DEFAULT_HEIGHT);

    const navRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const pathname = usePathname();

    const fetchData = async (path: string) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data: DropdownData[] = await response.json();
            setActiveDropdown(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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

    useEffect(() => {
        if (dropdownRef.current && navRef.current) {
            if (activeDropdown) {
                const dropdownHeight = dropdownRef.current.offsetHeight;
                setNavHeight(`${parseInt(NAVBAR_DEFAULT_HEIGHT) + dropdownHeight}px`);
            } else {
                setNavHeight(NAVBAR_DEFAULT_HEIGHT);
            }
        }
    }, [activeDropdown]);

    return (
        <nav ref={navRef} className={`${style.nav}`} style={{ height: navHeight }}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <Link href="/" className={pathname === '/' ? style.active : ''}>
                        <Logo />
                    </Link>
                </li>
                <li className={style.navDrops}>
                    <li className={style.dropItem}>
                        <Link href="/Services" className={`${style.navLink} ${pathname === '/Services' ? style.active : ''}`}
                            onMouseEnter={() => handleMouseEnter(SERVICES_JSON_PATH)}
                            onMouseLeave={handleMouseLeave}>
                            SERVICES
                        </Link>
                    </li>
                    <li className={style.dropItem}>
                        <Link href="/Industries" className={`${style.navLink} ${pathname === '/industries' ? style.active : ''}`}
                            onMouseEnter={() => handleMouseEnter(INDUSTRY_JSON_PATH)}
                            onMouseLeave={handleMouseLeave}>
                            INDUSTRIES
                        </Link>
                    </li>
                    <li className={style.dropItem}>
                        <Link href="/AboutUs" className={`${style.navLink} ${pathname === '/AboutUs' ? style.active : ''}`}
                            onMouseLeave={handleMouseLeave}>
                            ABOUT US
                        </Link>
                    </li>
                </li>
                <li className={`${style.navItem}`}>
                    <Link href="/ContactUs" className={`${style.button} ${style.buttonLink} ${pathname === '/ContactUs' ? style.activeBtn : ''}`}>
                        CONTACT US
                    </Link>
                </li>
            </ul>

            {activeDropdown.length > 0 && (
                <div ref={dropdownRef}
                    className={style.dropdownContainer}
                    onMouseEnter={() => hoverTimeoutRef.current && clearTimeout(hoverTimeoutRef.current)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Dropdown category={activeDropdown} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
