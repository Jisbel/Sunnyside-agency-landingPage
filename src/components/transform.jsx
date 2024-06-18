import { mobileTransform } from "../assets/images/mobile/index";
import { desktopTransform } from "../assets/images/desktop/index";

const Transform = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center ">
    <img src={desktopTransform} alt="Desktop Transform" className="hidden md:block w-full h-full order-1 md:order-2" />
    <img src={mobileTransform} alt="Mobile Transform" className="md:hidden w-full h-auto order-1" />

    <div className="order-2 md:order-1 flex flex-col justify-center gap-y-6 text-center md:text-left h-96 w-full max-w-sm mx-auto md:mx-auto px-4">
        <p className="font-fraunces900 text-charcoal text-4xl">Transform your brand</p>
        <p className="font-barlow text-lightStaleGray text-lg">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
        </p>
        <a href="#" className="font-fraunces900 text-charcoal text-lg underline decoration-8 decoration-gold/40 hover:decoration-gold">LEARN MORE</a>
    </div>
</section>
  );
};

export default Transform;
