import { mobileStandOut } from "../assets/images/mobile/index";
import { desktopStandOut } from "../assets/images/desktop/index";

const Stand = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center ">
    <img src={desktopStandOut} alt="Desktop Transform" className="hidden md:block w-full h-full" />
    <img src={mobileStandOut} alt="Mobile Transform" className="md:hidden w-full h-auto" />

    <div className="flex flex-col justify-center gap-y-6 text-center md:text-left h-96 w-full max-w-sm mx-auto md:mx-auto px-4">
        <p className="font-fraunces900 text-charcoal text-4xl">Stand out to the right audience</p>
        <p className="font-barlow text-lightStaleGray text-lg">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
        </p>
        <a href="#" className="font-fraunces900 text-charcoal text-lg underline decoration-8 decoration-softRed/40 hover:decoration-softRed">LEARN MORE</a>
    </div>
</section>
  );
};

export default Stand