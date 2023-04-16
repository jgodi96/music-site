import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'


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
export default function Gear({image,title,list,rem}) {
  return (
    <motion.div 
     variants={imageVariants}
        initial="hidden"
        whileInView="visible"
    class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div class="h-96 w-72">
      {/* <img
        class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      /> */}
      <Image
        class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src={image}
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
        {title}
      </h1>
      <div className={`mb-[${rem}]  text-lg italic text-[var(--eggshell)] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
        <ul>
          {list.map((gear)=><li key={gear.id}>{gear.name}</li>)
            
          }
        </ul>
      </div>
    </div>
  </motion.div>
  )
}
