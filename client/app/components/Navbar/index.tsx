"use client"

import React, { useEffect, useRef, useState } from 'react';

import style from "./style.module.scss"

import Dropdown from '@components/Dropdown';
import Logo from '@components/Logo';

import { DropdownData } from '@models/dropdown';

import { ABOUT_JSON_PATH, INDUSTRY_JSON_PATH, NAVBAR_DEFAULT_HEIGHT, SERVICES_JSON_PATH } from '@constants/constants';


const Navbar = () => {

    const [activeDropdown, setActiveDropdown] = useState<DropdownData[]>([]);
    const [navHeight, setNavHeight] = useState<string>(NAVBAR_DEFAULT_HEIGHT);

    const navRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

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

    const handleMouseLeave = () => {
        setNavHeight(NAVBAR_DEFAULT_HEIGHT);
        setActiveDropdown([]);
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
        <>
            <nav ref={navRef} className={`${style.nav}`} style={{ height: navHeight }} >
                <ul className={style.navList}>
                    <li className={style.navItem}><Logo /></li>
                    <li className={style.navItem}><a onMouseLeave={handleMouseLeave} onMouseEnter={() => fetchData(SERVICES_JSON_PATH)}
                    >Services</a></li>
                    <li className={style.navItem}><a onMouseLeave={handleMouseLeave} onMouseEnter={() => fetchData(INDUSTRY_JSON_PATH)}
                    >Industries</a></li>
                    <li className={style.navItem}><a onMouseLeave={handleMouseLeave} onMouseEnter={() => fetchData(ABOUT_JSON_PATH)}
                    >About Us</a></li>
                    <li className={`${style.navItem}`}>
                        <button className={style.button}>Contact us</button>
                    </li>
                </ul>

                {activeDropdown.length > 0 &&
                    <div ref={dropdownRef} className={style.dropdownContainer} onMouseLeave={handleMouseLeave}>
                        <Dropdown category={activeDropdown} />
                    </div>
                }
            </nav>
        </>
    );
};

export default Navbar;