import React from "react";
import styles from "./SectionOne.module.css";
import Link from "next/link";
import Image from "next/image";
import CoverImage from "../../assets/troy.jpg";

import { IoIosArrowDown } from "react-icons/io";
function SectionOne() {
  return (
    <>
      <section className={`${styles["section-one-container"]}`}>
        <Image
          priority
          className="relative"
          src={CoverImage}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
        <div className={styles["primary-heading-container"]}>
          <h1 className="text-[var(--eggshell)] text-5xl">
            <span className=" block uppercase tracking-wide animate-bottom-up animation-delay-700 opacity-0">
              Mixed By <span className="text-cambridge  ">Aj</span>{" "}
            </span>
            <span className="text-egg text-xl block animate-bottom-up animation-delay-1000 opacity-0">
              Recording, Production, Mixing and Mastering
            </span>
            <span className="text-egg text-xl block animate-bottom-up animation-delay-1000 opacity-0">
              San Diego, California
            </span>
          </h1>

          <div className={styles.btncontainer}>
            <Link href="/book">
              <div className="text-[var(--eggshell)] border p-1 px-2 text-base hover:text-[var(--cambridge-blue)] hover:border-[var(--cambridge-blue)] hover:scale-110 transition active:scale-100 active:opacity-50 animate-fade-in animation-delay-1600 opacity-0 ">
                Book
              </div>
            </Link>
          </div>
        </div>
        <div className="animate-up-bottom animation-delay-2000 opacity-0">
        <IoIosArrowDown
          className={`${styles["down-icon"]} opacity-0`}
        />
        </div>
      </section>
    </>
  );
}

export default SectionOne;
