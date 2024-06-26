import { mobileMilk, mobileOrange, mobileCone, mobileSugarCubes } from "../assets/images/mobile/index";
import { desktopMilk,desktopOrange, desktopCone, desktopSugarCubes } from "../assets/images/desktop/index";

function Galery() {
  return (
    <section>
      <div className="hidden md:grid md:grid-cols-4">
        <img src={desktopMilk} alt="Desktop Milk" />
        <img src={desktopOrange} alt="Desktop Orange" />
        <img src={desktopCone} alt="Desktop Cone" />
        <img src={desktopSugarCubes} alt="Desktop Sugar Cubes" />
      </div>

      <div className="grid grid-cols-2 md:hidden">
        <img src={mobileMilk} alt="Mobile Milk" />
        <img src={mobileOrange} alt="Mobile Orange" />
        <img src={mobileCone} alt="Mobile Cone" />
        <img src={mobileSugarCubes} alt="Mobile Sugar Cubes" />
      </div>
    </section>
  );
}

export default Galery;
