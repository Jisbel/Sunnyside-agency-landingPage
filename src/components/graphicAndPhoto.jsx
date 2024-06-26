import {
  desktopDesign,
  desktopPhotography,
} from "../assets/images/desktop/index";
import { mobileDesign, mobilePhotography } from "../assets/images/mobile/index";

const GraphicAndPhoto = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="relative">
        <img
          src={desktopDesign}
          alt="Graphic Design"
          className="hidden md:block w-full h-auto"
        />
        <img
          src={mobileDesign}
          alt="Graphic Design"
          className="md:hidden  w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full gap-10 pb-10 px-5 flex flex-col items-center text-center ">
          <p className="font-fraunces900 text-darkDesaturatedCyan text-4xl ">
            Graphic Design
          </p>
          <p className="font-barlow text-darkDesaturatedCyan text-lg max-w-md  ">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="relative ">
        <img
          src={desktopPhotography}
          alt="Graphic Design"
          className="hidden md:block w-full h-auto"
        />
        <img
          src={mobilePhotography}
          alt="Graphic Design"
          className="md:hidden  w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full gap-10 pb-10 px-5 flex flex-col items-center text-center ">
          <p className="font-fraunces900 text-darkBlue text-4xl">Photography</p>
          <p className="font-barlow text-darkBlue text-lg max-w-sm  ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicAndPhoto;
