"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import { DropdownProps } from "@models/dropdown";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

const Dropdown: React.FC<DropdownProps> = ({ category }) => {
  const [activeMenu, setActiveMenu] = useState<string>("main");
  return (
    <div className={`${style.dropdown}`}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={100}
        classNames={`${style.menuPrimary}`}
      >
        <ul className={`${style.bigItemsList}`}>
          {category.map((value, index) => (
            <li className={`${style.text}`} key={index}>
              <Link href={`${value.link}`} className={`${style.element}`}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};
export default Dropdown;
