"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const FEATURES = [
  {
    src: "/images/flash.png",
    heading: "Powerful antioxidant",
    content:
      "The Kakadu Plum contains even more antioxidants than blueberry, making it one of the most remarkable high-antioxidant foods on the planet.",
  },
  {
    src: "/images/heart-attack.png",
    heading: "Reduces signs of aging",
    content:
      "Packed with Vitamins C and E, folic acid and carotenoids, which help reverse the effects of free radicals and reduce the visible signs of aging.",
  },
  {
    src: "/images/autism.png",
    heading: "Treats acne",
    content:
      "The high content of Vitamin C present in Kakadu Plum makes it an effective remedy for the treatment of acne.",
  },
];

const TherapeuticSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-16 sm:py-20">
      <div className="container-custom grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-2xl font-semibold text-forest-950">
            Kakadu Plum
            <span className="block text-base font-normal text-sage-500">
              (Terminalia ferdinandiana)
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-sage-600">
            Kakadu Plum has 55 times more Vitamin C than an orange. It's
            usually found as a concentrate or supplement, packing a
            whopping 150–400 milligrams of Vitamin C per gram.
          </p>
          <Link href="/Contact" className="btn-primary mt-6 inline-flex">
            Contact for Info
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[2.5rem] shadow-2xl"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
            <Image src="/images/kakadu.jpg" alt="Kakadu plum" fill sizes="320px" className="object-cover" />
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          {FEATURES.map((item, index) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-forest-50">
                <Image src={item.src} alt="" width={28} height={28} />
              </div>
              <div>
                <p className="font-semibold text-forest-900">{item.heading}</p>
                <p className="mt-1 text-sm leading-relaxed text-sage-600">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticSection;
