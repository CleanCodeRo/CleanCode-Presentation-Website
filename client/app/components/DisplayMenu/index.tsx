"use client";

import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Card from "@components/Card";
import { MenuProps } from "@models/menu";
import { MenuItemProps } from "@models/menuItem";
import { CardProps } from "@models/card";

const DisplayMenu: React.FC<MenuProps> = ({ menuItems }) => {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItemProps | null>(
    null
  );

  useEffect(() => {
    if (menuItems.length > 0) {
      setActiveMenuItem(menuItems[0]);
    }
  }, [menuItems]);

  const handleMenuChange = (index: number) => {
    setActiveMenuItem(menuItems[index]);
  };

  return (
    <section className={style.section}>
      <div className={style.topSection}>
        <h2 className={style.servicesTitle}>Services</h2>
      </div>

      <div className={style.bottomSection}>
        <div className={style.leftSide}>
          {menuItems.map((menuItem: MenuItemProps, index: number) => (
            <div
              className={`${style.itemsListChild} ${
                activeMenuItem === menuItem ? style.active : ""
              }`}
              onClick={() => handleMenuChange(index)}
              key={index}
            >
              {menuItem.name}
            </div>
          ))}
        </div>

        <div className={style.rightSide}>
          {activeMenuItem ? (
            <>
              <h2 className={style.menuItemName}>{activeMenuItem.name}</h2>
              <div className={style.cardContainer}>
                {activeMenuItem.cards.map((card: CardProps, index: number) => (
                  <Card key={index} {...card} />
                ))}
              </div>
            </>
          ) : (
            <p>Please select a service to see details.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DisplayMenu;
