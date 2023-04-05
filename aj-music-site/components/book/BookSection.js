import React from "react";
import styles from "./BookSection.module.css";
import BlockFooter from "../../components/template/BlockFooter";
import BookFlex from "./BookFlex";
import MixFlex from "./MixFlex";
export default function BookSection() {
  return (
    <div className={styles["book-section"]}>
      <div className="text-center">
        <h2 className="text-center">
          home / <span className="text-[var(--grey)] ">book</span>
        </h2>

        {/* Book Section */}
        <BookFlex />

        {/* Mix Section*/}
        <MixFlex />
      </div>
      <BlockFooter />
    </div>
  );
}
