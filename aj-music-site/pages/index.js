import Nav from "@/components/template/Nav";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import MobileNav from "@/components/template/MobileNav";

export default function Home() {
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
