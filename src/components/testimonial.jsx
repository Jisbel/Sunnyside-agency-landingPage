import { emily } from "../assets/images/index";
import { jennie } from "../assets/images/index";
import { thomas } from "../assets/images/index";

function Testimonial() {
  return (
    <section className="flex flex-col justify-center items-center my-20">
  <p className="font-fraunces900 tracking-[4px] text-grayishBlue mb-12">CLIENT TESTIMONIALS</p>
  <div className="grid md:grid-cols-3 justify-center items-center text-center gap-16">
    <div className="flex flex-col items-center">
      <img src={emily} alt="Emily R." className="rounded-full w-20 h-20 mb-8"/>
      <p className="font-barlow text-cadet max-w-72 mb-6">
        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
      </p>
      <p className="font-fraunces900 text-lg text-charcoal mb-2">Emily R.</p>
      <p className="font-barlow text-sm text-grayishBlue">Marketing Director</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={thomas} alt="Thomas S." className="rounded-full w-20 h-20 mb-8"/>
      <p className="font-barlow text-cadet max-w-72 mb-6">
        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
      </p>
      <p className="font-fraunces900 text-lg text-charcoal mb-2">Thomas S.</p>
      <p className="font-barlow text-sm text-grayishBlue">Chief Operating Officer</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={jennie} alt="Jennie F." className="rounded-full w-20 h-20 mb-8"/>
      <p className="font-barlow text-cadet max-w-72 mb-6">
        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
      </p>
      <p className="font-fraunces900 text-lg text-charcoal mb-2">Jennie F.</p>
      <p className="font-barlow text-sm text-grayishBlue">Business Owner</p>
    </div>
  </div>
</section>

  );
}

export default Testimonial;
