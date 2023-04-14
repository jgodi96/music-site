import Nav from "@/components/template/Nav";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import MobileNav from "@/components/template/MobileNav";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Home() {
  let { scrollYProgress } = useScroll();
  return (
    <>
      <Nav />
      <MobileNav />
      <SectionOne />

      <SectionTwo />
      <SectionThree />
    </>
  );
}
