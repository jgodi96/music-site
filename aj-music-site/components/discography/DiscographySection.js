import React from "react";
import styles from "./DiscographySection.module.css";
import Image from "next/image";
import MicrophoneImage from "../../assets/Microphone.jpg";
import PluginImage from "../../assets/plugins.jpg";
import Link from "next/link";
import InstrumentsImage from "../../assets/instruments.jpg";
import BlockFooter from "../template/BlockFooter";
import AlbumDisplay from "./AlbumDisplay";

const projects = [
  
  {
    id: 1,
    image: InstrumentsImage,
    title: "Hi",
    artist: "album1",
  },
  {
    id: 2,
    image: InstrumentsImage,
    title: "Hi",
    artist: "album2",
  },
  {
    id: 3,
    image: InstrumentsImage,
    title: "Hi",
    artist: "album3",
  },
];
export default function DiscographySection() {
  return (
    <>
      <div className={styles["discography-container"]}>
        <div className="flex items-center gap-1 justify-center">
          <Link className="hover:underline" href="/">
            home
          </Link>{" "}
          <span className="text-[var(--grey)]">/ discography</span>
        </div>
        <div className="max-w-full mb-[2rem]">
          {/* ROW 1 POPULAR */}
          <div className="self-start max-w-full">
            <h1 className="text-5xl px-5 sm:text-6xl sm:px-10">Popular</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <AlbumDisplay key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* ROW 2 RECENT */}
          <div className="self-start max-w-full">
            <h1 className="text-5xl px-5 sm:text-6xl sm:px-10">Recent</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <AlbumDisplay key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* ROW 2 Albums */}
          <div className="self-start max-w-full">
            <h1 className="text-5xl px-5 sm:text-6xl sm:px-10">Albums</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <AlbumDisplay key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="self-start max-w-full">
            <h1 className="text-5xl px-5 sm:text-6xl sm:px-10">Singles/Eps</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <AlbumDisplay key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        <BlockFooter />
      </div>
    </>
  );
}
