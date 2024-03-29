import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useAppContext } from "../../context/app-context";
import MobileNavBar from "./Mobile/MobileNavBar";

const MobileNav = () => {
  const { showNav, hideNav, showMobileNav } = useAppContext();
  const [scroll, setScroll] = useState(false);
  const [initialNav, setInitialNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight - 30);
    });
    console.log(scroll);
  }, []);

  const closeHandler = () => {
    hideNav();
    setInitialNav(true);
  };
  const openHandler = () => {
    showNav();
    setInitialNav(true);
  };
  return (
    <>
   {showMobileNav ? (  <MobileNavBar click={closeHandler}/>
      
   ) : ( <div
      className={`fixed top-0 flex w-full justify-end pr-[2rem] pt-[1rem] z-[99] lg:invisible `}
    >

      <GiHamburgerMenu
        onClick={openHandler}
        className={` text-6xl ${scroll ? "text-cambridge transition" : 'text-cambridge'}`}
      /> </div>)}
  
    
   
    
    </>
  );
};

export default MobileNav;
