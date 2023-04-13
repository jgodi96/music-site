import styles from "./SectionTwo.module.css";
import Image from "next/image";

import RecentAlbumImage from "../../assets/blonde.jpg";
import { Spotify } from "react-spotify-embed";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./SectionTwo/imageContainer";
import InstrumentsImage from "../../assets/instruments.jpg";
import Button from "../button/buttons";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.3,
    },
  },
};

const discographyVariants = {
  hidden: {
    opacity: 0,
    rotate: 90,
    // y: "-100%",
  },
  visible: {
    opacity: 1,
    // y: "-50%",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const releaseVariants = {
  hidden: {
    opacity: 0,
    // y: "-70%",
  },
  visible: {
    opacity: 1,
    // y: "-100%",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const ButtonVariants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
function SectionTwo() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <motion.div
      className={`${styles["section-two-container"]} border border-b-[var(--tea-green)]`}
    >
      <motion.h1
        className="mt-10 text-5xl text-[var(--cambridge-blue)] font-semibold "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        Music
      </motion.h1>

      <div className="flex flex-col max-w-full ">
        <div
          className={`${styles["recent-album-container"]} max-w-full flex-col items-center two:flex-row twosm:flex-row  gap-[2rem] twosm:gap-[5rem] twosm:pl-20 two-sm:pr-10 pr-10 pl-11`}
        >
          <div className="w-full relative ">
            <Image
              src={RecentAlbumImage}
              alt="Album Image"
              height="600"
              width="600"
            ></Image>

            <motion.div
              style={{ y }}
              className="absolute w-[72%] h-[15%] top-[50%] -rotate-90 bg-[var(--cambridge-blue)] translate-y-[-50%] left-[-35%] flex items-center justify-center"
              variants={discographyVariants}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-egg text-xl sm:text-2xl ">Frank Ocean</h2>
            </motion.div>

            <motion.div
              style={{ y }}
              initial="hidden"
              whileInView="visible"
              className="absolute w-[15%] h-[40%] bg-[var(--cambridge-blue)] translate-y-[-90%] right-[-7%] flex flex-col items-center justify-center gap-4"
              variants={releaseVariants}
            >
              <div
                className="flex flex-col justify-center items-center max-w-full min-width:0
min-height:0"
              >
                <h2 className="text-egg text-base sm:text-xl twosm:text-2xl">
                  April
                </h2>
                <h2 className="text-egg text-base sm:text-xl twosm:text-2xl">
                  15th,
                </h2>

                <h2 className="text-egg text-base sm:text-xl twosm:text-2xl">
                  2023
                </h2>
              </div>
            </motion.div>
          </div>
          <motion.div className="flex flex-col  mt-[2rem] items-start justify-between lg:text-5xl md:text-5xl text-4xl max-w-full">
            <div className="flex-col">
              <h1 className="text-3xl sm:text-5xl">Blond -</h1>
              <h1 className="text-3xl sm:text-5xl">Frank Ocean</h1>
            </div>
            <h1 className="text-[var(--grey)] mb-[2rem] text-3xl sm:text-5xl">
              Album Out Now
            </h1>
            <div className="max-w-full">
              <Spotify
                height={300}
                width={400}
                link="https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
                className="max-w-full twosm:max-w-none"
              />
            </div>
          </motion.div>
        </div>
        <ImageContainer />
      </div>
      <Link href="/discography" className="mb-[2rem]">
        <motion.button
          variants={ButtonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          whileTap={{ scale: 1.05 }}
          className="text-2xl sm:text-3xl text-egg border-2 border-tea p-4 rounded bg-cambridge"
        >
          View Discography
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default SectionTwo;
