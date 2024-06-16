import { useState } from 'react';
import { logo } from "../assets/images/index";
import { hamburger } from "../assets/images/index";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-full h-14 mt-9 z-10">
    <div className="mx-10 flex justify-between">
      <img className="object-contain" src={logo} alt="" />
  
      <div className="font-barlow text-lg flex text-white space-x-9 items-center">
        <p className="hidden md:block">About</p>
        <p className="hidden md:block">Services</p>
        <p className="hidden md:block">Projects</p>
        <button className="hidden md:block font-fraunces700 text-base h-12 w-28 rounded-3xl bg-white text-charcoal hover:bg-[#77CEF5] hover:text-white">
          Contact
        </button>
      </div>
      <div className="relative md:hidden flex">
        <img src={hamburger} alt="Menu"    className="cursor-pointer"
            onClick={toggleMenu} />
      </div>
    </div>
    {isMenuOpen && (
   <div id="mobile" className="md:hidden font-barlow text-lg absolute top-14 left-1/2 transform -translate-x-1/2 mt-4 bg-white text-cadet max-w-xs w-full mx-1 py-10 flex flex-col items-center justify-center space-y-4">
  
  <div className="absolute -top-2 right-1 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white border-t-white"></div>

   <p>About</p>
   <p>Services</p>
   <p>Projects</p>
   <button className=" font-fraunces700 text-base h-12 w-28 rounded-3xl bg-gold text-charcoal">
     Contact
   </button>
 </div>
    )}
  </nav>
  );
};

export default Navbar;
