import React from "react";
import styles from "./BookSection.module.css";
import BlockFooter from "../../components/template/BlockFooter";
import BookFlex from "./BookFlex";
import MixFlex from "./MixFlex";
import Link from "next/link";
export default function BookSection() {
  return (
    <div className={styles["book-section"]}>
      <div className="flex flex-col items-center justify-around  gap-10">
        <div className="flex items-center justify-center w-full">
          <Link className="hover:underline" href="/">
            home
          </Link>{" "}
          <span className="text-[var(--grey)]">/ book</span>
        </div>

        {/* Book Section */}
        <BookFlex />

        {/* Mix Section*/}
        <MixFlex />
      </div>
      <BlockFooter />
    </div>
  );
}
