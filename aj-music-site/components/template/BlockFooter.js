import React from "react";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";
export default function BlockFooter() {
  return (
    <div className="flex border border-[var(--eggshell)] border-t-gray-400  min-w-[95%] justify-between">
      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--cambridge-blue)]">Mixed By AJ</h1>
        <h1 className="text-[var(--cambridge-blue)]">@2023, AJ</h1>
      </div>

      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--cambridge-blue)]">Navigation</h1>
        <div className="flex gap-5">
          <h1 className="text-[var(--cambridge-blue)]">about</h1>
          <h1 className="text-[var(--cambridge-blue)]">contact</h1>
          <h1 className="text-[var(--cambridge-blue)]">discography</h1>
          <h1 className="text-[var(--cambridge-blue)]">book</h1>
        </div>
      </div>

      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--cambridge-blue)]">Follow</h1>
        <div className="flex gap-5">
          <Link href="">
            <FaInstagram className="text-[var(--cambridge-blue)]" />
          </Link>

          <Link href="">
            <FaApple className="text-[var(--cambridge-blue)]" />
          </Link>

          <Link href="">
            <FaSpotify className="text-[var(--cambridge-blue)]" />
          </Link>
          <Link href="">
            <FaSoundcloud className="text-[var(--cambridge-blue)]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
