import React from "react";
import DawImage from "../../assets/protools.jpg";
import HardwareImage from "../../assets/hardware.jpg";
import CertImage from "../../assets/pro-tools-cert.png";
import MicrophoneImage from "../../assets/Microphone.jpg";
import PluginImage from "../../assets/plugins.jpg";
import InstrumentsImage from "../../assets/instruments.jpg";
import Image from "next/image";
import Footer from "../template/BlockFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import Gear from './SectionThree/Gear'

const imageVariants = {
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

const gear = [
  
  {
    id: 1,
    image: DawImage,
    title: "Daw",
    rem: '13.5rem',
    list: [
      {
      id: 1,
      name:"Pro Tools"
      },
      {
        id: 2,
        name:"Logic Pro X"
        },
       
    ]
  },
  {
    id: 2,
    image: CertImage,
    title: "Certificates",
    rem:'15rem',
    list: [
      {
      id: 1,
      name:"Pro Tools Certification"
      },
    
       
    ]
  },
  {
    id: 3,
    image: HardwareImage,
    title: "Hardware",
    rem:'0',
    list: [
      {
      id: 1,
      name:"14\" Macbook Pro M1 Pro 32gb"
      },
      {
        id: 2,
        name:"UA Apollo X8"
        },
        {
          id: 3,
          name:"Scarlett Focusrite 18i20"
          },
          {
            id: 4,
            name:"Warm Audio WA76"
            },
            {
              id: 5,
              name:"ART Pro MPA II"
              },
              {
                id: 6,
                name:"ART Pro VLA II"
                },
                {
                  id: 7,
                  name:"DBX 266xs"
                  },
                  {
                    id: 8,
                    name:"Behringer Ultragain Pro"
                    },
                    {
                      id: 9,
                      name:"Presonus Eris E5"
                      },
                      {
                        id: 10,
                        name:"Warm Audio TB12 (offsite)"
                        },
                        
                          
    
       
    ]
  },
  {
    id: 4,
    image: MicrophoneImage,
    title: "Microphones",
    rem:'11rem',
    list: [
      {
      id: 1,
      name:"Townsend L22/UA DLX"
      },
      {
        id: 2,
        name:"Warm Audio WA87"
        },
        {
          id: 3,
          name:"Warm Audio WA47 Jr"
          },
          {
            id: 4,
            name:"Behringer C2 (pair)"
            },
    
       
    ]
  },
  {
    id: 5,
    image: PluginImage,
    title: "Plugins",
    rem:'2rem',
    list: [
      {
      id: 1,
      name:"Slate Digital All Access (meta tune)"
      },
      {
        id: 2,
        name:"UAD Legacy Compressors"
        },
        {
          id: 3,
          name:"Izotope Ozone 9 Elements"
          },
          {
            id: 4,
            name:"PA Shadow Hills Mastering"
            },
            {
              id: 5,
              name:"Sonic Academy ANA 2"
              },
              {
                id: 6,
                name:"SoundToys Plugins (Little Plate, Decapitator, etc.)"
                },
                {
                  id:7,
                  name:"Waves Plugins (CLA comp, Waves Tune, etc.)"
                }
    
       
    ]
  },
  {
    id: 6,
    image: InstrumentsImage,
    title: "Instruments",
    rem:'9.5rem',
    list: [
      {
      id: 1,
      name:"Yamaha FD01S Acoustic"
      },
      {
        id: 2,
        name:"Alvarez Acoustic"
        },
        {
          id: 3,
          name:"Epiphone Les Paul 100"
          },
          {
            id: 4,
            name:"Squire H Bass"
            },
            {
              id: 5,
              name:"Alesis V49 MIDI controller"
              },
            
    
       
    ]
  },

];
function SectionThree() {
  let { scrollYProgress } = useScroll();
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  let x = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  let x1 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  return (
    <>
      <div class="relative flex flex-col min-h-screen gap-y-5 bg-[var(--eggshell)] items-center">
        <motion.h1
          class="justify-self-start mt-10 text-5xl font-semibold "
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Gear
        </motion.h1>
        <div class="m-auto">
          <motion.div     
            class="flex items-center justify-center mb-9"
          >
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {gear.map((g)=><Gear image={g.image} title={g.title} list={g.list} rem={g.rem}/>)}
            </div>
          </motion.div>        
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SectionThree;
