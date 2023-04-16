import React from "react";
import styles from "./BlockNav.module.css";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";

function BlockNav() {
  return (
    <div className={styles["nav-container"]}>
      <div className="flex w-full items-center justify-center gap-x-20">
        <Link className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="/">home</Link>
        <Link className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="/about">about</Link>
        <Link className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="/contact">contact</Link>
        <Link className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="/discography">discography</Link>
        <Link className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="/book">book</Link>
      </div>

      <div className={styles["nav-group-container"]}>
        <Link href="/"></Link>
      </div>

      <div className="flex w-full items-center justify-center gap-x-20">
        <a target="_blank" className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="https://instagram.com/ajb.wav">
          <FaInstagram />
        </a>

        <a target="_blank" className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="https://music.apple.com/us/artist/ajb/1450461310">
          <FaApple />
        </a>

        <a target="_blank" className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="https://open.spotify.com/artist/6wRvKLScKzXeUIVNEe2Sdb?si=dH_2p566R_mhIBWDzpAbig">
          <FaSpotify />
        </a>
        <a target="_blank" className="text-[var(--cambridge-blue)] hover:scale-110   transition active:text-tea active:scale-105" href="https://open.spotify.com/artist/6wRvKLScKzXeUIVNEe2Sdb?si=dH_2p566R_mhIBWDzpAbig">
          <FaSoundcloud />
        </a>
      </div>
    </div>
  );
}

export default BlockNav;
