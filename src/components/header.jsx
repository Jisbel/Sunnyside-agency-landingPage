import { desktopHeader } from "../assets/images/desktop/index";
import { mobileHeader } from "../assets/images/mobile/index";
import { arrowDown } from "../assets/images/index";

const Header = () => {
  return (
    <header className="">
      <img
        className="w-full h-auto hidden md:block"
        src={desktopHeader}
        alt="Desktop Header"
      />

      <img
        className="w-full h-auto md:hidden"
        src={mobileHeader}
        alt="Mobile Header"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white md:-mt-12 lg:-mt-16">
        <p className="font-fraunces900 text-4xl xl:text-6xl md:-mt-24 lg:-mt-0 tracking-[8.75px] text-center">
          WE ARE CREATIVES
        </p>
        <img
          src={arrowDown}
          alt="Arrow Down"
          className="mt-4 md:mt-10 md:h-24 lg:h-auto xl:mt-20 lg:mt-14"
        />
      </div>
    </header>
  );
};

export default Header;
