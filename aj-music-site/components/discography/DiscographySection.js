import React from "react";
import styles from "./DiscographySection.module.css";
import Image from "next/image";
import MicrophoneImage from "../../assets/Microphone.jpg";
import PluginImage from "../../assets/plugins.jpg";
import Link from "next/link";
import InstrumentsImage from "../../assets/instruments.jpg";
import BlockFooter from "../template/BlockFooter";
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
        <div className="min-w-full mb-[2rem]">
          <div className="self-start min-w-full">
            <h1 className="text-6xl px-10">Popular</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group cursor-pointer relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group cursor-pointer relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
            </div>
          </div>

          {/* ROW 2 RECENT */}
          <div className="self-start min-w-full">
            <h1 className="text-6xl px-10">Recent</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
            </div>
          </div>

          {/* ROW 2 Albums */}
          <div className="self-start min-w-full">
            <h1 className="text-6xl px-10">Albums</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
            </div>
          </div>

          <div className="self-start min-w-full">
            <h1 className="text-6xl px-10">Singles/Eps</h1>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              </div>
            </div>
          </div>
        </div>

        <BlockFooter />
      </div>
    </>
  );
}
