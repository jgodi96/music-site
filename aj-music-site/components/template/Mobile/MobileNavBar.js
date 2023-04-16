import React from 'react'
import  ReactDOM  from 'react-dom'
import Link from 'next/link'
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";
import { IoCloseSharp } from 'react-icons/io5';
export default function MobileNavBar({click}) {
  return (
  
    <div
      className={`fixed top-0 max-w-full w-full h-screen flex flex-col gap-5 z-[99] items-center justify-center m-auto lg:invisible bg-cambridge opacity-95`}
    >
        <IoCloseSharp onClick={click} className='text-egg text-7xl absolute top-[.5rem] right-[1rem]'/>
        <Link href='/' onClick={click} className='text-egg text-5xl hover:scale-110 transition'>home</Link>
        <Link href='/about' onClick={click} className='text-egg text-5xl hover:scale-110 transition'>about</Link>
        <Link href='/contact' onClick={click} className='text-egg text-5xl hover:scale-110 transition'>contact</Link>
        <Link href='/discography' onClick={click} className='text-egg text-5xl hover:scale-110 transition'>discography</Link>
        <Link href='/book' onClick={click} className='text-egg text-5xl hover:scale-110 transition'>book</Link>

        <div className='flex items-center max-w-full justify-around gap-5' >

        <a target="_blank" href="https://instagram.com/ajb.wav" onClick={click}>
            <FaInstagram className="text-egg text-4xl hover:scale-110 transition" />
          </a>

          <a target="_blank" href="https://music.apple.com/us/artist/ajb/1450461310" onClick={click}>
            <FaApple className="text-egg text-4xl hover:scale-110 transition" />
          </a>

          <a target="_blank" href="https://open.spotify.com/artist/6wRvKLScKzXeUIVNEe2Sdb?si=dH_2p566R_mhIBWDzpAbig" onClick={click}>
            <FaSpotify className="text-egg text-4xl hover:scale-110 transition" />
          </a>
          <a target="_blank" href="https://open.spotify.com/artist/6wRvKLScKzXeUIVNEe2Sdb?si=dH_2p566R_mhIBWDzpAbig" onClick={click}>
            <FaSoundcloud className="text-egg text-4xl  hover:scale-110 transition" />
          </a>

        </div>

      
    </div>
  )
}
