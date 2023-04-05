import React from "react";
import Image from "next/image";
import Button from "../button/buttons";
import InstrumentsImage from "../../assets/instruments.jpg";
export default function MixFlex() {
  return (
    <div className="flex px-40 gap-20 my-[5rem]">
      <div class="mt-[2rem] group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="min-h-[500px] min-w-[500px]">
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
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-6xl">Send Your Mix</h1>
        <div className="flex px-40 gap-20 my-[1rem]">
          <div className="flex flex-col items-center">
            <h1>Phone</h1>

            <p className="max-w-[30ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1>Phone</h1>
            <p className="max-w-[30ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
        </div>
        <Button buttonType="contact">Contact</Button>
      </div>
    </div>
  );
}
