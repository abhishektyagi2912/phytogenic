import type { Metadata } from "next";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Phytogenic Life Science's mission and vision as a premier manufacturer of cosmetic raw materials.",
};

function AboutUs() {
  return (
    <>
      <section className="bg-gradient-to-b from-forest-900 to-forest-950 py-20 text-center text-white">
        <div className="container-custom">
          <span className="section-eyebrow bg-white/10 text-sage-100">
            <Leaf className="h-3.5 w-3.5" /> About Phytogenic
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom max-w-3xl space-y-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
              Our Mission
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-forest-950 sm:text-3xl">
              We believe that raw material is the soul of formulation. It
              helps make the product quality better and effective. We are
              committed to providing the best quality raw materials to our
              customers.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-sage-700">
              <p>
                &ldquo;Our mission is to be the premier provider of
                high-quality and innovative cosmetic raw materials, committed
                to sustainability, ethical sourcing, and regulatory
                compliance. We aim to innovate and supply the highest quality
                raw materials to the cosmetic industry, fostering beauty and
                wellness through sustainable and scientifically advanced
                solutions. We strive to exceed our customers&apos;
                expectations by delivering exceptional service, fostering
                strong partnerships, and continuously improving our products
                and processes.&rdquo;
              </p>
              <p>
                We are committed to: Quality Excellence — ensuring our raw
                materials meet the highest standards of purity, safety, and
                efficacy. Sustainability — prioritizing environmentally
                responsible practices, from sourcing sustainable ingredients
                to minimizing our carbon footprint. Innovation — continuously
                researching and developing cutting-edge materials that meet
                the evolving needs of the beauty industry. Customer
                Partnership — building strong, collaborative relationships by
                providing personalized service and technical support. Ethical
                Responsibility — upholding ethical business practices and
                supporting the communities involved in our supply chain.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
              Our Vision
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-sage-700">
              <p>
                To be the premier global trading company in cosmetic raw
                materials, recognized for our integrity, innovation, and
                commitment to sustainable and ethical sourcing. We envision
                establishing ourselves as the leading trading partner for
                cosmetic raw materials, known for our extensive network and
                unmatched industry expertise — promoting sustainable sourcing
                and trading practices that protect the environment and
                support biodiversity.
              </p>
              <p>
                Building long-lasting relationships with our clients by
                understanding their unique needs, providing exceptional
                service, and offering tailored solutions that drive their
                success. By staying true to these principles, we aim to shape
                the future of the cosmetic industry, fostering a market where
                beauty, sustainability, and ethical practices go hand in
                hand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
