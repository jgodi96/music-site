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
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href="/"
        >
          home
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition "
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href="/about"
        >
          about
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href="/contact"
        >
          contact
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href="/discography"
        >
          discography
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
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
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href=""
        >
          <FaInstagram />
        </Link>

        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href=""
        >
          <FaApple />
        </Link>

        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
          }
          href=""
        >
          <FaSpotify />
        </Link>
        <Link
          className={
            scroll
              ? "text-[var(--cambridge-blue)] transition"
              : "text-[var(--eggshell)] hover:text-[var(--cambridge-blue)] hover:scale-110 transition"
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
