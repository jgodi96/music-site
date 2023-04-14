import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";

import { useEffect, useState } from "react";

function Nav() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight - 20);
    });
  }, []);

  return (
    <div
      className={`${styles["nav-container"]} invisible lg:visible 
    
    ${scroll ? "" : ""}
    
    
    `}
    >
      <div className={`${styles["nav-group-container"]} animate-fade-in`}>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href="/"
        >
          home
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105 "
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href="/about"
        >
          about
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href="/contact"
        >
          contact
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href="/discography"
        >
          discography
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href="/book"
        >
          book
        </Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link href="/"></Link>
      </div>

      <div className={`${styles["nav-group-container"]} animate-fade-in`}>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href=""
        >
          <FaInstagram />
        </Link>

        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href=""
        >
          <FaApple />
        </Link>

        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href=""
        >
          <FaSpotify />
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition active:text-tea active:scale-105"
          }
          href=""
        >
          <FaSoundcloud />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
