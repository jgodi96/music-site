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
        <div
          className={`${styles["recent-album-container"]} flex-col items-center two:flex-row twosm:flex-row  gap-[2rem] twosm:gap-[5rem] twosm:pl-20 two-sm:pr-10 pr-10 pl-11`}
        >
          <div className="max-w-full relative ">
            <Image
              src={RecentAlbumImage}
              alt="Album Image"
              style={{
                objectFit: "contain",
                width: "100% ",
                position: "relative",
                height: "unset",
              }}
            ></Image>
            <Link href="/discography" className="">
              <div className="absolute w-[72%] h-[15%] top-[50%] -rotate-90 bg-[var(--cambridge-blue)] translate-y-[-50%] left-[-35%] flex items-center justify-center">
                <h2 className="text-egg text-2xl ">
                  Discography <span></span>
                </h2>
              </div>
            </Link>
            <div className="absolute w-[15%] h-[40%] bg-[var(--cambridge-blue)] translate-y-[-100%] right-[-5%] flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-egg text-xl">April</h2>
                <h2 className="text-egg text-xl">15th,</h2>

                <h2 className="text-egg text-xl">2023</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center twosm:items-start  justify-between lg:text-5xl md:text-5xl text-4xl max-w-full">
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
          </div>
        </div>

        <div className="flex max-w-full lg:gap-[10rem] gap-[4rem] twosm:gap-[6rem]">
          <Image
            src={SpotifyImage}
            className={`${styles["platform-link"]}`}
            style={{
              objectFit: "contain",
              position: "relative",
              height: "unset",
            }}
            className="max-w-[20rem]"
          ></Image>
          <Image
            src={AppleImage}
            style={{
              objectFit: "contain",
              position: "relative",
              height: "unset",
            }}
            className="max-w-[20rem]"
          ></Image>
          <Image
            src={SoundCloudImage}
            style={{
              objectFit: "contain",
              position: "relative",
              height: "unset",
            }}
            className="max-w-[20rem]"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
