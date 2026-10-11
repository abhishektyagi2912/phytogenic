"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import Contact from "./contact";
import AmbientGlow from "./AmbientGlow";
import SceneErrorBoundary from "./SceneErrorBoundary";
import { useIsMobile } from "./hooks/useIsMobile";
import { useProducts, useCollections } from "@/lib/queries";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

function Main() {
  const { data: products } = useProducts();
  const { data: collections } = useCollections();
  const isMobile = useIsMobile();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Purely decorative — only moves the background layer, never the text, so
  // it can never leave the hero copy dimmed or stuck at opacity 0.
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  const stats = [
    { label: "Natural Extracts", value: products?.length ? `${products.length}+` : "150+" },
    { label: "Product Collections", value: collections?.length ? `${collections.length}+` : "20+" },
    { label: "Years of Expertise", value: "10+" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-sage-100"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        {isMobile ? (
          <AmbientGlow />
        ) : (
          <SceneErrorBoundary fallback={<AmbientGlow />}>
            <HeroScene />
          </SceneErrorBoundary>
        )}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-cream-50 via-cream-50/20 to-transparent" />

      {/*
        Plain CSS keyframe animation (see tailwind.config "fade-up"), not
        Framer Motion: it runs the instant the browser paints this element,
        independent of React hydration, and the "both" fill-mode keeps the
        final opacity-1 state even if JS never loads — so the hero copy can
        never get stuck invisible behind a slow/blocked script.
      */}
      <div className="container-custom relative py-20 sm:py-24">
        <div className="max-w-3xl">
          <span className="section-eyebrow animate-fade-up [animation-delay:0.05s]">
            <Leaf className="h-3.5 w-3.5" /> Herbal Extracts &amp; Natural Actives
          </span>

          <h1 className="mt-6 animate-fade-up font-display text-4xl font-semibold leading-[1.1] text-forest-950 [animation-delay:0.15s] sm:text-5xl lg:text-6xl">
            Phytogenic Life Science
            <span className="mt-2 block text-forest-600">
              Nature&apos;s Chemistry, Engineered for Beauty
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-sage-700 [animation-delay:0.25s] sm:text-lg">
            We are a leading manufacturer of Herbal Extracts, Natural Actives
            and Speciality Chemicals — crafted with the latest technology and
            held to international quality standards, from Pushkarmool to
            Kakadu Plum.
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:0.35s]">
            <a href="/All" className="btn-primary">
              Explore Products
            </a>
            <Contact />
          </div>

          <div className="mt-14 grid max-w-xl animate-fade-up grid-cols-3 gap-4 border-t border-forest-900/10 pt-8 [animation-delay:0.45s] sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-semibold text-forest-800 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-sage-500 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sage-500 sm:flex">
        <span className="text-xs font-medium uppercase tracking-wide">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>

      <div className="absolute right-6 top-28 hidden flex-col gap-3 lg:flex">
        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-forest-800 shadow-sm backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-forest-600" /> International Compliance
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-forest-800 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-gold-500" /> Sustainably Sourced
        </div>
      </div>
    </section>
  );
}

export default Main;
