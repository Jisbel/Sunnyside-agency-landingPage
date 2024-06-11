import { desktopHeader } from "../assets/images/desktop/index";
import { arrowDown } from "../assets/images/index";

const Header = () => {
    return (
    <header className="">
        <img className=" " src={desktopHeader} alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="font-fraunces900 text-[56px] tracking-[8.75px]">WE ARE CREATIVES</p>
            <img src={arrowDown} alt="" className="mt-20" />
        </div>
    </header>

    );
  };
  
  export default Header;