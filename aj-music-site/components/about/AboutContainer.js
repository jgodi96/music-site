import React from "react";
import styles from "./AboutContainer.module.css";
import Slider from "./Slider";
import BlockFooter from "../template/BlockFooter";
export default function AboutSection() {
  return (
    <>
      <div className={`${styles["about-container"]} mt-[2rem] `}>
        <div>
          <h2 className="text-center">
            home / <span className="text-[var(--grey)] ">about</span>
          </h2>
          <Slider />
          <h1 className="text-3xl text text-[var(--grey)]  text-center">
            Lead Engineer:{" "}
            <span className="text-[var(--cambridge-blue)]">AJ</span>
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-2xl text my-[2rem] text-[var(--grey)] max-w-[50ch] p-x-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse{" "}
              <span className="text-[var(--cambridge-blue)]">compaet</span>{" "}
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <BlockFooter />
      </div>
    </>
  );
}
