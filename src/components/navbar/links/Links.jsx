"use client";
import React, { Fragment, useState } from "react";
import Styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tab = [
  {
    title: "Acceuil",
    path: "/",
  },
  {
    title: "Evenement 1",
    path: "/event1",
  },
  {
    title: "Evenement 2",
    path: "/event2",
  },
  {
    title: "Evenement 3",
    path: "/event3",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onClickHander = () => {
    setOpen(!open);
    document.body.classList.toggle("menuOpen"); // Ajoute ou supprime la classe 'menuOpen' au body
  };

  return (
    <>
      {/******div general */}
      <div>
        {/******div containe pour les liens descktop */}
        <div className={Styles.containerLinks}>
          {tab.map((item, index) => (
            <Link
              className={pathname === item.path ? `${Styles.active}` : ""}
              key={index}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/******div containe pour les liens mobile */}
        <button onClick={onClickHander} className={Styles.menuMobile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={Styles.menuIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {open && (
          <div
            className={`${Styles.containerMobileLinks} ${
              open ? Styles.open : ""
            }`}
          >
            {tab.map((item, index) => (
              <Link
                className={pathname === item.path ? `${Styles.active}` : ""}
                key={index}
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
            {/* Élément de fermeture du menu */}
            <button className={Styles.closeButton} onClick={onClickHander}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
