import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import Button from "../button/buttons";
import SuccessImage from "../../assets/checkmark.svg";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
export default function Modal({ handleClose, text }) {
  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation}
        className={`${styles["modal"]} bg-egg flex flex-col items-center justify-around`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-xl font-semibold">Thank You!</h1>

        <div className="text-5xl text-cambridge animate-pulse">
          <FaCheck />
        </div>
        <p>Your Message has been sent successfully!</p>

        <div>
          <Button buttonType="contact" onClick={handleClose}>
            Close
          </Button>
        </div>
      </motion.div>
    </Backdrop>,
    document.getElementById("modal-portal")
  );
}
