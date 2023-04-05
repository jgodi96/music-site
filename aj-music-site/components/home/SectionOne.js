import React from "react";
import styles from "./SectionOne.module.css";
import Link from "next/link";
import Image from "next/image";
import CoverImage from "../../assets/troy.jpg";

import { IoIosArrowDown } from "react-icons/io";
function SectionOne() {
  return (
    <>
      <div>
        <Image
          priority
          class="relative h-full w-full "
          src={CoverImage}
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>

      <section className={styles["section-one-container"]}>
        <div className={styles["book-container"]}>
          <h1 className="text-[var(--eggshell)] text-5xl">
            Mixed By <span className="text-[var(--cambridge-blue)] ">Aj</span>
          </h1>
          <h3 className="text-[var(--eggshell)] text-xl">
            Recording. Production, Mixing and Mastering
          </h3>
          <h3 className="text-[var(--eggshell)] text-xl font ">
            San Diego, California
          </h3>
          <div className={styles.btncontainer}>
            <Link href="/book">
              <div className="text-[var(--eggshell)] border p-1 px-2 text-base ">
                Book
              </div>
            </Link>
          </div>
        </div>
        <IoIosArrowDown className={styles["down-icon"]} />
      </section>
    </>
  );
}

export default SectionOne;
