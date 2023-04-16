import React from "react";
import DiscographySection from "../components/discography/DiscographySection";
import BlockNav from "@/components/template/BlockNav";
import MobileNav from "@/components/template/MobileNav";
function discography() {
  return (
    <>
      <BlockNav />
      <MobileNav />
      <DiscographySection />
    </>
  );
}

export default discography;
