import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpotifyImage from "../../../assets/spotify-logo@logotyp.us.svg";
import AppleImage from "../../../assets/apple-music.svg";
import SoundCloudImage from "../../../assets/soundcloud-logo.svg";

const imageVariants = {
  hidden: {
    opacity: 0,
    // y: 35,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      // type: "spring",
      duration: 2,
      delay: 0.5,
    },
  },
};
export default function imageContainer() {
  let { scrollYProgress } = useScroll();
  let x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <motion.div
      style={{ x }}
      className="sm:flex md:flex-row flex-col items-center sm:px-5 max-w-full justify-around"
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
    >
      <SpotifyImage />

      <SoundCloudImage />
      <AppleImage className="text-center" />
    </motion.div>
  );
}
