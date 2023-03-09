import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaTwitter } from "react-icons/fa";

function Nav() {
  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-group-container"]}>
        <Link href="about">about</Link>
        <Link href="contact">contact</Link>
        <Link href="discography">discography</Link>
        <Link href="book">book</Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <h1>Title Studios</h1>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link href="">
          <FaApple />
        </Link>
        <Link href="">
          {" "}
          <FaInstagram />
        </Link>

        <Link href=""><FaSpotify/></Link>

        <Link href=""><FaTwitter/></Link>
      </div>
    </div>
  );
}

export default Nav;
