import React from "react";
import Image from "next/image";
import { FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";
import Link from "next/link";
export default function AlbumDisplay({ project }) {
  return (
    <div class="group  relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="max-w-full">
        <Image
          class="max-h-full max-w-full object-cover transition-transform duration-500"
          src={project.image}
          quality={100}
          height={1000}
          width={1000}
          
        />
      </div>

      <div class="absolute inset-0 bg-gradient-to-b from-transparent opacity-0 group-hover:opacity-100 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        <div class="absolute sm:bottom-0 flex flex-col sm:flex-row sm:mb-4 z-50 sm:top-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between sm:w-full px-5">
          <div className="flex flex-col">
            <p className="text-egg">Artist: </p>
            <p className="text-egg">Title: </p>
          </div>
          <div className="flex flex-col justify-around">
            <p className="text-egg">Listen:</p>
            <div className="flex justify-around gap-4 self-end">
              <Link href="/discography">
                <FaApple className="text-egg cursor-pointer hover:text-cambridge hover:scale-110" />
              </Link>

              <Link href="/discography">
                <FaSpotify className="text-egg cursor-pointer hover:text-cambridge hover:scale-110" />
              </Link>

              <Link href="/discography">
                {" "}
                <FaSoundcloud className="text-egg cursor-pointer hover:text-cambridge hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
