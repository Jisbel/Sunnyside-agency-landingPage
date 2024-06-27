import {logoFooter}  from "../assets/images/index";
import  Facebook  from "./icons/Facebook";
import  Instagram  from "./icons/Instagram";
import  Twitter  from "./icons/Twitter";
import  Pinterest  from "./icons/Pinterest";

function Footer() {
  return (
    <footer className="bg-[#90D4C6] py-20 ">
      <div className="container mx-auto flex flex-col items-center space-y-16">
        <img
          src={logoFooter}
          alt="Logo"
          type="svg"
          className="h-10 mb-4 md:mb-0"
        />
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-20 text-viridian font-barlow text-lg">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-8  ">
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Pinterest/>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
