import React from "react";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex border border-[var(--cambridge-blue)] border-t-gray-400  min-w-[95%] justify-between">
      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--eggshell)]">Mixed By AJ</h1>
        <h1 className="text-[var(--eggshell)]">@2023, AJ</h1>
      </div>

      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--eggshell)]">Navigation</h1>
        <div className="flex gap-5">
          <h1 className="text-[var(--eggshell)]">about</h1>
          <h1 className="text-[var(--eggshell)]">contact</h1>
          <h1 className="text-[var(--eggshell)]">discography</h1>
          <h1 className="text-[var(--eggshell)]">book</h1>
        </div>
      </div>

      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--eggshell)]">Follow</h1>
        <div className="flex gap-5">
          <Link href="">
            <FaInstagram className="text-[var(--eggshell)]" />
          </Link>

          <Link href="">
            <FaApple className="text-[var(--eggshell)]" />
          </Link>

          <Link href="">
            <FaSpotify className="text-[var(--eggshell)]" />
          </Link>
          <Link href="">
            <FaSoundcloud className="text-[var(--eggshell)]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
