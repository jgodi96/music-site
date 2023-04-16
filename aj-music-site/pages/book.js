import React from "react";
import BlockNav from "@/components/template/BlockNav";
import BookSection from "@/components/book/BookSection";
import MobileNav from "@/components/template/MobileNav";
export default function book() {
  return (
    <>
      <BlockNav />
      <MobileNav/>
      <BookSection />
    </>
  );
}
