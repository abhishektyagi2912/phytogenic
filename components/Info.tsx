"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplet } from "lucide-react";

const BENEFITS = [
  {
    title: "Reduces Pigmentation",
    desc: "Vitamin C and niacin help fade sun or dark spots by reducing melanin synthesis.",
  },
  {
    title: "Smoothing",
    desc: "Vitamin C aids in the synthesis of collagen, the protein that gives skin elasticity and firmness.",
  },
  {
    title: "Protecting",
    desc: "Antioxidants protect skin from UVA/UVB rays, pollution and other environmental stressors.",
  },
  {
    title: "Brightening",
    desc: "Breaks down dead skin cells for a visibly brighter, more even complexion.",
  },
];

const Info = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-16 sm:py-20">
      <div className="container-custom grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">
            <Droplet className="h-3.5 w-3.5" /> Featured Ingredient
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-snug text-forest-950 sm:text-3xl">
            Camu Camu is a Vitamin C power ingredient — 3,000 milligrams of
            vitamin C for every gram of fruit.
          </h2>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-forest-600">
            Skin Care Benefits of Camu Camu
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-surface p-4"
              >
                <p className="font-semibold text-forest-800">{benefit.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-sage-600">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
            <Image
              src="/images/camu.jpg"
              alt="Camu camu herbal extract"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
