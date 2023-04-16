import MobileNav from "@/components/template/MobileNav";
import AboutContainer from "../components/about/AboutContainer";
import BlockNav from "../components/template/BlockNav";
function about() {
  return (
    <>
      <BlockNav />
      <MobileNav/>
      <AboutContainer />
    </>
  );
}

export default about;
