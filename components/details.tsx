"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 text-center text-white"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-[-10%]">
        <Image src="/images/About-txt1.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-forest-950/70" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="container-custom relative"
      >
        <div className="mx-auto mb-6 h-16 w-16">
          <Image
            src="/images/Icon-logo-1-removebg-preview.png"
            alt="Phytogenic logo"
            width={64}
            height={64}
            className="mx-auto"
          />
        </div>
        <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
          Our doctors recommend the best THC to CBD ratio to look for in a
          marijuana strain and suggest the recommended dosage and route.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
