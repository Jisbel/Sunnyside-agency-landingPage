import { useState } from "react";
import { logo, hamburger } from "../assets/images/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-full h-14 mt-9 z-10">
      <div className="mx-10 flex justify-between">
        <img className="object-contain" src={logo} alt="" />

        <ul className="font-barlow text-lg flex text-white space-x-9 items-center">
          <li>
            <a href="#" className="hidden md:block">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hidden md:block">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hidden md:block">
              Projects
            </a>
          </li>
          <button className="hidden md:block font-fraunces700 text-base h-12 w-28 rounded-3xl bg-white text-charcoal hover:bg-[#77CEF5] hover:text-white">
            Contact
          </button>
        </ul>
        <div className="relative md:hidden flex">
          <img
            src={hamburger}
            alt="Menu"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="mobile"
          className="md:hidden font-barlow text-lg absolute top-14 left-1/2 transform -translate-x-1/2 mt-4 bg-white text-cadet max-w-xs w-full mx-1 py-10 flex flex-col items-center justify-center space-y-4"
        >
         
         <div className="absolute -top-5 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-white  "></div>

          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button className=" font-fraunces700 text-base h-12 w-28 rounded-3xl bg-gold text-charcoal">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
