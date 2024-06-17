import { mobileTransform } from "../assets/images/mobile/index";

const Transform = () => {

    return (

        <section className="grid ">
            <img src={mobileTransform} alt="" />

            <div className="flex flex-col items-center justify-center h-96 gap-y-6 w-full text-center px-10">
                <p className="font-fraunces900 text-charcoal text-3xl" >Transform your brand</p>
                <p className="font-barlow text-lightStaleGray text-lg" >We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="#" className="font-fraunces900 text-charcoal text-lg underline decoration-8 decoration-gold/40 " > LEARN MORE </a>
            </div>
            
        </section>

    );
};

export default Transform;