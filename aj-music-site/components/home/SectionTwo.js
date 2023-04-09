import styles from "./SectionTwo.module.css";
import Image from "next/image";
import SpotifyImage from "../../assets/spotify-logo@logotyp.us.svg";
import AppleImage from "../../assets/Apple_Music_logo.svg";
import SoundCloudImage from "../../assets/soundcloud-logo@logotyp.us (1).svg";
import RecentAlbumImage from "../../assets/blonde.jpg";
import { Spotify } from "react-spotify-embed";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

function SectionTwo() {
  return (
    <section
      className={`${styles["section-two-container"]} border border-b-[var(--tea-green)]`}
    >
      <h1 className="mt-10 text-5xl text-[var(--cambridge-blue)] font-semibold ">
        Music
      </h1>

      <div className="flex flex-col">
        <div className={styles["recent-album-container"]}>
          <div className="relative">
            <Image src={RecentAlbumImage} height="600" width="600"></Image>
            <Link href="/discography" className="">
              <div className="absolute w-[72%] h-[15%] top-[50%] -rotate-90 bg-[var(--cambridge-blue)] translate-y-[-50%] left-[-35%] flex items-center justify-center">
                <h2 className="text-egg text-2xl">
                  Discography <span></span>
                </h2>
              </div>
            </Link>
            <div className="absolute w-[15%] h-[40%] top-80 bg-[var(--cambridge-blue)] translate-y-[17%] right-[-5%] flex flex-col items-center justify-center gap-4">
             
              <div className="flex flex-col">
                <h2 className="text-egg text-xl">April</h2>
                <h2 className="text-egg text-xl">15th,</h2>
                <h2 className="text-egg text-xl">2023</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between text-5xl ">
            <h1 className={styles["recent-album-title"]}>Blond -</h1>
            <h1 className={styles["recent-album-artist"]}>Frank Ocean</h1>
            <h1 className="text-[var(--grey)]">Album Out Now</h1>

            <Spotify
              height={200}
              width={400}
              link="https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
            />
          </div>
        </div>

        <div className={styles["platform-container"]}>
          <div className="flex gap-[10rem]">
            <Image
              src={SpotifyImage}
              className={`${styles["platform-link"]}`}
              height="200"
              width="300"
            ></Image>
            <Image src={AppleImage} height="190" width="185"></Image>
            <Image src={SoundCloudImage} height="200" width="300"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
