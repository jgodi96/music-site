import React from "react";
import Image from "next/image";
import Button from "../button/buttons";
import InstrumentsImage from "../../assets/instruments.jpg";
export default function MixFlex() {
  return (
    <div className="flex gap-20 my-[5rem] max-w-full">  
      <div className="flex flex-col items-center justify-between max-w-full">
        <h1 className="text-3xl sm:text-6xl">Send Your Mix</h1>
        <div className="gap-20 px-5 my-[1rem]">
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
