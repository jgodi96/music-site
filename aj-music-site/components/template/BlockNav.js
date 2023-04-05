import React from "react";
import styles from "./BlockNav.module.css";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";

function BlockNav() {
  return (
    <div className={styles["nav-container"]}>
      <div className="flex w-full items-center justify-center gap-x-20">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <Link href="/discography">discography</Link>
        <Link href="/book">book</Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link href="/"></Link>
      </div>

      <div className="flex w-full items-center justify-center gap-x-20">
        <Link href="">
          <FaInstagram />
        </Link>

        <Link href="">
          <FaApple />
        </Link>

        <Link href="">
          <FaSpotify />
        </Link>
        <Link href="">
          <FaSoundcloud />
        </Link>
      </div>
    </div>
  );
}

export default BlockNav;
