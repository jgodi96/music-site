import React from "react";
import InstrumentsImage from "../../assets/instruments.jpg";
import Button from "../button/buttons";
import Image from "next/image";
export default function BookFlex() {
  return (
    <div className="flex gap-20 my-[1rem] max-w-full">
      <div className="flex flex-col items-center justify-between max-w-full">
        <h1 className="text-3xl sm:text-6xl">Book Your Session</h1>
        <div className=" gap-20 px-5 my-[1rem]">
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
        <Button buttonType="contact">Book</Button>
      </div>

    
    </div>
  );
}
