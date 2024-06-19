import { mobileDesign } from "../assets/images/mobile/index";
import { mobilePhotography } from "../assets/images/mobile/index";

const GraphicAndPhoto = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="relative">
        <img
          src={mobileDesign}
          alt="Graphic Design"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full gap-10 pb-10 px-5 flex flex-col items-center text-center ">
          <p className="font-fraunces900 text-darkDesaturatedCyan text-4xl">
            Graphic Design
          </p>
          <p className="font-barlow text-darkDesaturatedCyan text-lg">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="relative ">
        <img
          src={mobilePhotography}
          alt="Graphic Design"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full gap-10 pb-10 px-5 flex flex-col items-center text-center ">
          <p className="font-fraunces900 text-darkBlue text-4xl">
          Photography
          </p>
          <p className="font-barlow text-darkBlue text-lg">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default GraphicAndPhoto;
