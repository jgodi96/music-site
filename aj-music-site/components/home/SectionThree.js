import React from "react";
import styles from "./SectionThree.module.css";
import DawImage from "../../assets/protools.jpg";
import HardwareImage from "../../assets/hardware.jpg";
import CertImage from "../../assets/pro-tools-cert.png";
import MicrophoneImage from "../../assets/Microphone.jpg";
import PluginImage from "../../assets/plugins.jpg";
import InstrumentsImage from "../../assets/instruments.jpg";
import Image from "next/image";
import Footer from "../template/BlockFooter";
import { motion } from "framer-motion";

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
function SectionThree() {
  return (
    <>
      <div class="relative flex flex-col min-h-screen gap-y-5 bg-[var(--eggshell)] items-center">
        <motion.h1
          class="justify-self-start mt-10 text-5xl font-semibold "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Gear
        </motion.h1>
        <div class="m-auto">
          <div class="flex items-center justify-center mb-9">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  {/* <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  /> */}
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={DawImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[77.7%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-[var(--eggshell)]">
                    DAW
                  </h1>
                  <div class="mb-[13.5rem]  text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul>
                      <li>Pro Tools</li>
                      <li>Logic Pro X</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={CertImage}
                    placeholder="blur"
                    quality={100}
                    style={{
                      objectFit: "cover",
                    }}
                    fill
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[77.7%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-[var(--eggshell)]">
                    Certificates
                  </h1>
                  <div class="mb-[15rem] text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul>
                      <li>Pro Tools Certification</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={HardwareImage}
                    placeholder="blur"
                    quality={100}
                    fill
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[77.7%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-[var(--eggshell)]">
                    Hardware
                  </h1>
                  <div class="text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul>
                      <li>14" Macbook Pro M1 Pro 32GB</li>
                      <li>UA Apollo X8</li>
                      <li>Scarlett Focusrite 18i20</li>
                      <li>Warm Audio WA76</li>
                      <li>ART Pro MPA II</li>
                      <li>ART Pro VLA II</li>
                      <li>DBX 266xs</li>
                      <li>Behringer Ultragain Pro</li>
                      <li>Presonus Eris E5</li>
                      <li>Warm Audio TB12 (offsite)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={MicrophoneImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[77.7%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-[var(--eggshell)]">
                    Microphones
                  </h1>
                  <div class="mb-[11rem]  text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul>
                      <li>Townsend L22/UA DLX</li>
                      <li>Warm Audio WA87</li>
                      <li>Warm Audio WA47 Jr</li>
                      <li>Behringer C2 (pair)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={PluginImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[77.7%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-[var(--eggshell)]">
                    Plugins
                  </h1>
                  <div class="mb-[2rem]  text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul>
                      <li>Slate Digital All Access (Meta Tune)</li>
                      <li>UAD Legacy Compressors</li>
                      <li>Izotope Ozone 9 Elements</li>
                      <li>PA Shadow Hills Mastering</li>
                      <li>Sonic Academy ANA 2</li>
                      <li>SoundToys (Little Plate, Decapitator, etc.)</li>
                      <li>Waves (CLA comp., Waves Tune, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <Image
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={InstrumentsImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[77.7%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-[var(--eggshell)]">
                    Instruments
                  </h1>
                  <div class="mb-[9.5rem]  text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul>
                      <li>Yamaha FD01S acoustic </li>
                      <li>Epiphone Les Paul 100</li>
                      <li>Alvarez acoustic </li>
                      <li>Squire H Bass</li>
                      <li>Alesis V49 MIDI controller</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SectionThree;
