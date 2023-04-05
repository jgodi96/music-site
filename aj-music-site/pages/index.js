import Nav from "@/components/template/Nav";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import Footer from "@/components/template/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useState, useEffect } from "react";

export default function Home() {
 
  return (
    <>
      <Nav/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
}
