import { mobileMilk } from "../assets/images/mobile/index";
import { mobileOrange } from "../assets/images/mobile/index";
import { mobileCone } from "../assets/images/mobile/index";
import { mobileSugarCubes } from "../assets/images/mobile/index";

import { desktopMilk } from "../assets/images/desktop/index";
import { desktopOrange } from "../assets/images/desktop/index";
import { desktopCone } from "../assets/images/desktop/index";
import { desktopSugarCubes } from "../assets/images/desktop/index";

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
