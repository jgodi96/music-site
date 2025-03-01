import React from "react";
import Link from "next/link";
import { FaInstagram, FaApple, FaSpotify, FaSoundcloud } from "react-icons/fa";
export default function BlockFooter() {
  return (
    <div className="flex flex-wrap border border-[var(--eggshell)] border-t-gray-400 min-w-[95%] justify-between">
      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--cambridge-blue)]">Jdgodi</h1>
        <h1 className="text-[var(--cambridge-blue)]">@2025, Jdgodi</h1>
      </div>

      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--cambridge-blue)]">Navigation</h1>
        <div className="flex gap-5">
          <Link
            href="/"
            className="text-[var(--cambridge-blue)] hover:underline transition"
          >
            home
          </Link>
          <Link
            href="/about"
            className="text-[var(--cambridge-blue)] hover:underline transition"
          >
            about
          </Link>
          <Link
            href="/contact"
            className="text-[var(--cambridge-blue)] hover:underline transition"
          >
            contact
          </Link>
          <Link
            href="/discography"
            className="text-[var(--cambridge-blue)] hover:underline transition"
          >
            discography
          </Link>
          <Link
            href="/book"
            className="text-[var(--cambridge-blue)] hover:underline transition"
          >
            book
          </Link>
        </div>
      </div>

      <div className=" gap-y-5 p-5 flex flex-col justify-center">
        <h1 className="text-[var(--cambridge-blue)]">Follow</h1>
        <div className="flex gap-5">
          <a target="_blank" href="/">
            <FaInstagram className="text-[var(--cambridge-blue)] hover:scale-110 transition" />
          </a>

          <a target="_blank" href="/">
            <FaApple className="text-[var(--cambridge-blue)] hover:scale-110 transition" />
          </a>

          <a target="_blank" href="/">
            <FaSpotify className="text-[var(--cambridge-blue)] hover:scale-110 transition" />
          </a>
          <a target="_blank" href="/">
            <FaSoundcloud className="text-[var(--cambridge-blue)] hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
