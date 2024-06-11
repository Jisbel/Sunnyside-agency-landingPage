import { logo } from "../assets/images/index";


const Navbar = () => {
    return (
      <nav className="absolute w-full h-14 mt-9">
      <div className="mx-10 flex justify-between">
      <img className="object-contain" src={logo} alt="" />

        <div className="font-barlow text-lg flex text-white space-x-9 items-center">
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <button className="font-fraunces700 text-base h-11 w-28 rounded-3xl bg-white text-charcoal hover:bg-[#77CEF5] hover:text-white">Contact</button>
        </div>
      </div>
    </nav>
    );
  };
  
  export default Navbar;