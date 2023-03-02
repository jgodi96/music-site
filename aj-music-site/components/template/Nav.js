import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
function Nav() {
  return (
    <div className={styles["nav-container"]}>

      <div className={styles["nav-group-container"]}>
        <Link href="about">about</Link>
        <Link href="contact">contact</Link>
        <Link href="discography">discography</Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <h1>Title Studios</h1>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link href="">apple</Link>
        <Link href="">instagram</Link>
        <Link href="">soundcloud</Link>
      </div>
    </div>
  );
}

export default Nav;
