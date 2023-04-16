import BlockNav from "@/components/template/BlockNav";
import React from "react";
import ContactContainer from "@/components/contact/ContactContainer";
import MobileNav from "@/components/template/MobileNav";
function contact() {
  return (
    <>
      <BlockNav />
      <MobileNav/>
      <ContactContainer/>
    </>
  );
}

export default contact;
