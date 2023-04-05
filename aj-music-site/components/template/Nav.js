import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";

import { useEffect, useState } from "react";

function Nav() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 900);
    });
  }, []);
  console.log(scroll);

  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-group-container"]}>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href="/"
        >
          home
        </Link>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href="/about"
        >
          about
        </Link>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href="/contact"
        >
          contact
        </Link>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href="/discography"
        >
          discography
        </Link>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href="/book"
        >
          book
        </Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link href="/"></Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href=""
        >
          <FaInstagram />
        </Link>

        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href=""
        >
          <FaApple />
        </Link>

        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
          }
          href=""
        >
          <FaSpotify />
        </Link>
        <Link
          className={
            scroll ? "text-[var(--cambridge-blue)]" : "text-[var(--eggshell)]"
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
