import { emily } from "../assets/images/index";
import { jennie } from "../assets/images/index";
import { thomas } from "../assets/images/index";

function Testimonial() {
  return (
    <section>
      <p>CLIENT TESTIMONIALS</p>
      <div>
        <div>
          <img src={emily} alt="" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p>Emily R.</p>
          <p>Marketing Director</p>
        </div>
        <div>
          <img src={thomas} alt="" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p>Thomas S.</p>
          <p>Chief Operating Officer</p>
        </div>
        <div>
          <img src={jennie} alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!{" "}
          </p>
          <p>Jennie F.</p>
          <p>Business Owner</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
