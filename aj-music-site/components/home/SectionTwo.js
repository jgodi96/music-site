import styles from "./SectionTwo.module.css";
import Image from "next/image";

import RecentAlbumImage from "../../assets/blonde.jpg";
import { Spotify } from "react-spotify-embed";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./SectionTwo/imageContainer";

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
                <h2 className="text-egg text-2xl ">
                  Frank Ocean <span></span>
                </h2>
              </motion.div>
          
            <motion.div
              style={{ y }}
              initial="hidden"
              whileInView="visible"
              className="absolute w-[15%] h-[40%] bg-[var(--cambridge-blue)] translate-y-[-90%] right-[-5%] flex flex-col items-center justify-center gap-4"
              variants={releaseVariants}
            >
              <div
                className="flex flex-col max-w-full min-width: 0
min-height: 0"
              >
                <h2 className="text-egg text-xl">April</h2>
                <h2 className="text-egg text-xl">15th,</h2>

                <h2 className="text-egg text-xl">2023</h2>
              </div>
            </motion.div>
          </div>
          <motion.div className="flex flex-col items-center twosm:items-start justify-between lg:text-5xl md:text-5xl text-4xl max-w-full">
            <div className="flex twosm:flex-col">
              <h1 className="">Blond -</h1>
              <h1 className="">Frank Ocean</h1>
            </div>
            <h1 className="text-[var(--grey)] mb-[2rem]">Album Out Now</h1>

            <Spotify
              height={200}
              width={400}
              link="https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
              className="max-w-100"
            />
          </motion.div>
        </div>
        <ImageContainer />
      </div>

    </motion.div>
  );
}

export default SectionTwo;
